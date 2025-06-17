import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"><Link to="/">KYVYMATES</Link></h1>
      <div className="nav-links">
        <Link to="/category/smartphones">Smartphones</Link>
        <Link to="/category/perfumes">Perfumes</Link>
        <Link to="/category/accesorios">Accesorios</Link>
        <Link to="/category/maquillaje">Maquillaje</Link>
      </div>
    </nav>
  );
};

export default NavBar;
