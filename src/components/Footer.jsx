// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";


import logo from "../assets/dipsaLOGO.png"; // adjust to your real logo path
import instagramIcon from "../assets/instagram_icon.svg"; // or use react-icons if you prefer
import phoneIcon from "../assets/Phone.png";
import smsIcon from "../assets/sms.png";
import mapMarkerIcon from "../assets/map-marker.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT – logo + short text + CTA */}
        <div className="footer-col footer-col-left">
          <img src={logo} alt="Dipsamatic" className="footer-logo" />

          <p className="footer-tagline">
            Solutions café &amp; snacking sur mesure pour les entreprises.
          </p>

          <button className="footer-cta">Demander un devis</button>
        </div>

        {/* RIGHT – navigation + contact grouped */}
        <div className="footer-col footer-col-right">
          {/* Navigation */}
          <div className="footer-nav-section">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><NavLink to="/" end>Accueil</NavLink></li>
              <li><NavLink to="/activite">Activité</NavLink></li>
              <li><NavLink to="/rse">RSE</NavLink></li>
              <li><NavLink to="/about">Qui sommes-nous</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-item">
              <img src={phoneIcon} alt="Téléphone" className="footer-icon" />
              <p>01 64 12 46 75</p>
            </div>
            <div className="footer-item">
              <img src={smsIcon} alt="Email" className="footer-icon-" />
              <a 
                href="mailto:s.elpitiyia@dipsamatic.fr" 
                className="footer-email-link"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default mail client behavior
                  window.location.href = 'mailto:s.elpitiyia@dipsamatic.fr';
                }}
              >
                s.elpitiyia@dipsamatic.fr
              </a>
            </div>
            <div className="footer-item">
              <img src={mapMarkerIcon} alt="Adresse" className="footer-icon" />
              <p>27 av. Graham Bell<br />77600 Bussy-Saint-Georges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="footer-divider" />

      {/* Bottom row */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-bottom-left-text">© 2026 DIPSAMATIC. Tous droits réservés.</span>
        </div>

        <div className="footer-social">
          <a href="https://instagram.com" aria-label="Instagram" className="footer-instagram-icon">
            <img src={instagramIcon} alt="" />
          </a>
        </div>

        <div className="footer-bottom-right">
          <a href="#" className="footer-bottom-link">Mentions légales</a>
          <span className="footer-bottom-separator">•</span>
          <a href="#" className="footer-bottom-link">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;