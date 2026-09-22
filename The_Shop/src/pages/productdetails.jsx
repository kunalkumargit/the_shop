import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartcontext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p style={{ padding: "20px" }}>Loading details...</p>;

  return (
    <div style={{ padding: "30px", display: "flex", gap: "40px" }}>
      <img src={product.image} alt={product.title} style={{ width: "300px", borderRadius: "8px" }} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <h3>${product.price}</h3>
        <button onClick={() => addToCart(product)} style={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  btn: { background: "#007bff", color: "#fff", border: "none", padding: "10px 20px", cursor: "pointer", borderRadius: "5px" }
};