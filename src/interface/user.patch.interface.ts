export interface IUserPatch {
  message: string;
  status: number;
  success: boolean;
  user: {
    createdAt: string;
    email: string;
    name: string;
    updatedAt: string;
  };
}
