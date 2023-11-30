import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: { Authorization: "Bearer " + localStorage.getItem("api-token") },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (!err.response) return err;
    if (err.response.status != 401) return err;
    if (err.response.config?.url?.includes("/login")) return err;
    localStorage.removeItem("api-token");
    location.reload();
  }
);

export default axiosInstance;
