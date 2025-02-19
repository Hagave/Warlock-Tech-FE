import { ISignIn } from "@/interface/sign-in.interface";
import { axiosSignin } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { toastError, toastInfo, toastSuccess } from "@/util/toastify";
import { setCookie } from "cookies-next";

export const signIn = async (form: object) => {
  const api = process.env.NEXT_PUBLIC_API_SIGN_IN;
  try {
    const response = await axiosSignin.post<ISignIn>(`${api}`, form);

    if (!response.data.success) {
      toastInfo(`${response.data.message}`);
      return;
    }
    const { setUser } = useUserStore.getState();
    const user = { ...response.data.user, token: response.data.token };
    setUser(user);
    setCookie("token", user.token.access_token, { maxAge: 60 * 60 * 24 }); // O token expira após 24h
    toastSuccess(`Bem-vindo ${user.name}!`);
  } catch (error) {
    toastError(`Erro ao fazer login ${error}`);
  }
  return {};
};
