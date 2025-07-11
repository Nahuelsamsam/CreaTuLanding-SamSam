import React from "react";
import "./Checkout.css";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Compra finalizada con éxito!");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Datos de contacto</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Nombre" required />
          <input type="tel" placeholder="Teléfono" required />
          <button type="submit">Finalizar compra</button>
        </form>
      </div>

      <div className="checkout-summary">
        <h3>Resumen del pedido</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.imagen} alt={item.nombre} />
            <div>
              <p>{item.nombre} x{item.quantity}</p>
              <p>${item.precio * item.quantity}</p>
            </div>
          </div>
        ))}
        <hr />
        <div className="checkout-total">
          <p>Total:</p>
          <strong>${total}</strong>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
