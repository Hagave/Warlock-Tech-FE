import { Input } from "@/components/Input/input";
import { Label } from "@/components/Label/label";
import React from "react";
import { useEditProfile } from "@/hooks/users/useEditProfile";

interface EditProfile {
  closePage: () => void;
  userData: { name: string; email: string };
}

export const EditProfile = ({ closePage, userData }: EditProfile) => {
  const { form, handleSubmit, handleChange, newPassword, setNewPassword } =
    useEditProfile({ closePage, userData });

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 shadow-md">
      <form
        className="space-y-6  bg-white rounded-md p-10 justify-center"
        onSubmit={handleSubmit} // Corrigido aqui
      >
        <span className="w-full justify-center flex">Editar seu Dados</span>
        <div>
          <Label>Nome</Label>
          <Input
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Qual é o seu nome"
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            type="email"
            placeholder="Qual é o seu email?"
          />
        </div>
        <div>
          <Label>Confirme sua senha</Label>
          <Input
            name="password"
            value={form.password || ""}
            onChange={handleChange}
            type="password"
            placeholder="Digite sua senha atual"
            required
          />
        </div>
        <div>
          <button
            className="bg-slate-300 hover:bg-slate-200 rounded-sm w-full mb-4"
            onClick={() => setNewPassword((prev) => !prev)}
          >
            Deseja alterar sua senha?
          </button>
          {newPassword && (
            <div>
              <Label>Digite sua nova senha</Label>
              <Input
                name="newPassword"
                type="password"
                value={form.newPassword || ""}
                onChange={handleChange}
                placeholder="Digite sua nova senha!"
              />
            </div>
          )}
        </div>
        <div className="flex gap-4 justify-between h-8">
          <button
            className="bg-red-400 hover:bg-red-300 text-white w-32 rounded-md "
            onClick={closePage}
          >
            Sair
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-300 text-white w-32 rounded-md "
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
