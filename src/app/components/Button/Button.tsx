import React from "react";
import Link from "next/link"; // Importa Link de Next.js
import styles from "./Button.module.css";

// Definimos las props del componente
interface ButtonProps {
  children: React.ReactNode; // Contenido del botón
  href?: string; // URL si el botón es un enlace
  onClick?: () => void; // Acción al hacer clic si es un botón normal
  className?: string; // Clase CSS adicional
  type?: "button" | "submit" | "reset"; // Tipo del botón
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  type = "button",
}) => {
  if (href) {
    // Si `href` está definido, renderiza un enlace
    return (
      <Link href={href} className={`${styles.button} ${className}`}>
        {children}
      </Link>
    );
  }

  // Si no, renderiza un botón normal
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
