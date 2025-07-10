import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/Navbar/CartContainer';
import { CartProvider } from './components/context/CartContext';
import CartPage from './components/context/CartPage'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} /> {/* ✅ Ruta al carrito */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
