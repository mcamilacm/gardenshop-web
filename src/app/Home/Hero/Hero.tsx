import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.main_image}>
      <Image
            src="/img/watering.svg"
            alt="women_watering_flower"
            width={968}
            height={853}
            className={styles.main_ilustration}
          ></Image>
    </div>
      <div className={styles.main_title}>
      <p className={styles.cursive_tittle}> Dale vida al</p>
      <h1>Jardín De tus Sueños</h1>
      <h4>En nuestro vivero</h4>
      </div>
      </div>
          
  );
};

export default Hero;
