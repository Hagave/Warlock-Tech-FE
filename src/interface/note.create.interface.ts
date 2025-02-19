export interface ICreateNote {
  status: number;
  success: boolean;
  message: string;
  createNote: {
    createdAt: string;
    description: string;
    noteId: number;
    title: string;
    updatedAt: string;
  };
}
