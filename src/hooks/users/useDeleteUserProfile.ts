import { axiosClient } from "@/services/axiosClient";
import { useSignOut } from "@/util/useSignOut";
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from "@/util/toastify";
import { IDeleteNote } from "@/interface/note.delete.interface";

export const useDeleteUserProfile = () => {
  const signOut = useSignOut();

  const deleteUserProfile = async () => {
    const api = process.env.NEXT_PUBLIC_DELETE_USER;

    try {
      const response = await axiosClient.delete<IDeleteNote>(`${api}`);
      if (!response.data.success) {
        toastInfo(`${response.data.message}`);
        return;
      }
      toastSuccess(`${response.data.message}`);
      setTimeout(() => {
        signOut();
      }, 5000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 401) {
        toastWarning("Seu token expirou. Refaça o login!");
        return;
      }
      toastError(`Erro ao excluir o usuário: ${error}`);
    }
  };

  return { deleteUserProfile };
};
