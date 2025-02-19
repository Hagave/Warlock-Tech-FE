import { IDeleteNote } from "@/interface/note.delete.interface";
import { axiosClient } from "@/services/axiosClient";
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from "@/util/toastify";

export const DeleteNotes = async (noteId: number) => {
  const api = process.env.NEXT_PUBLIC_DELETE_NOTES;

  try {
    const response = await axiosClient.delete<IDeleteNote>(`${api}${noteId}`);

    if (!response.data.success) {
      toastInfo("Erro ao deletar essa nota. Tente novamente mais tarde!");
      return;
    }

    toastSuccess(`${response.data.message}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === 401) {
      toastWarning("Seu token expirou. Refaça o login!");
    }
    toastError(`Erro ao deletar nota: ${error}`);
  }
};
