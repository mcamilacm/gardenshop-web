"use client";

import React, { useState, useEffect } from "react";
import styles from "./ProductGrid.module.css";
import { useAuth } from "@/context/AuthContext"; // Importar el contexto de autenticación

const ProductGrid = () => {
  const { user } = useAuth(); // Obtener el usuario autenticado
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [error, setError] = useState(null);

  // Obtener productos al cargar la página
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products"); // Cambio a localhost
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  // Obtener favoritos del usuario al cargar la página
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/favorites?userId=${user.userId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Favoritos obtenidos del backend:", data); // Agregar log para depuración
          setFavorites(Array.isArray(data) ? data : []); // Si `data` no es un array, asignar []
        })
        .catch((err) => {
          console.error("Error obteniendo favoritos:", err);
          setFavorites([]); // Si hay un error, asegurar que `favorites` sea un array vacío
        });
    }
  }, [user]);

  // Función para agregar o eliminar de favoritos
  const toggleFavorite = async (productId) => {
    if (!user) {
      alert("Inicia sesión para guardar favoritos");
      return;
    }
  
    console.log("Intentando agregar a favoritos:");
    console.log("Usuario:", user);
    console.log("Datos enviados:", { userId: user.userId, productId });
  
    if (!user.userId) {
      console.error("Error: userId es undefined en el contexto de autenticación");
      return;
    }
  
    const isFavorite = favorites.includes(productId);
  
    if (isFavorite) {
      await fetch(`http://localhost:4000/favorites/${productId}?userId=${user.userId}`, { 
        method: "DELETE",
      });
      setFavorites(favorites.filter((fav) => fav !== productId));
    } else {
      const response = await fetch("http://localhost:4000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.userId, productId }),
      });
  
      const result = await response.json();
      console.log("Respuesta del backend:", result);
  
      setFavorites([...favorites, productId]);
    }
  };
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.product_id} className={styles.card}>
          <img
            src={product.image_url}
            alt={product.name}
            className={styles.image}
          />
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>

          {/* Botón de favorito */}
          <button className={styles.favoriteButton} onClick={() => toggleFavorite(product.product_id)}>
          <img
  src={favorites?.includes(product.product_id) ? "/icons/heart-green.svg" : "/icons/heart-outline.svg"}
  alt="Favorito"
  width={24}
  height={24}
/>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;