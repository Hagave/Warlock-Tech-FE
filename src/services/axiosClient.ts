import { useUserStore } from "@/store/useStore";
import axios from "axios";

const getAuthHeader = () => {
  const { user } = useUserStore.getState();
  return user?.token?.access_token ? `Bearer ${user.token.access_token}` : "";
};

export const axiosSignin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
});

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const authHeader = getAuthHeader();
    if (authHeader) {
      config.headers["Authorization"] = authHeader;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
