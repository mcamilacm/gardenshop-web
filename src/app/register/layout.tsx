import type { Metadata } from "next";
import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";

export const metadata: Metadata = {
  title: "Registro - Vivero Pasoancho",
  description: "Crea una cuenta",
};

export default function RegisterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}