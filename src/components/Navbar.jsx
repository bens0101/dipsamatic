import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/dipsaLOGO.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Dipsamatic Logo" />
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/activite">Activité</NavLink>
          </li>
          <li>
            <NavLink to="/rse">RSE</NavLink>
          </li>
          <li>
            <NavLink to="/about">Qui sommes-nous</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Desktop CTA */}
        <button 
          className="cta"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'mailto:s.elpitiyia@dipsamatic.fr?subject=Demande de devis';
          }}
        >
          Demander un devis
        </button>

        {/* Hamburger (mobile) */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Floating X button (mobile, outside navbar) */}
      {open && (
        <button
          className="close-x"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <span></span>
          <span></span>
        </button>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/activite" onClick={closeMenu}>
              Activité
            </NavLink>
          </li>
          <li>
            <NavLink to="/rse" onClick={closeMenu}>
              RSE
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              Qui sommes-nous
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <button 
          className="cta mobile-btn"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'mailto:s.elpitiyia@dipsamatic.fr?subject=Demande de devis';
          }}
        >
          Demander un devis
        </button>
      </div>
    </nav>
  );
}