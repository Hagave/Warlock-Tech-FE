"use client";

import { useOpenClose } from "@/hooks/useOpenClose";
import { useUserStore } from "@/store/useStore";
import Link from "next/link";
import React from "react";
import { EditProfile } from "./EditProfile";

const Profile = () => {
  const { user } = useUserStore();
  const { showForm, toggleForm } = useOpenClose();

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          Perfil do Usuário
        </h2>

        <div className="space-y-2 grid ">
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

          <Link
            href="/home"
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Voltar
          </Link>
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
    </div>
  );
};

export default Profile;
