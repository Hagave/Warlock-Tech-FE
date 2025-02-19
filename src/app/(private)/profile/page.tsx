"use client";

import { useOpenClose } from "@/hooks/useOpenClose";
import { useUserStore } from "@/store/useStore";
import Link from "next/link";
import React from "react";
import { EditProfile } from "./EditProfile";
import { useConfirmChoice } from "@/models/deleteConfirmation/useDeleteConfirmatin";
import {} from "@/util/useSignOut";
import ConfirmChoice from "@/models/deleteConfirmation/ConfirmChoice";
import { useDeleteUserProfile } from "../../../hooks/users/useDeleteUserProfile";

const Profile = () => {
  const { user } = useUserStore();
  const { showForm, toggleForm } = useOpenClose();
  const { cancelAction, confirmAction, isConfirmVisible, requestConfirmation } =
    useConfirmChoice();
  const { deleteUserProfile } = useDeleteUserProfile();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
        <h2 className="text-2xl font-bold">Usuário não autenticado</h2>
        <p className="mt-2">Faça login para acessar seu perfil.</p>
        <Link
          href="/sign-in"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Fazer Login
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 min-h-screen bg-gray-100 text-gray-900 place-items-center">
      <div className=" shadow-md  w-[50rem]">
        <div>
          <h1 className="text-2xl font-bold text-center mb-4">
            Perfil do Usuário
          </h1>
        </div>
        <div>
          <h2 className="size-12">Aviso</h2>
          <div>
            <strong>Editar Perfil</strong>
            <p>
              É necesário, a cada edição, informar sua senha cadastrada para
              validações de dados. Isso impede que outra pessoa logada em sua
              conta, consiga fazer alguma alteração nela. Caso queira alterar a
              senha, basta clicar no botão alterar senha que um campo será
              exibido perguntando qual é a nova senha.!
            </p>
            <strong>Apagar perfil</strong>
            <p>
              Ao apagar o perfil, todas suas notas também serão{" "}
              <strong>apagadas</strong>. Mantenha isso em mente!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <Link
          href="/home"
          className="bg-gray-500 mb-4 hover:bg-gray-600 text-white px-4 py-2 rounded-md justify-center h-8 flex"
        >
          Voltar
        </Link>
        <div className="space-y-2 grid mt-4 ">
          <span>
            <strong>Nome:</strong> {user.name}
          </span>
          <span>
            <strong>Email:</strong> {user.email}
          </span>
          <span>
            <strong>Data da Atualizção:</strong>{" "}
            {new Date(user.updatedAt).toLocaleDateString()}
          </span>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => toggleForm("editUser")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Editar Perfil
          </button>

          <button
            onClick={() => requestConfirmation(deleteUserProfile)}
            className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Apagar Perfil
          </button>
        </div>
      </div>
      {showForm.editUser && (
        <EditProfile
          userData={{
            name: user.name,
            email: user.email,
          }}
          closePage={() => toggleForm("editUser")}
        />
      )}

      {isConfirmVisible && (
        <ConfirmChoice
          cancelAction={cancelAction}
          confirmAction={confirmAction}
        />
      )}
    </div>
  );
};

export default Profile;
