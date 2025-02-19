export interface IUser {
  userId: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  token: {
    access_token: string;
  };
}
