"use client"; 

import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";


export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return <AuthLayout>{children}</AuthLayout>;
}