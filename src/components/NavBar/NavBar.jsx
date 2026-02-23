import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../NavBar/CartWidget";
import Logo from "../../Fotos/Logo.png";
import "./NavBar.css";
import { getCategories } from "../../firebase/db";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(cats => setCategories(cats))
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-start">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="menu">
            <li>
              <details>
                <summary>Categorías</summary>

                <ul className="dropdown-menu">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link to={`/category/${cat}`}>
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <CartWidget />
        </div>

      </div>
    </header>
  );
};

export default NavBar;