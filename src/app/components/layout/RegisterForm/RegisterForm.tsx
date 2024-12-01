"use client";

import React, { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <div className="register-container">
      <div className="register-left">
        <h1>Bienvenido al rincón donde la naturaleza florece</h1>
      </div>
      <div className="register-right">
        <form onSubmit={handleSubmit} className="register-form">
          <img src="/logo.png" alt="Vivero Pasoancho" className="logo" />
          <h2>Registro</h2>
          <div className="form-group">
            <label htmlFor="firstName">Nombre *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ingrese su nombre"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ingrese su apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Fecha de nacimiento *</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad *</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
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
          <div className="form-group">
            <label htmlFor="password">Contraseña *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar contraseña *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme su contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <p className="legal-text">
            *Al registrarte aceptas nuestros{" "}
            <a href="#">Términos y Condiciones</a> y la{" "}
            <a href="#">Política de Tratamiento de Datos</a>.
          </p>
          <button type="submit" className="btn-submit">
            Registrarme
          </button>
          <div className="social-login">
            <p>O regístrese con</p>
            <button type="button" className="btn-google">
              Google
            </button>
            <button type="button" className="btn-microsoft">
              Microsoft
            </button>
          </div>
          <p className="login-link">
            ¿Ya tienes una cuenta? <a href="#">Inicia sesión aquí</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
