import React, { useState } from "react";
import "./Checkout.css";
import useCart from "../../context/UseCart";
import { saveOrder } from "../../firebase/db"; // 👈 Importamos la función para guardar la orden

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();

  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      comprador: formData,
      items: cartItems.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.quantity,
        precio: item.precio,
      })),
      total: total,
      fecha: new Date().toISOString(),
    };

    // Mostrar la orden en la consola
    console.group("%c🧾 Orden de compra generada", "color: green; font-weight: bold;");
    console.log(order);
    console.groupEnd();

    try {
      const id = await saveOrder(order);
      setOrderId(id);

      console.log("%c✅ ID de la orden:", "color: blue; font-weight: bold;", id);

      clearCart();
      alert(`¡Compra finalizada con éxito! ID de orden: ${id}`);
    } catch (error) {
      console.error("❌ Error al guardar la orden:", error);
      alert("Ocurrió un error al guardar la orden.");
    }
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

        {orderId && (
          <div className="order-confirmation">
            <p>Tu orden fue registrada con el ID:</p>
            <strong>{orderId}</strong>
          </div>
        )}
      </div>

      <div className="checkout-summary">
        <h3>Resumen del pedido</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.imagen} alt={item.nombre} />
            <div>
              <p>
                {item.nombre} x{item.quantity}
              </p>
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
