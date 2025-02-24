import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import MainLayout from "./components/MainLayout/MainLayout";


export const metadata: Metadata = {
  title: "Vivero Pasoancho",
  description: "Explora nuestras plantas",
};

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  return (
    <AuthProvider>
      <html lang="es">
        <body className={poppins.className}>
          <MainLayout>{children}</MainLayout> {/* Aquí se maneja Header/Footer */}
        </body>
      </html>
    </AuthProvider>
  );
}