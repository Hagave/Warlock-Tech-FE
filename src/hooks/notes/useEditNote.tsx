import React, { useCallback, useEffect } from "react";
import { useHandleForm } from "@/hooks/useHandleForm";
import { useEditOneNote } from "./useEditOneNote";
import { toastInfo } from "@/util/toastify";

interface EditeNoteProps {
  exit: () => void;
  noteId: number;
  noteData: { title: string; description: string };
}

export const useEditeNote = ({ noteId, noteData, exit }: EditeNoteProps) => {
  const { fetchEditNotes } = useEditOneNote();
  const { form, handleChange, resetFormData } = useHandleForm();

  useEffect(() => {
    resetFormData();
    Object.entries(noteData).forEach(([key, value]) => {
      handleChange({
        target: { name: key, value },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteData]);

  const handleSubmit = useCallback(
    (/*e: React.FormEvent*/) => {
      //e.preventDefault();
      if (!form.title || !form.description) {
        toastInfo("Por favor, preencha todos os campos.");
        return;
      }
      fetchEditNotes(noteId, form);
    },
    [fetchEditNotes, form, noteId]
  );
  return { form, exit, handleChange, handleSubmit };
};
