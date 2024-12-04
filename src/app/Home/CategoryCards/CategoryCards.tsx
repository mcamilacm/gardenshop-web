import React from "react";
import styles from "./CategoryCards.module.css";
import Image from "next/image";

const CategoryCards = () => {
  return (
    <div className={styles.category_cards_container}>

      <div className={styles.first_category_card}>
    

        <div className={styles.text_category_card}>
        <div className={styles.text_one_category_card}>
        <h4 className={styles.plants_tittle}>Plantas</h4>
            <p className={styles.interior_tittle}>De Exterior</p>
            </div>
            <div >
<p className={styles.text_two_category_card}>Ver todas</p>
            </div>
            </div>


            <div className={styles.flower_sun_category_card}>
            <Image
          src="/img/sun_flower.svg"
          alt="sun_flower"
          width={191}
          height={214}
          className={styles.sun_flower_img}
        ></Image>
            </div>

            <div className={styles.icon_category_card}>
          <Image
            src="/icons/solar_sun-broken.svg"
            alt="solar_icon"
            width={32}
            height={32}
            className={styles.solar_icon}
        
          />
        </div> 
      </div>

      <div className={styles.first_category_card}>
    

        <div className={styles.text_category_card}>
        <div className={styles.text_one_category_card}>
        <h4 className={styles.plants_tittle}>Plantas</h4>
            <p className={styles.interior_tittle}>De Interior</p>
            </div>
            <div >
<p className={styles.text_two_category_card}>Ver todas</p>
            </div>
            </div>


            <div className={styles.flower_sun_category_card}>
            <Image
          src="/img/sun_flower.svg"
          alt="sun_flower"
          width={191}
          height={214}
          className={styles.sun_flower_img}
        ></Image>
            </div>

            <div className={styles.icon_category_card}>
          <Image
            src="/icons/solar_sun-broken.svg"
            alt="solar_icon"
            width={32}
            height={32}
            className={styles.solar_icon}
        
          />
        </div> 
      </div>

      <div className={styles.first_category_card}>
    

        <div className={styles.text_category_card}>
        <div className={styles.text_one_category_card}>
        <h4 className={styles.plants_tittle}>Plantas</h4>
            <p className={styles.interior_tittle}>De Interior</p>
            </div>
            <div >
<p className={styles.text_two_category_card}>Ver todas</p>
            </div>
            </div>


            <div className={styles.flower_sun_category_card}>
            <Image
          src="/img/sun_flower.svg"
          alt="sun_flower"
          width={191}
          height={214}
          className={styles.sun_flower_img}
        ></Image>
            </div>

            <div className={styles.icon_category_card}>
          <Image
            src="/icons/solar_sun-broken.svg"
            alt="solar_icon"
            width={32}
            height={32}
            className={styles.solar_icon}
        
          />
        </div> 
      </div>

      <div className={styles.first_category_card}>
    

        <div className={styles.text_category_card}>
        <div className={styles.text_one_category_card}>
        <h4 className={styles.plants_tittle}>Plantas</h4>
            <p className={styles.interior_tittle}>De Interior</p>
            </div>
            <div >
<p className={styles.text_two_category_card}>Ver todas</p>
            </div>
            </div>


            <div className={styles.flower_sun_category_card}>
            <Image
          src="/img/sun_flower.svg"
          alt="sun_flower"
          width={191}
          height={214}
          className={styles.sun_flower_img}
        ></Image>
            </div>

            <div className={styles.icon_category_card}>
          <Image
            src="/icons/solar_sun-broken.svg"
            alt="solar_icon"
            width={32}
            height={32}
            className={styles.solar_icon}
        
          />
        </div> 
      </div>
    </div>
  );
};

export default CategoryCards;
