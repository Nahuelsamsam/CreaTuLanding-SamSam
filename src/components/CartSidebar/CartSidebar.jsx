import React from "react";
import "./CartSidebar.css";
import { useCart } from "../../context/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-sidebar-header">
        <h2>Carrito</h2>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="cart-sidebar-body">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} width={60} />
              <div className="cart-item-info">
                <h4>{item.nombre}</h4>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.precio * item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Borrar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
