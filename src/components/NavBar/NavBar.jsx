import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1>TecnoMode</h1>
      </Link>

      <ul>
        <li><NavLink to="/category/celulares">Celulares</NavLink></li>
        <li><NavLink to="/category/notebooks">Notebooks</NavLink></li>
        <li><NavLink to="/category/accesorios">Accesorios</NavLink></li>
      </ul>

      <Link to="/cart">🛒</Link>
    </nav>
  );
}

export default NavBar;