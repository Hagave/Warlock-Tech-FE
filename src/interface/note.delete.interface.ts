import { ICreateNote } from "./note.create.interface";

export interface IDeleteNote extends ICreateNote {
  status: number;
  success: boolean;
  message: string;
}
