import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import Logo from "../../Fotos/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
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
                    <li key={cat.slug}>
                      <Link to={`/category/${cat.slug}`}>
                        {cat.name}
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















/*import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidget from "../CartWidget";
import Logo from "../../Fotos/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src={Logo} height="100" alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto justify-content-center mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/smartphones" onClick={closeMenu}>
                Celulares
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/laptops" onClick={closeMenu}>
                Laptops
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/tablets" onClick={closeMenu}>
                Tablets
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/womens-watches" onClick={closeMenu}>
                Women Watches
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/mens-watches" onClick={closeMenu}>
                Men Watches
              </Link>
            </li>
          </ul>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;*/
