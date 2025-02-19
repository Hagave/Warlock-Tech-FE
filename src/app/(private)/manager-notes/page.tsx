"use client";

import React, { useState } from "react";
import { useNotes } from "../../../hooks/notes/useNotes";
import { useHandleForm } from "@/hooks/useHandleForm";
import { CreateNotePage } from "./notes/createNote";

import Button from "@/components/Buttom/button";
import { useOpenClose } from "@/hooks/useOpenClose";
import { DeleteNotes } from "./notes/deleteNotes";
import { useConfirmChoice } from "@/models/deleteConfirmation/useDeleteConfirmatin";
import ConfirmChoice from "@/models/deleteConfirmation/ConfirmChoice";
import { EditNotes } from "./notes/EditNotes";

const Page = () => {
  const { notes, fetchNotes } = useNotes();
  const { form, handleChange, resetFormData } = useHandleForm();
  const [selectedNote, setSelectedNote] = useState<{
    noteId: number;
    title: string;
    description: string;
  } | null>(null);

  const { showForm, toggleForm } = useOpenClose();
  const { cancelAction, confirmAction, isConfirmVisible, requestConfirmation } =
    useConfirmChoice();

  return (
    <div>
      <div className="flex justify-center py-8">
        <div className="max-w-[70%] w-full">
          <div className="flex justify-center mb-4">
            <Button
              onClick={() => toggleForm("createNote")}
              className="ml-2 p-2 border rounded-md cursor-pointer bg-slate-200 hover:bg-slate-300 placeholder-slate-800 text-center w-96"
            >
              Vamos criar uma nova nota?
            </Button>
          </div>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(notes) && notes.length > 0 ? (
              notes.map((note) => (
                <div
                  key={note.noteId}
                  className="border p-4 rounded-md shadow-md flex flex-col min-h-[20rem] max-h-[20rem] overflow-y-auto"
                >
                  <div className="flex justify-between mb-4">
                    <button
                      onClick={() => {
                        setSelectedNote(note);
                        toggleForm("EditeNote");
                      }}
                      className="bg-blue-400 hover:bg-blue-500 text-white w-28 border rounded-md"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => {
                        setSelectedNote(note);
                        requestConfirmation(async () => {
                          await DeleteNotes(note.noteId);
                          fetchNotes();
                        });
                      }}
                      className="bg-red-400 hover:bg-red-500 text-white w-28 border rounded-md"
                    >
                      Apagar
                    </button>
                  </div>
                  <h3 className="font-bold">{note.title}</h3>
                  <p>{note.description}</p>
                  <small className="text-gray-500 gap-4 flex">
                    Criado em: {new Date(note.createdAt).toLocaleDateString()}
                  </small>
                  <small className="text-gray-500 gap-4 flex">
                    Atualizado em:{" "}
                    {new Date(note.updatedAt).toLocaleDateString()}
                  </small>
                </div>
              ))
            ) : (
              <div>
                <span>Você ainda não possui nenhuma nota cadastrada</span>
              </div>
            )}
          </article>
          {showForm.createNote && (
            <CreateNotePage
              form={form}
              handleChange={handleChange}
              resetForm={resetFormData}
              exit={() => toggleForm("createNote")}
            />
          )}
          {showForm.EditeNote && selectedNote && (
            <EditNotes
              noteId={selectedNote.noteId}
              noteData={{
                title: selectedNote.title,
                description: selectedNote.description,
              }}
              exit={() => {
                toggleForm("EditeNote");
                setSelectedNote(null);
              }}
            />
          )}
          {isConfirmVisible && (
            <ConfirmChoice
              cancelAction={cancelAction}
              confirmAction={confirmAction}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
