import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import axiosInstance from './axiosInstance';

export interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const reissueToken = async () => {
  try {
    const response = await axios.post(
      'https://cogo.life/reissue',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    const newToken = response.data.accessToken;
    localStorage.setItem('accessToken', newToken);
    return newToken;
  } catch (error) {
    console.error('Failed to reissue access token:', error);
    throw error;
  }
};

const requestWithReissue = async (config: ExtendedAxiosRequestConfig) => {
  try {
    return await axiosInstance(config);
  } catch (error) {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as ExtendedAxiosRequestConfig;

    if (axiosError.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await reissueToken();
        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        } else {
          originalRequest.headers = { Authorization: `Bearer ${newToken}` };
        }
        return axiosInstance(originalRequest);
      } catch (reissueError) {
        console.error('Failed to reissue access token:', reissueError);
        throw reissueError;
      }
    } else {
      console.log('An unexpected error occurred');
      throw error;
    }
  }
};

export default requestWithReissue;