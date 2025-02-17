"use server";
import { SigninApi } from "@/interface/login.interface";
import { toastError, toastSuccess } from "@/util/toastify";
import axios from "axios";

export const createUser = async (userData: object) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await axios.post<SigninApi>(
      `${apiUrl}/users/signup`,
      userData
    );

    console.log(response.data);
    toastSuccess("Usuário criado com sucesso!");
  } catch {
    toastError("Erro ao criar o usuário");
  }
};
