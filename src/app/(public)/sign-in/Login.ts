import { axiosSignin } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { toastError, toastSuccess } from "@/util/toastify";
import { setCookie } from "cookies-next";

export const Login = async (form: object) => {
  try {
    const response = await axiosSignin.post("/auth/signin", form);
    if (!response.data.error) {
      const { setUser } = useUserStore.getState();

      const user = { ...response.data.user, token: response.data.token };

      setUser(user);
      setCookie("token", user.token.access_token, { maxAge: 60 * 60 * 24 }); // O token expira após 24h
      toastSuccess(`Bem-vindo ${user.name}!`);
    }
  } catch (error) {
    console.log(`Erro ao fazer login: ${error}`);
    toastError("Erro ao fazer login");
  }
};
