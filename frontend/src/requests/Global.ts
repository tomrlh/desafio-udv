import axios from "axios";

export const defaultHeaders = () => {
  return { Authorization: `Bearer ${localStorage.getItem("token")}` };
};

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8001/api/",
  timeout: 100000,
  headers: defaultHeaders()
});
