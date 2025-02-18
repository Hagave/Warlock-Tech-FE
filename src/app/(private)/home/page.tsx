"use client";

import { useUserStore } from "@/store/useStore";
import React from "react";

const Home = () => {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold">
          {user ? `Bem-vindo, ${user.name}!` : "Bem-vindo ao Sistema de Notas"}
        </h1>
        <p className="text-gray-600 mt-2">
          {user
            ? "Gerencie suas anotações de forma prática e rápida."
            : "Faça login para acessar suas anotações."}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center"></div>
      </div>
    </div>
  );
};

export default Home;
