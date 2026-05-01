import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartDrawer from "./components/CartDrawer";
import AboutPage from "./components/AboutPage";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage onCartOpen={() => setCartOpen(true)} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </BrowserRouter>
  );
}

export default App;