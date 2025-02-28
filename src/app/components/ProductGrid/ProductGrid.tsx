"use client";

import React, { useState, useEffect } from "react";
import styles from "./ProductGrid.module.css";
import { useAuth } from "@/context/AuthContext";

const ProductGrid = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/favorites?userId=${user.userId}`)
        .then((res) => res.json())
        .then((data) => {
          setFavorites(Array.isArray(data) ? data : []);
        })
        .catch(() => {
          setFavorites([]);
        });
    }
  }, [user]);

  const toggleFavorite = async (productId: number) => {
    if (!user) {
      alert("Inicia sesión para guardar favoritos");
      return;
    }

    if (!user.userId) {
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
          <img src={product.image_url} alt={product.name} className={styles.image} />
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>

          <button className={styles.favoriteButton} onClick={() => toggleFavorite(product.product_id)}>
            <img
              src={favorites.includes(product.product_id) ? "/icons/heart-green.svg" : "/icons/heart-outline.svg"}
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