import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">KYVYMATES</Link>
      <div className="menu">
        <Link to="/category/Mates">Mates</Link>
        <Link to="/category/Termos">Termos</Link>
        <Link to="/category/Yerbas">Yerbas</Link>
        <Link to="/category/Bombillas">Bombillas</Link>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
