import { axiosClient } from "@/services/axiosClient";
import { toastError, toastSuccess } from "@/util/toastify";

export const DeleteNotes = async (noteId: number) => {
  const api = process.env.NEXT_PUBLIC_DELETE_NOTES || "/notes/delete_note";

  try {
    await axiosClient.delete(`${api}/${noteId}`);
    toastSuccess("Nota deletada com sucesso");
  } catch (error) {
    toastError(`Erro ao deletar nota: ${error}`);
  }
};
