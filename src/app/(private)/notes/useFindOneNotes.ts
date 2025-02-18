import { useEffect, useState } from "react";
import { axiosClient } from "@/services/axiosClient";
import { useUserStore } from "@/store/useStore";
import { NotesApi } from "@/interface/note.interface";
import { toastError } from "@/util/toastify";

export const useFindOneNotes = (noteId: number | null) => {
  const api = process.env.NEXT_PUBLIC_FIND_ONE_NOTE || `/notes/find_note`;
  const { user } = useUserStore.getState();
  const [notes, setNotes] = useState<NotesApi | null>(null);

  const fetchEditNotes = async (id: number) => {
    try {
      const response = await axiosClient.get(`${api}/${id}`);
      setNotes(response.data.userNotes);
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 401) {
        toastError("Você está deslogado!");
      } else {
        console.error("Erro ao buscar nota:", error);
      }
    }
  };

  useEffect(() => {
    if (!user?.token?.access_token || noteId === null) {
      return;
    }
    fetchEditNotes(noteId);
  }, [user?.token?.access_token, api, noteId]);

  return { notes, fetchEditNotes };
};
