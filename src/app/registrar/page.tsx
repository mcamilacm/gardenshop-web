"use client";

import InputField from "@/app/components/layout/InputField/InputField";
import styles from "./register.module.css";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";


const RegisterPage = () => {
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
    <div className={styles.full_container_login}>
        
        <div className={styles.left_container_login}>
        <Image
          src="/img/register_plants.svg"
          alt="portal_leaves_login"
          width={720}
          height={1024}
          className={styles.portal_login}
        />
        <h2 className={styles.title_login}>Bienvenido al rincón donde la naturaleza florece</h2>

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
        <Image
          src="/img/big_logo.svg"
          alt="vivero_pasoancho_logo"
          width={296}
          height={169}
          className={styles.logo_form}
        />
        <p className={styles.login}>Registro</p>
      </div>

      <div className={styles.form_items}>

<form onSubmit={handleSubmit} className={styles.register_form}>


<InputField
  label="Nombre"
  type="text"
  name="firstName"
  placeholder="Ingrese su nombre"
  required={true}
  value={formData.firstName}
  onChange={handleChange}
/>

<InputField
  label="Apellido"
  type="text"
  name="lastName"
  placeholder="Ingrese su apellido"
  required={true}
  value={formData.lastName}
  onChange={handleChange}
/>


<InputField
  label="Correo Electrónico"
  type="email"
  name="email"
  placeholder="Ingrese su correo electrónico"
  required={true}
  value={formData.email}
  onChange={handleChange}
/>

<InputField
  label="Fecha de Nacimiento"
  type="date"
  name="birthdate"
  placeholder="Seleccione su fecha de nacimiento"
  required={true}
  value={formData.birthdate}
  onChange={handleChange}
/>

<InputField
  label="Ciudad"
  type="text"
  name="city"
  placeholder="Ingrese su ciudad"
  required={true}
  value={formData.city}
  onChange={handleChange}
/>

<InputField
  label="Contraseña"
  type="password"
  name="password"
  placeholder="Ingrese su contraseña"
  required={true}
  value={formData.password}
  onChange={handleChange}
/>

<InputField
  label="Confirmar Contraseña"
  type="password"
  name="confirmPassword"
  placeholder="Confirme su contraseña"
  required={true}
  value={formData.confirmPassword}
  onChange={handleChange}
/>

<p className={styles.small_text}>*Al Registrarte acepta nuestros<span className={styles.small_text_form}>Términos y Condiciones </span>y las <span className={styles.small_text_form}>Políticas de Tratamiento de Datos.</span></p>


<button type="submit" className={styles.submitButton}>
          Iniciar sesión
        </button>
        

        <div className={styles.divider_text}>O regístrese con</div>


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
        <p className={styles .text_google_microsoft}>Microsoft</p>
        </div>
            
        </div>
        <Link href="/login">
        <p className={styles.new_account}>Ya tienes una cuenta <span className={styles.green_text}> Inicia sesión aquí</span></p>
        </Link>
       

</form>
</div>

    </div>
    </div>
  
  );
};

export default RegisterPage;
