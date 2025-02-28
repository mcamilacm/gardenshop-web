import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero_container}>

<div className={styles.leaves_container}>
        <Image
          src="/img/plant1.svg"
          alt="hoja 1"
          className={styles.leaf_one}
          width={151}
          height={165}
        />
        <Image
          src="/img/plant2.svg"
          alt="hoja 2"
          className={styles.leaf_two}
          width={102}
          height={247}
        />
        <Image
          src="/img/plant3.svg"
          alt="grupo de hojas"
          className={styles.leaf_group}
          width={262}
          height={536}
        />
      </div>
      <div className={styles.main_image}>
        <Image
          src="/img/watering2.svg"
          alt="women_watering_flower"
          width={968}
          height={853}
          className={styles.main_ilustration}
        ></Image>
      </div>

      <div className={styles.main_title}>
        <p className={styles.cursive_tittle}> Dale vida al</p>
        <h1 className={styles.main_phrase}>Jardín De Tus Sueños</h1>
        <h4 className={styles.main_subtittle}>En nuestro vivero</h4>
      </div>

    </div>


  );
};

export default Hero;
