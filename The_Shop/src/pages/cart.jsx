import React from "react";
import { useCart } from "../context/cartcontext";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.itemRow}>
              <span>{item.title} (x{item.quantity})</span>
              <span>${item.price * item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>Remove</button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  itemRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #eee" },
  removeBtn: { background: "#dc3545", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "4px" }
};