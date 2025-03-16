import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.tsx';
import Product from '@/pages/Product.tsx';
import Cart from '@/pages/Cart.tsx';
import Hoodies from '@/pages/Hoodies.tsx';
import TShirts from '@/pages/TShirts.tsx';
import Sweatshirts from '@/pages/Sweatshirts.tsx';
import Collections from '@/pages/Collections.tsx';
import LimitedEdition from '@/pages/LimitedEdition.tsx';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Navbar from '@/components/Navbar';
import CheckoutPage from '@/pages/CheckoutPage';
import Favorites from '@/pages/Favorites';
import Sale from '@/pages/Sale';
import NewArrivals from '@/pages/New';
import { FavoritesProvider } from '@/context/FavoritesContext';
import './App.css';
import Footer from '@/components/Footer';
const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/hoodies" element={<Hoodies />} />
          <Route path="/category/t-shirts" element={<TShirts />} />
          <Route path="/category/sweatshirts" element={<Sweatshirts />} />
          <Route path="/category/collections" element={<Collections />} />
          <Route path="/category/limited" element={<LimitedEdition />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/new" element={<NewArrivals />} />
        </Routes>
        <Footer />
      </div>
    </FavoritesProvider>
  );
};

export default App;
