import { IUser } from "./user.interface";

export interface ISignUp extends IUser {
  status: number;
  success: boolean;
  message: string;
}
