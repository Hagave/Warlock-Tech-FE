import { ToastProvider } from "@/util/toastify";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Técnico Warlocks Tech",
  description: "Projeto criado com next 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen">
        <ToastProvider />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
