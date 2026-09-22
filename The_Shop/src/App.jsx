import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import { CartProvider } from "./context/cartcontext";

import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protectedroute";

import Home from "./pages/home";
import Shop from "./pages/shop";
import ProductDetails from "./pages/productdetails";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Checkout from "./pages/cheackout";
import Contact from "./pages/contact";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter basename="/the_shop">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}