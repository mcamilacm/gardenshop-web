"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import styles from "./favorites.module.css";
import Image from "next/image";

const Favorites: React.FC = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchFavorites = async () => {
      try {
        console.log("🔍 Haciendo petición de favoritos...");
        const response = await fetch(`http://localhost:4000/favorites?userId=${user.userId}`);
        if (!response.ok) throw new Error("❌ Error al obtener favoritos");

        const data = await response.json();
        console.log("📌 Datos recibidos en favorites:", data);

        setFavorites(data);
      } catch (err) {
        console.error("❌ Error en la petición:", err);
        setError(err.message);
      }
    };

    fetchFavorites();
  }, [user]);

  return (

    <div className={styles.favorites_full_container}>
    <div className={styles.favorites_user_info}>
<Image
src="/img/user-avatar.png"
alt="Perfil"
width={212}
height={212}
className={styles.userAvatar}
/>

{favorites.length > 0 && (
     <>
  <h2 className={styles.firstname}>{favorites[0].users.first_name}{favorites[0].users.last_name}</h2>
  <h3 className={styles.email}>{favorites[0].users.email}</h3>
  </>
)}
</div>

<div className={styles.grid}>
{favorites.map((favorite)=>(
<div key={favorite.product_id} className={styles.card}>

  <img src={favorite.products.image_url} alt={favorite.name} className={styles.image}></img>
  <h3 className={styles.title}>{favorite.products.name}</h3>
  <p className={styles.description}>{favorite.products.description}</p>
  <p className={styles.price}>${favorite.products.price}</p>
  </div>


))
  
}

</div>


</div>
  )
}

export default Favorites;