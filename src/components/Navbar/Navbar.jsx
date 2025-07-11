import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const Navbar = ({ onCartClick }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">KYVYMATES</Link>
      <div className="menu">
        <Link to="/category/Mates">Mates</Link>
        <Link to="/category/Termos">Termos</Link>
        <Link to="/category/Yerbas">Yerbas</Link>
        <Link to="/category/Bombillas">Bombillas</Link>
        <CartWidget onClick={onCartClick} />
      </div>
    </nav>
  );
};

export default Navbar;
