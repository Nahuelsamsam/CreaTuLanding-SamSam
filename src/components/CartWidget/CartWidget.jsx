import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";
import useCart from "../../context/UseCart"; 


const CartWidget = ({ onClick }) => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget" onClick={onClick}>
      <FaShoppingCart size={24} />
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </div>
  );
};

export default CartWidget;
