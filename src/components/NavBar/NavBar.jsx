import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className= "navbar">
      <Link to="/">
        <h1 className="navbar-title">TecnoMode</h1>
      </Link>

      <div className="navbar-bottom">
        <ul className="navbar-links">
          <li><NavLink to="/category/celulares">Celulares</NavLink></li>
          <li><NavLink to="/category/notebooks">Notebooks</NavLink></li>
          <li><NavLink to="/category/accesorios">Accesorios</NavLink></li>
        </ul>
        
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;