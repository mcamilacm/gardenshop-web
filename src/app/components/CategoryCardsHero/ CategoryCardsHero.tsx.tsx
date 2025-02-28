"use client";

import React from "react";
import styles from "./CategoryCardsHero.module.css";
import Image from "next/image";

interface CategoryCardsHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  altName: string;
}

const CategoryCardsHero: React.FC<CategoryCardsHeroProps> = ({
  title,
  subtitle,
  imageUrl,
  altName,
}) => {
  return (
    <div className={styles.heroCategoryCards}>
      <div className={styles.leaves_container}>
        <Image
          src="img/plant3.svg"
          alt="grupo de hojas"
          className={styles.leaf_group}
          width={262}
          height={536}
        />
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
          width={91.99}
          height={222.75}
        />
      </div>

      <div className={styles.title_hero_category}>
        <h3 className={styles.title_paradise}>{subtitle}</h3>
        <h1 className={styles.title_plants}>{title}</h1>
      </div>

      <div className={styles.main_image_hero}>
        <Image
          src={imageUrl}
          alt={altName}
          className={styles.heroIllustration}
          width={578}
          height={553}
        />
      </div>
    </div>
  );
};

export default CategoryCardsHero;