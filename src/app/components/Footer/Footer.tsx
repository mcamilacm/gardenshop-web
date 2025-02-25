import React from 'react';
import Image from "next/image";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
<footer className={styles.footer}>

<div className={styles.titles_img_footer}>


<div className={styles.titles_footer}>

    <h2 className={styles.footer_title}>Estamos aquí para ayudarte</h2>
    <p className={styles.cursive_title_footer}>a florecer tu vida.</p>
    
    </div>   <Image
            src="/img/footer_image.svg"
            
        
            alt="planting_footer"
            width={628}
            height={519}
            className={styles.footer_image}
          ></Image>

</div> 
    <Image
          src="/img/plant3.svg"
          alt="grupo de hojas"
          className={styles.leaf_group_footer}
          width={262}
          height={536}
        />


<div className={styles.green_zone_footer} />


</footer>



  );
};


export default Footer;
