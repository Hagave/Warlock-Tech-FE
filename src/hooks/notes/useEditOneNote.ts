import { useCallback, useState } from "react";
import { axiosClient } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { toastError, toastSuccess, toastWarning } from "@/util/toastify";
import { IPatchNotes } from "@/interface/note.patch.interface";

export const useEditOneNote = () => {
  const api = process.env.NEXT_PUBLIC_PATCH_NOTES;
  const { user } = useUserStore.getState();
  const [notes, setNotes] = useState<IPatchNotes | null>(null);

  const fetchEditNotes = useCallback(
    async (id: number, data: object) => {
      if (!user?.token?.access_token) {
        toastError("Você precisa estar logado para editar uma nota!");
        return;
      }

      try {
        const response = await axiosClient.patch<IPatchNotes>(
          `${api}${id}`,
          data
        );

        if (!response.data.success) {
          toastError(`${response.data.message}`);
          return;
        }
        toastSuccess(`${response.data.message}`);
        setNotes(response.data);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response?.status === 401) {
          toastWarning("Seu token expirou. Refaça o login!");
        } else {
          toastError(`Erro ao atualizar nota:, ${error}`);
        }
      }
    },
    [api, user?.token?.access_token]
  );

  return { notes, fetchEditNotes };
};
