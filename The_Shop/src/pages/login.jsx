import React from "react";
import { useAuth } from "../context/authcontext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginAsGuest();
    navigate("/checkout");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Authentication Required</h2>
      <button onClick={handleLogin} style={styles.btn}>Login as Guest</button>
    </div>
  );
}

const styles = {
  btn: { background: "#28a745", color: "#fff", border: "none", padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "5px" }
};