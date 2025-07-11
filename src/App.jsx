import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <BrowserRouter>
      <Navbar onCartClick={handleCartClick} />
      <CartSidebar isOpen={isCartOpen} onClose={handleCloseCart} />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
