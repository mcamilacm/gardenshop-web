"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import Button from "../Button/Button";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <Link href="/">
          <Image
            src="/img/big_logo.svg"
            alt="vivero_pasoancho_logo"
            width={240}
            height={137}
            className={styles.logo}
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
        
          <li>
            <Link href="/categories">Productos</Link>
          </li>
        

          {user ? (
           
            <li className={styles.userMenu}>
              <div
                className={styles.userContainer}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Image
                  src="/img/user-avatar.png"
                  alt="Perfil"
                  width={40}
                  height={40}
                  className={styles.userAvatar}
                />
             
              </div>

              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/favoritos">❤️ Mis Favoritos</Link>
             
                  <button onClick={logout}>🚪 Cerrar Sesión</button>
                </div>
              )}
            </li>
          ) : (

            <>
              <li>
                <Link href="/login">Ingresar</Link>
              </li>
              <li>
                <Button href="/registrar">Registrarme</Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;