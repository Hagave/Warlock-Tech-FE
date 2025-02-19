export interface ISignIn {
  name: string;
  email: string;
  password: string;
  status: number;
  success: boolean;
  message: string;
  user: {
    createdAt: string;
    email: string;
    name: string;
    updatedAt: string;
    userId: number;
  };
  token: {
    access_token: string;
  };
}
