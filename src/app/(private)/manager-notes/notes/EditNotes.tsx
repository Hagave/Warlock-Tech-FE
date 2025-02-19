import { useEditeNote } from "@/hooks/notes/useEditNote";
import React from "react";

interface EditNoteProps {
  exit: () => void;
  noteId: number;
  noteData: { title: string; description: string };
}
export const EditNotes = ({ noteId, noteData, exit }: EditNoteProps) => {
  const { form, handleSubmit, handleChange } = useEditeNote({
    noteId,
    noteData,
    exit,
  });
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 shadow-md">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Editar Nota
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-600"
            >
              Título
            </label>
            <input
              id="title"
              name="title"
              value={form.title || ""}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o título da nota"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-600"
            >
              Descrição
            </label>
            <input
              id="description"
              name="description"
              value={form.description || ""}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
              placeholder="Digite a descrição da nota"
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              onClick={handleSubmit} // Chama o handleSubmit para disparar a requisição
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Atualizar
            </button>

            <button
              type="button"
              onClick={exit}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
