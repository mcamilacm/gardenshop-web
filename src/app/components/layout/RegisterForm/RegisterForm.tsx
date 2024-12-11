"use client";
import styles from "./RegisterForm.module.css";
import React, { useState } from "react";
import Image from "next/image";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className={styles.register_container}>
      <div className={styles.register_left}>
        <h1 className={styles.welcome_message}>
          Bienvenido al rincón donde la naturaleza florece
        </h1>
        <Image
          src="/img/leaves_register.svg"
          alt="leaves_register"
          width={720}
          height={1024}
          className={styles.leaves_register}
        />
      </div>

      <div className={styles.register_right}>
        <div className={styles.register_titles}>
          <Image
            src="/img/big_logo.svg"
            alt="vivero_pasoancho_logo"
            width={240}
            height={137}
            className={styles.logo_form}
          />
          <p className={styles.register}>Registro</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.register_form}>
          <div className={styles.form_group}>
            <label htmlFor="firstName" className={styles.form_label}>
              Nombre *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ingrese su nombre"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.form_input}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="lastName" className={styles.form_label}>
              Apellido *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ingrese su apellido"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.form_input}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email" className={styles.form_label}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su email"
              value={formData.email}
              onChange={handleChange}
              className={styles.form_input}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="birthdate" className={styles.form_label}>
              Fecha de nacimiento *
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className={styles.form_input}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="city" className={styles.form_label}>
              Ciudad *
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={styles.form_select}
              required
            >
              <option value="" disabled>
                Seleccione ciudad
              </option>
              <option value="bogota">Bogotá</option>
              <option value="medellin">Medellín</option>
              <option value="cali">Cali</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password" className={styles.form_label}>
              Contraseña *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
              className={styles.form_input}
              required
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="confirmPassword" className={styles.form_label}>
              Confirmar contraseña *
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme su contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.form_input}
              required
            />
          </div>

          <p className={styles.legal_text}>
            *Al registrarte aceptas nuestros{" "}
            <a href="#" className={styles.link}>
              Términos y Condiciones
            </a>{" "}
            y la{" "}
            <a href="#" className={styles.link}>
              Política de Tratamiento de Datos
            </a>
            .
          </p>

          <button type="submit" className={styles.btn_submit}>
            Registrarme
          </button>

          <div className={styles.social_login}>
            <p>O regístrese con</p>
            <button type="button" className={styles.btn_google}>
              Google
            </button>
            <button type="button" className={styles.btn_microsoft}>
              Microsoft
            </button>
          </div>

          <p className={styles.login_link}>
            ¿Ya tienes una cuenta?{" "}
            <a href="#" className={styles.link}>
              Inicia sesión aquí
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
