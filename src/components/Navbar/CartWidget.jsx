import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

function CartWidget() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
}

export default CartWidget;
