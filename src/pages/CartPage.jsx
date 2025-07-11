import useCart from "../../src/context/UseCart";
import './CartPage.css';


function CartPage() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.imagen} alt={item.nombre} width={80} />
            <div>
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
