import axios from "axios";

const authAxiosInstanceReissue = axios.create({
  baseURL: "https://cogo.life",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default authAxiosInstanceReissue;
