import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Form submitted successfully.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
        <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
        <textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}