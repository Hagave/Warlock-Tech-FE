import { useState } from "react";
// Função para abrir e fechar uma página/formulário ao clicar em um botão

export const useOpenClose = () => {
  const [showForm, setShowForm] = useState<Record<string, boolean>>({});

  const toggleForm = (formId: string | number) => {
    setShowForm((prevState) => ({
      ...prevState,
      [formId]: !prevState[formId],
    }));
  };

  return { showForm, toggleForm };
};
