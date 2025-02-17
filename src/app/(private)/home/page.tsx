"use client";
import { useUserStore } from "@/store/useStore";
import React from "react";

const Page = () => {
  const { user } = useUserStore();

  return (
    <div>
      <span>Ola {user?.name || "Usuário"}</span>
      <h1>Home page</h1>
      <h1>
        Meu token e {user?.token.access_token || "Nenhum token encontrado"}
      </h1>
    </div>
  );
};

export default Page;
