import { NotesApi } from "@/interface/note.interface";
import { axiosClient } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { toastError } from "@/util/toastify";
import { useEffect, useState } from "react";

export const useNotes = () => {
  const api = process.env.NEXT_PUBLIC_GET_ALL_NOTES || "/notes";
  const [notes, setNotes] = useState<NotesApi[]>([]);
  const { user } = useUserStore.getState();

  const fetchNotes = async () => {
    if (!user?.token?.access_token) {
      return;
    }

    try {
      const response = await axiosClient.get(api);
      setNotes(response.data.userNotes);
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 401) {
        toastError("Você está deslogado!");
      } else {
        console.error("Erro ao buscar notas:", error);
      }
    }
  };

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token?.access_token, api]);

  return { notes, fetchNotes }; // Retorne a função de refresh
};
