import React, { useState } from "react";
import "./Checkout.css";
import useCart from "../../context/UseCart";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();

  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            pattern=".*@.*"
            title="El correo debe contener un '@' válido"
          />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            pattern="[0-9]+"
            title="El teléfono debe contener solo números"
          />

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
