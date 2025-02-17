import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const toastSuccess = (message: string) => {
  toast.success(message, defaultOptions);
};

export const toastError = (message: string) => {
  toast.error(message, defaultOptions);
};

export const toastWarning = (message: string) => {
  toast.warn(message, defaultOptions);
};

export const toastInfo = (message: string) => {
  toast.info(message, defaultOptions);
};

export const toastLoading = (message: string) => {
  return toast.loading(message, { position: "bottom-right" });
};

export const dismissToast = (toastId: string | number) => {
  toast.dismiss(toastId);
};

export const ToastProvider = () => {
  return <ToastContainer />;
};
