import { ICreateNote } from "./note.create.interface";

export interface IPatchNotes extends ICreateNote {
  updateUserNote: {
    createdAt: string;
    description: string;
    noteId: number;
    title: string;
    updatedAt: string;
  };
}
