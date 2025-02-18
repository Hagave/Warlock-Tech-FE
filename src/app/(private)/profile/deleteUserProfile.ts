import { axiosClient } from "@/services/axiosClient";
import { useSignOut } from "@/util/useSignOut";
import { toastError, toastInfo, toastSuccess } from "@/util/toastify";

export const useDeleteUserProfile = () => {
  const signOut = useSignOut();

  const deleteUserProfile = async () => {
    const api = process.env.NEXT_PUBLIC_DELETE_USER || "/users/delete_user";

    try {
      const response = await axiosClient.delete(api);

      if (response.data.status === 403) {
        toastInfo("Verifique suas credenciais e tente novamente!");
        return;
      }

      toastSuccess(
        "Usuário deletado com sucesso! Você será deslogado em breve"
      );

      setTimeout(() => {
        signOut();
      }, 5000);
    } catch (error) {
      toastError(`Erro ao excluir o usuário: ${error}`);
    }
  };

  return { deleteUserProfile };
};
