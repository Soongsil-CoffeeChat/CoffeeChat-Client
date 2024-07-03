import axios from "axios";
import { useRecoilState } from "recoil";
import { authState } from "../atoms/authState.ts";
import { useNavigate } from "react-router-dom";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "https://cogo.life",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const [auth, setAuth] = useRecoilState(authState);

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axiosInstance.post("/reissue");

        if (res.status === 200) {
          const accessToken = res.headers["access"];
          setAuth({
            isLoggedIn: true,
            username: null,
            token: accessToken,
          });
          localStorage.setItem("token", accessToken);

          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (reissueError) {
        console.error("Token reissue failed:", reissueError);
        setAuth({ isLoggedIn: false, username: null, token: null });
        localStorage.removeItem("token");
        localStorage.setItem("isLoggedIn", "false");
      }
    }

    if (error.response.status === 302) {
      const location = error.response.headers["location"];
      if (location && location.includes("/login")) {
        try {
          const res = await axiosInstance.post("/reissue");

          if (res.status === 200) {
            const accessToken = res.headers["access"];
            setAuth({
              isLoggedIn: true,
              username: null,
              token: accessToken,
            });
            localStorage.setItem("token", accessToken);

            originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
            return axiosInstance(originalRequest);
          }
        } catch (reissueError) {
          console.error("Token reissue failed:", reissueError);
          setAuth({ isLoggedIn: false, username: null, token: null });
          localStorage.removeItem("token");
          localStorage.setItem("isLoggedIn", "false");
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
