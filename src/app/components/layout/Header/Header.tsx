import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import Button from "../Button/Button";

const Header = () => {
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
          ></Image>
        </Link>
      </div>

      <nav className={styles.nav}>
        <div className={styles.menuIconContainer}>
        <Image
          src="/icons/menu.svg"
          alt="burguer_menu"
          width={32}
          height={32}
          className={styles.menuIcon}
        ></Image>
        </div>
        <ul className={styles.navList}>
          <li> 
          <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/productos">Productos</Link>
          </li>
          <li>
            <Link href="/contacto">Contáctanos</Link>
          </li>
          <li>
            <Link href="/ingresar">Ingresar</Link>
          </li>
          <li>
          <Button href="/registrar">Registrarme</Button>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
