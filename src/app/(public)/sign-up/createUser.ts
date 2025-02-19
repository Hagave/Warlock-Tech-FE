import { ISignUp } from "@/interface/sign-up.interface";
import { axiosSignin } from "@/services/axiosClient";
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from "@/util/toastify";

export const createUser = async (userData: object) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_SIGN_UP;

    const response = await axiosSignin.post<ISignUp>(`${apiUrl}`, userData);

    if (!response.data.success) {
      toastInfo(`${response.data.message}`);

      return;
    }
    toastSuccess(`${response.data.message}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === 401) {
      toastWarning("Seu token expirou. Refaça o login!");
    }
    toastError(`Houve um erro inesperado - ${error}`);
  }
};
