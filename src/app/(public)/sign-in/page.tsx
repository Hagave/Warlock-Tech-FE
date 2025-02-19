"use client";
import Form from "@/components/Form/form";
import { Input } from "@/components/Input/input";
import { Label } from "@/components/Label/label";
import { useHandleForm } from "@/hooks/useHandleForm";
import { toastError } from "@/util/toastify";
import React, { useState } from "react";
import { signIn } from "./signIn";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const { form, handleChange, resetFormData } = useHandleForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(form);
      resetFormData();
      router.push("/home");
    } catch (error) {
      toastError("Erro ao enviar dados para login");
      console.log(`Erro ao enviar dados para login: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-full h-full max-w-6xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Texto explicativo à esquerda */}
        <div className="flex flex-col justify-center items-start p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Seja bem-vindo à Warlock Tech
          </h1>
          <p className="text-xl text-gray-600">
            Teste Técnico para avaliação de habilidades.
          </p>
        </div>

        {/* Formulário de login à direita */}
        <div className="flex justify-center items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <Form
            buttonName={isLoading ? "Carregando..." : "Fazer Login"}
            onSubmit={handleSubmit}
            className="w-full max-w-md"
          >
            <span className="text-xl flex font-bold mb-6 text-center justify-center">
              Fazer login
            </span>
            <div className="mb-4">
              <Label>Digite seu email</Label>
              <Input
                name="email"
                value={form.email || ""}
                onChange={handleChange}
                type="email"
                placeholder="Digite seu email"
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
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div>
              <Link
                className="text-blue-500 p-2 hover:text-blue-400 "
                href={"/sign-up"}
              >
                Não tenho uma conta!
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
