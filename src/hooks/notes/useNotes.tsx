import { INoteFindAll } from "@/interface/note.findAll.interface";
import { axiosClient } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { toastError, toastInfo, toastWarning } from "@/util/toastify";
import { useEffect, useState } from "react";

export const useNotes = () => {
  const api = process.env.NEXT_PUBLIC_GET_ALL_NOTES;
  const [notes, setNotes] = useState<INoteFindAll>();
  const { user } = useUserStore.getState();

  const fetchNotes = async () => {
    if (!user?.token?.access_token) {
      return;
    }

    try {
      const response = await axiosClient.get(`${api}`);

      if (!response.data.success) {
        toastInfo(`${response.data.message}`);
        return;
      }
      setNotes(response.data.sanitizedNotes);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 401) {
        toastWarning("Seu token expirou. Refaça o login!");
        return;
      } else {
        toastError(`Erro ao buscar notas: ${error}`);
      }
    }
  };

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token?.access_token, api]);

  return { notes, fetchNotes }; // Retorne a função de refresh
};
