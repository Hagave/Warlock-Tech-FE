"use client";
import { Input } from "@/components/Input/input";
import { Label } from "@/components/Label/label";
import Link from "next/link";
import Button from "@/components/Buttom/button";
import { useSignin } from "@/hooks/sign-in/useSignIn";

const Page = () => {
  const { handleSubmit, form, handleChange, loading } = useSignin();

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">
            Ainda não tem cadastro? Vamos fazer um!
          </h1>
          <p className="text-gray-600 text-center">
            Para criar é bem simples. Basta inserir os dados e clicar em
            cadastrar. Estando tudo certo, você será redirecionado para a página
            de login automaticamente.
          </p>
        </div>

        <div className="w-1/2 flex justify-center items-center p-10">
          <form
            className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl font-bold mb-6 text-center">Criar Conta</h2>

            <div className="mb-4">
              <Label>Digite seu nome</Label>
              <Input
                name="name"
                value={form.name || ""}
                onChange={handleChange}
                type="text"
                placeholder="Qual é o seu nome?"
                required
              />
            </div>
            <div className="mb-4">
              <Label>Digite seu email</Label>
              <Input
                name="email"
                value={form.email || ""}
                onChange={handleChange}
                type="email"
                placeholder="Qual é o seu emai?"
                required
              />
            </div>

            <div className="mb-4">
              <Label>Digite sua senha</Label>
              <Input
                name="password"
                value={form.password || ""}
                onChange={handleChange}
                type="password"
                placeholder="Escolha uma senha forte"
                required
              />
            </div>

            <div className="mb-4">
              <Label>Repita sua senha</Label>
              <Input
                name="confirmPassword"
                value={form.confirmPassword || ""}
                onChange={handleChange}
                type="password"
                placeholder="Repita sua senha"
              />
            </div>

            <Button
              type="submit"
              disabled={loading} // Desabilita o botão enquanto apos evento ser distarado (estiver carregando)
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
            <div>
              <Link
                href={"/sign-in"}
                className="text-blue-500 p-2 hover:text-blue-400 "
              >
                Já trenho cadastro!
              </Link>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-700 mt-auto">
        <p>Este não é o site oficial.</p>
        <p>Projeto criado exclusivamente para fins do teste técnico.</p>
      </footer>
    </div>
  );
};

export default Page;
