import { ICreateNote } from "@/interface/note.create.interface";
import { axiosClient } from "@/services/axiosClient";
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from "@/util/toastify";

export const createNotes = async (data: object) => {
  const api = process.env.NEXT_PUBLIC_CREATE_NOTES;

  try {
    const response = await axiosClient.post<ICreateNote>(`${api}`, data);

    if (!response.data.success) {
      toastInfo(`${response.data.message}`);
      return;
    }

    toastSuccess(`${response.data.message}`);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === 401) {
      toastWarning("Seu token expirou. Refaça o login!");
    } else {
      toastError(
        "Houve um erro inesperado na criação da nota. Tente novamente mais tarde!"
      );
    }
    return null;
  }
};
