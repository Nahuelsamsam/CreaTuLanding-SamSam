import CartWidget from './CartWidget';

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">KYVYMATES</h1>
      <nav className="navbar-center">
        <a href="#">mates</a>
        <a href="#">termos</a>
        <a href="#">accesorios</a>
      </nav>
      <CartWidget />
    </header>
  );
}

export default Navbar;
