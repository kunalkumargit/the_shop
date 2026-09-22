import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";
import { useAuth } from "../context/authcontext";

export default function Navbar() {
  const { totalItemsCount } = useCart();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h2>ShopWave</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({totalItemsCount})</Link>
        <Link to="/checkout">Checkout</Link>
        {isAuthenticated ? (
          <button onClick={logout} style={styles.btn}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: "flex", justifyContent: "space-between", padding: "1rem 2rem", background: "#f8f9fa", borderBottom: "1px solid #ddd" },
  links: { display: "flex", gap: "20px", alignItems: "center" },
  btn: { background: "#ff4d4d", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "4px" }
};