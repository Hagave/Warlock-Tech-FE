import { ToastProvider } from "@/util/toastify";
import "../globals.css";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ToastProvider />
      {children}
    </div>
  );
}
