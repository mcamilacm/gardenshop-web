import React from 'react';
import Image from "next/image";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
<footer className={styles.footer}>

<div className={styles.image_plus_text}>
    <div className={styles.text_footer}>

    <h2>Estamos aquí para ayudarte</h2>
    <p className={styles.cursive_tittle}>a hacer florecer tus ideas</p>
    </div>

   <div className={styles.image_footer}>

   <Image
            src="/img/planting_footer.svg"
            alt="planting_footer"
            width={628}
            height={519}
            className={styles.footer_image}
          ></Image>

   </div>
    
</div>

<div className={styles.green_zone_footer}>

</div>



</footer>



  );
};


export default Footer;
