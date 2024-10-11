import axios, { AxiosError, AxiosRequestConfig } from "axios";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

const saveRoleToLocalStorage = (role: string) => {
  localStorage.setItem("role", role);
};

const axiosInstance = axios.create({
  baseURL: "https://cogo.life/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    console.log("로컬스토리지에 토큰 저장: ", token);
    if (token) {
      config.headers = config.headers || {}; // headers가 undefined일 수 있으므로 초기화
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        try {
          const token = await new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          });
          originalRequest.headers = originalRequest.headers || {}; // headers가 undefined일 수 있으므로 초기화
          originalRequest.headers.Authorization = "Bearer " + token;
          return await axiosInstance(originalRequest);
        } catch (err) {
          return await Promise.reject(err);
        }
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        axios
          .post(
            "https://cogo.life/reissue",
            {},
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then(({ data }) => {
            const newToken = data.accessToken;
            setTokenToLocalStorage(newToken);
            axiosInstance.defaults.headers.Authorization = "Bearer " + newToken;

            originalRequest.headers = originalRequest.headers || {}; // headers가 undefined일 수 있으므로 초기화
            originalRequest.headers.Authorization = "Bearer " + newToken;

            processQueue(null, newToken);
            resolve(axiosInstance(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            // 토큰 재발급 실패 시 로그아웃 처리 등 추가 작업
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
