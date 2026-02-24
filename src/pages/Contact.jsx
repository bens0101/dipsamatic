import React from "react";
import "../styles/contact.css";

import contactBanner from "../assets/contactbanner.png";
import contactLogo from "../assets/contact_LOGO.png";
import phoneIcon from "../assets/Phone.png";
import mapMarkerIcon from "../assets/map-marker.png";
import smsIcon from "../assets/sms.png";

function Contact() {
  return (
    <div className="contact-page">
      {/* ================= BANNER SECTION ================= */}
      <section className="contact-banner">
        <img src={contactBanner} className="banner-bg" alt="Contact Banner" />
        <div className="banner-overlay">
          <div className="banner-content">
            <img src={contactLogo} className="banner-logo" alt="Dipsamatic Logo" />
            <h1 className="banner-title">Contact</h1>
            <p className="banner-description">
              Une question ? Un projet ? Notre équipe est à votre écoute pour 
              vous accompagner dans vos besoins en solutions café et snacking.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO SECTION ================= */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-item">
              <img src={mapMarkerIcon} className="contact-icon" alt="Adresse" />
              <div className="contact-details">
                <h3>Adresse</h3>
                <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
              </div>
            </div>
            
            <div className="contact-item">
              <img src={phoneIcon} className="contact-icon" alt="Téléphone" />
              <div className="contact-details">
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>
            
            <div className="contact-item">
              <img src={smsIcon} className="contact-icon" alt="Email" />
              <div className="contact-details">
                <h3>Email</h3>
                <p>contact@dipsamatic.fr</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;