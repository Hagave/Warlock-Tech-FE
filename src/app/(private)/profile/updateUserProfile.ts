import { IUserPatch } from "@/interface/user.patch.interface";
import { axiosClient } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from "@/util/toastify";
import { getCookie } from "cookies-next";

export const updateUserProfile = async (data: object) => {
  const api = process.env.NEXT_PUBLIC_PATCH_USER;

  try {
    const response = await axiosClient.patch<IUserPatch>(`${api}`, data);
    if (!response.data.success) {
      toastInfo(`${response.data.message}`);
      return;
    }

    toastSuccess(`${response.data.message}`);
    const token = getCookie("token");
    const { setUser } = useUserStore.getState();
    setUser({ ...response.data.user, token });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === 401) {
      toastWarning("Seu token expirou. Refaça o login!");
    }
    toastError(`Erro ao atualizar o usuário: ${error}`);

    return false;
  }
};
