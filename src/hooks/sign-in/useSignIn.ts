import { createUser } from "@/app/(public)/sign-up/createUser";
import { useHandleForm } from "../useHandleForm";
import { toastInfo } from "@/util/toastify";
import { checkPasswordsMatch } from "@/util/checkpassword";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useSignin = () => {
  const { form, handleChange, resetFormData } = useHandleForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!checkPasswordsMatch(form.password, form.confirmPassword)) {
        toastInfo("Verifique sua senha. Elas devem ser as mesmas!");
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...userData } = form;

      await createUser(userData);
      resetFormData();
      setLoading(false);
      router.push("sign-in");
    } catch (error) {
      console.log(
        "Houve um erro inesperado. Por favor, atualize a pagina e tente novamente",
        error
      );
    }
  };
  return { handleSubmit, form, handleChange, loading };
};
