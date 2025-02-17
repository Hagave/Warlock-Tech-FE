import { useState } from "react";

// Função para gerenciar o envio de formulário
export const useHandleForm = () => {
  const [form, setForm] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setForm({});
  };

  return { form, handleChange, resetFormData };
};
