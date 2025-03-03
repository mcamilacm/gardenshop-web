"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; 
import InputField from "../components/InputField/InputField";


const LoginPage = () => {

  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("")

  const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
     setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(""); 
    setError("");
  
    try {
      const response = await fetch("https://garden-shop-backend-b3uo.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const result = await response.json();
      console.log("Respuesta del backend:", result); 
  
      if (!response.ok) {
        throw new Error(result.message || "Error en la autenticación");
      }
  
      localStorage.setItem("token", result.token);
      login({ userId: result.user.user_id, email: result.user.email, name: result.user.name });
  
      setMessage("Inicio de sesión exitoso. Redirigiendo...");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err: any) {
      console.error("Error en la solicitud:", err.message);
      setError(err.message);
    }
  };
  return (
    <div className={styles.full_container_login}>
      <div className={styles.left_container_login}>
        <Image
          src="/img/portal.svg"
          alt="portal_leaves_login"
          width={720}
          height={1024}
          className={styles.portal_login}
        />
        <h2 className={styles.title_login}>Tu Portal a la Naturaleza</h2>
      </div>

      <div className={styles.right_container_login}>
        <div className={styles.icon_top_login}>
          <Image
            src="/icons/Vector.svg"
            alt="close_icon"
            width={18.68}
            height={18.68}
            className={styles.closeIcon}
          ></Image>
        </div>

        <div className={styles.logo_title_login}>
        <Link href="/">   
          <Image
            src="/img/big_logo.svg"
            alt="vivero_pasoancho_logo"
            width={296}
            height={169}
            className={styles.logo_form}
          />
          </Link>
          <p className={styles.login}>Iniciar sesión</p>
        </div>

        <div className={styles.form_items}>
          <form onSubmit={handleSubmit} className={styles.register_form}>
            <InputField
              label="Email"
              name="email"
              type="Email"
              placeholder="Ingrese su email"
              required={true}
              value={formData.email}
              onChange={handleChange}
            ></InputField>

            <InputField
              label="Contraseña"
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              required={true}
              value={formData.password}
              onChange={handleChange}
            ></InputField>

            <p className={styles.green_text}>¿Olvido su contraseña?</p>

            {error && <p className={styles.errorMessage}>{error}</p>}
{message && <p className={styles.successMessage}>{message}</p>}

            <button type="submit" className={styles.submitButton}>
              Iniciar sesión
            </button>

            <div className={styles.divider_text}>O inicia sesión con</div>

            <div className={styles.google_microsoft_container}>
              <div className={styles.icons_container}>
                <Image
                  src="/icons/google.svg"
                  alt="burguer_menu"
                  width={24}
                  height={24}
                  className={styles.menuIcon}
                ></Image>
                <p className={styles.text_google_microsoft}>Google</p>
              </div>

              <div className={styles.icons_container}>
                <Image
                  src="/icons/microsoft_icon.svg"
                  alt="burguer_menu"
                  width={24}
                  height={24}
                  className={styles.menuIcon}
                ></Image>
                <p className={styles.text_google_microsoft}>Microsoft</p>
              </div>
            </div>
            <Link href="/register">
              <p className={styles.new_account}>
                ¿No tienes una cuenta aún?{" "}
                <span className={styles.green_text}>Registrate aquí.</span>
              </p>
            </Link>
            <p className={styles.small_text}>
              Al continuar acepta nuestros{" "}
              <span className={styles.small_text_form}>
                Términos y Condiciones{" "}
              </span>
              y las{" "}
              <span className={styles.small_text_form}>
                Políticas de Tratamiento de Datos.
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
