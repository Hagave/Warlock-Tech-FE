import { useUserStore } from "@/store/useStore";
import axios from "axios";

const { user } = useUserStore.getState();

export const axiosSignin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {},
});

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${user?.token.access_token}`,
  },
});
