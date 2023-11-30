import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
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
    logout();
  }
);

export function logout() {
  localStorage.removeItem("api-token");
  location.reload();
  axiosInstance.defaults.headers["Authorization"] = undefined;
}

export function setUserToken(token) {
  localStorage.setItem("api-token", token);
  axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
}

export default axiosInstance;
