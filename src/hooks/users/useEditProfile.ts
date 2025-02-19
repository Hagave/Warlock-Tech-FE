import { useEffect, useState } from "react";
import { useHandleForm } from "../useHandleForm";
import { updateUserProfile } from "@/app/(private)/profile/updateUserProfile";

interface useEditProfileProps {
  closePage: () => void;
  userData: { name: string; email: string };
}

export const useEditProfile = ({
  userData,
  closePage,
}: useEditProfileProps) => {
  const { handleChange, form, resetFormData } = useHandleForm();
  const [newPassword, setNewPassword] = useState(false);

  useEffect(() => {
    resetFormData();
    Object.entries(userData).forEach(([key, value]) => {
      handleChange({
        target: { name: key, value },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await updateUserProfile(form);
    if (success) {
      closePage();
    }
  };

  return { form, handleSubmit, handleChange, newPassword, setNewPassword };
};
