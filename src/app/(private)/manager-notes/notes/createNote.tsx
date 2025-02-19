import Form from "@/components/Form/form";
import { Input } from "@/components/Input/input";
import { Label } from "@/components/Label/label";
import React from "react";
import { createNotes } from "./createNotes";

interface CreateNoteProps {
  form: { [key: string]: string };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  resetForm: () => void;
  exit: () => void;
}

export const CreateNotePage = ({
  form,
  handleChange,
  resetForm,
  exit,
}: CreateNoteProps) => {
  const handleSend = async () => {
    const { ...userData } = form;
    const createdNote = await createNotes(userData);

    if (createdNote) {
      resetForm();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 shadow-md">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <Form buttonName="Enviar" onSubmit={handleSend}>
          <span>No que você está pensando?</span>

          <div className="mb-4">
            <Label>Digite o Título</Label>
            <Input
              name="title"
              value={form.title || ""}
              onChange={handleChange}
              placeholder="Título da nota"
              required
            />
          </div>
          <div className="mb-4">
            <Label>Digite a descrição</Label>
            <Input
              name="description"
              value={form.description || ""}
              onChange={handleChange}
              placeholder="Descrição da nota"
              required
            />
          </div>
        </Form>
        <button
          onClick={exit}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
