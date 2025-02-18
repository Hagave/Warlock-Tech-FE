import { axiosClient } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { toastError, toastInfo, toastSuccess } from "@/util/toastify";
import { getCookie } from "cookies-next";

export const updateUserProfile = async (data: object) => {
  console.log(data);
  const api = process.env.NEXT_PUBLIC_PATCH_USER || "/users/user_update";

  try {
    const response = await axiosClient.patch(`${api}`, data);
    if (response.data.status === 403) {
      toastInfo("Verifique suas credenciais e tente novamente!");
      return;
    }

    toastSuccess("Usuário alterado com sucesso!");
    const token = getCookie("token");
    const { setUser } = useUserStore.getState();
    setUser({ ...response.data.user, token });
  } catch (error) {
    toastError(`Erro ao atualizar o usuário: ${error}`);

    return false;
  }
};
