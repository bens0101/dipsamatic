import React, { useEffect } from "react";
import "../styles/companies.css";

import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";
import company8 from "../assets/company8.png";
import company9 from "../assets/company9.png";
import company10 from "../assets/company10.png";

function Companies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="companies-page">
      <section className="companies-hero">
        <div className="companies-hero-content">
          <h1 className="companies-hero-title">Nos Entreprises Partenaires</h1>
          <p className="companies-hero-subtitle">
            Ils ont choisi de nous faire confiance pour leurs solutions 
            café et snacking sur mesure.
          </p>
        </div>
      </section>

      <section className="companies-section">
        <div className="companies-container">
          <div className="companies-grid">
            {/* GXO LOGISTICS */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company1} alt="GXO LOGISTICS" className="company-logo" />
              </div>
              <h3 className="company-name">GXO LOGISTICS</h3>
            </div>

            {/* MINISTERE DES FINANCES */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company2} alt="MINISTERE DES FINANCES" className="company-logo" />
              </div>
              <h3 className="company-name">MINISTERE DES FINANCES</h3>
            </div>

            {/* FEDEX LOGISTIQUE IDF */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company3} alt="FEDEX LOGISTIQUE IDF" className="company-logo" />
              </div>
              <h3 className="company-name">FEDEX LOGISTIQUE IDF</h3>
            </div>

            {/* TOYOTA MATERIAL HANDLING FRANCE */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company4} alt="TOYOTA MATERIAL HANDLING FRANCE" className="company-logo" />
              </div>
              <h3 className="company-name">TOYOTA MATERIAL HANDLING FRANCE</h3>
            </div>

            {/* Makita */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company5} alt="Makita" className="company-logo" />
              </div>
              <h3 className="company-name">Makita</h3>
            </div>

            {/* LA POSTE */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company6} alt="LA POSTE" className="company-logo" />
              </div>
              <h3 className="company-name">LA POSTE</h3>
            </div>

            {/* CARREFOUR */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company7} alt="CARREFOUR" className="company-logo" />
              </div>
              <h3 className="company-name">CARREFOUR</h3>
            </div>

            {/* ORANGE */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company8} alt="ORANGE" className="company-logo" />
              </div>
              <h3 className="company-name">ORANGE</h3>
            </div>

            {/* BSH ELECTROMENAGER */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company9} alt="BSH ELECTROMENAGER" className="company-logo" />
              </div>
              <h3 className="company-name">BSH ELECTROMENAGER</h3>
            </div>

            {/* KUEHNE & NAGEL */}
            <div className="company-card">
              <div className="company-logo-wrapper">
                <img src={company10} alt="KUEHNE & NAGEL" className="company-logo" />
              </div>
              <h3 className="company-name">KUEHNE & NAGEL</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Companies;
