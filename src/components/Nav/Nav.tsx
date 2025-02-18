import { useUserStore } from "@/store/useStore";
import { useSignOut } from "@/util/signOut";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { user } = useUserStore();

  return (
    <nav className="bg-gray-900 text-white w-full py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-xl font-bold">📒 MyNotes</div>

        <ul className="flex gap-6">
          <li>
            <Link href="/home" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/manager-notes"
              className="hover:text-gray-400 transition"
            >
              Gerenciar notas
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-400 transition">
              {user?.name
                ? `Meu Perfil - ${user.name}`
                : "Convidado - Usuário deslogado!"}
            </Link>
          </li>
        </ul>

        <button
          onClick={useSignOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
        >
          Deslogar
        </button>
      </div>
    </nav>
  );
};

export default Nav;
