import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.tsx";
import ProductPage from "@/pages/ProductPage.tsx";
import Cart from "@/pages/Cart.tsx";
import Hoodies from "@/pages/Hoodies.tsx";
import TShirts from "@/pages/TShirts.tsx";
import Leggings from "@/pages/Leggings.tsx";
import Tops from "@/pages/Tops.tsx";
import Products from "@/pages/Products.tsx";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Navbar from "@/components/Navbar";
import CheckoutPage from "@/pages/CheckoutPage";
import Favorites from "@/pages/Favorites";
import Sale from "@/pages/Sale";
import NewArrivals from "@/pages/New";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { CartProvider } from "@/context/CartContext";
import CartPanel from "@/components/CartPanel";
import ScrollToTop from "@/components/ScrollToTop";
import "./App.css";
import Footer from "@/components/Footer";

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <ScrollToTop />
          <Navbar />
          <CartPanel />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/hoodies" element={<Hoodies />} />
            <Route path="/category/t-shirts" element={<TShirts />} />
            <Route path="/category/leggings" element={<Leggings />} />
            <Route path="/category/tops" element={<Tops />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/new" element={<NewArrivals />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </FavoritesProvider>
  );
};

export default App;
