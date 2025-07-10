import { useCart } from '../context/CartContext';

function CartContainer() {
  const { cartCount } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛒 Página del Carrito</h2>
      <p>Tenés {cartCount} producto(s) en el carrito.</p>
    </div>
  );
}

export default CartContainer;
