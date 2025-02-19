import { ICreateNote } from "./note.create.interface";

export interface INoteFindAll extends ICreateNote {
  sanitizedNotes: {
    createdAt: string;
    description: string;
    noteId: number;
    title: string;
    updatedAt: string;
  }[];
}
