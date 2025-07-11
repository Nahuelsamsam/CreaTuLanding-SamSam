import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";
import { useCart } from "../../context/CartContext";

const CartWidget = ({ onClick }) => {
  const { totalQuantity } = useCart();

  return (
    <div className="cart-widget" onClick={onClick}>
      <FaShoppingCart size={24} />
      <span>{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;
