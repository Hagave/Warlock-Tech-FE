import { useState } from "react";
import { axiosClient } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { toastError, toastSuccess } from "@/util/toastify";
import { PatchNotesApi } from "@/interface/note.patch.interface";

export const useEditOneNote = () => {
  const api = process.env.NEXT_PUBLIC_PATCH_NOTES || `notes/update_note`;
  const { user } = useUserStore.getState();
  const [notes, setNotes] = useState<PatchNotesApi | null>(null);

  const fetchEditNotes = async (id: number, data: object) => {
    if (!user?.token?.access_token) {
      toastError("Você precisa estar logado para editar uma nota!");
      return;
    }

    try {
      const response = await axiosClient.patch(`${api}/${id}`, data);
      setNotes(response.data.userNotes);
      toastSuccess("Nota atualizada com sucesso!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 401) {
        toastError("Você está deslogado!");
      } else {
        console.error("Erro ao atualizar nota:", error);
      }
    }
  };

  return { notes, fetchEditNotes };
};
