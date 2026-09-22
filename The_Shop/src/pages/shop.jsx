import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} onClick={() => navigate(`/product/${item.id}`)} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.img} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" },
  card: { border: "1px solid #ddd", padding: "15px", cursor: "pointer", borderRadius: "8px", textAlign: "center" },
  img: { width: "100%", height: "150px", objectFit: "cover" }
};