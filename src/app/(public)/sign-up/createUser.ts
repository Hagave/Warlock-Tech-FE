import { SigninApi } from "@/interface/login.interface";
import { axiosSignin } from "@/services/axiosClient";
import { toastError, toastSuccess } from "@/util/toastify";

export const createUser = async (userData: object) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_SIGN_UP;

    await axiosSignin.post<SigninApi>(`${apiUrl}`, userData);

    toastSuccess("Usuário criado com sucesso!");
  } catch (error) {
    toastError(`Erro ao criar o usuário ${error}`);
  }
};
