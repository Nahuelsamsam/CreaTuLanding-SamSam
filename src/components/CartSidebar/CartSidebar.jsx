import React from "react";
import "./CartSidebar.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const handleGoToProducts = () => {
    onClose();
    navigate("/");
  };

  const handleGoToCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-sidebar-header">
        <h2>Carrito</h2>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="cart-sidebar-body">
        {cartItems.length === 0 ? (
          <div>
            <p>El carrito está vacío</p>
            <button className="see-products-btn" onClick={handleGoToProducts}>
              Ver productos
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="cart-item-info">
                  <h4>{item.nombre}</h4>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: ${item.precio * item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Borrar</button>
              </div>
            ))}

            <div className="cart-sidebar-footer">
              <p>
                <strong>Total: ${total}</strong>
              </p>
              <button className="clear-cart-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
              <button className="checkout-btn" onClick={handleGoToCheckout}>
                Ir al checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
