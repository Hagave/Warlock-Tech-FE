import { axiosClient } from "@/services/axiosClient";
import { toastError, toastSuccess } from "@/util/toastify";

export const createNotes = async (data: object) => {
  const api = process.env.NEXT_PUBLIC_CREATE_NOTES || "/notes";

  try {
    const response = await axiosClient.post(api, data);

    toastSuccess("Nota criada com sucesso!");

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === 401) {
      toastError("Você está deslogado!");
    } else {
      toastError(
        "Houve um erro inesperado na criação da nota. Tente novamente mais tarde!"
      );
    }
    return null;
  }
};
