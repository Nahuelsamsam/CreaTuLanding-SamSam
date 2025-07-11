import React from "react";
import "./CartSidebar.css";
import useCart from "../../context/UseCart"; 
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

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
          <div className="empty-cart">
            <p>El carrito está vacío</p>
            <button
              className="see-products-btn"
              onClick={() => {
                onClose();
                navigate("/");
              }}
            >
              Ver más productos
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="cart-item-info">
                  <h4>{item.nombre}</h4>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p className="item-subtotal">Subtotal: ${item.precio * item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Borrar</button>
              </div>
            ))}

            <div className="cart-sidebar-footer">
              <hr />
              <p className="total-label">
                <strong>Total: ${total}</strong>
              </p>
              <button className="clear-cart-btn" onClick={clearCart}>Vaciar carrito</button>
              <button className="checkout-btn" onClick={handleGoToCheckout}>Ir al checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
