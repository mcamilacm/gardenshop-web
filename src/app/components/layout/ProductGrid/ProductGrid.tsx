"use client";

import React, { useState, useEffect } from "react";
import styles from "./ProductGrid.module.css";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://garden-shop-backend-production.up.railway.app/products");
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
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
