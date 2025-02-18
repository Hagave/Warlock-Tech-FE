"use client";

import { ToastProvider } from "@/util/toastify";
import "../globals.css";
import Nav from "@/components/Nav/Nav";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      <ToastProvider />
      {children}
    </div>
  );
}
