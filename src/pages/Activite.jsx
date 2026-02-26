import React from "react";
import "../styles/activite.css";

import activiteLogo from "../assets/activiteLOGO.png";
import goldLineLeft from "../assets/goldLine_L.png";
import goldLineRight from "../assets/goldLine_R.png";
import goldLineFull from "../assets/GoldLine_F.png";

import activite1 from "../assets/activite1.png";
import activite2 from "../assets/activite2.png";
import activite3 from "../assets/activite3.png";
import activite4 from "../assets/activite4.png";

function Activite() {
  return (
    <main className="activity-page">
      {/* =============== HERO (same style as RSE) =============== */}
      <section className="activity-hero">
        <div className="activity-hero-content">
          <img
            src={activiteLogo}
            alt="Activité"
            className="activity-logo"
          />
          <p className="activity-hero-subtitle">
            Des solutions de distribution automatique et de pause café adaptées
            à chaque environnement : bureaux, hôtels, restaurants et espaces publics.
          </p>
        </div>
      </section>

      {/* =============== L’expertise DIPSAMATIC =============== */}
      <section className="activity-expertise">
        <div className="activity-inner">
          {/* Title + gold lines */}
          <div className="title-wrapper">
            <img src={goldLineLeft} className="gold-line left" alt="" />
            <h2 className="activity-section-title">
              L’expertise DIPSAMATIC
            </h2>
            <img src={goldLineRight} className="gold-line right" alt="" />
          </div>

          {/* Cards in 2×2 grid */}
          <div className="activity-grid">
            {/* -------- Card 01 -------- */}
            <div className="activity-card">
              <div className="activity-card-number">01</div>

              <img
                src={goldLineFull}
                alt=""
                aria-hidden="true"
                className="activity-card-line"
              />

              <div className="activity-card-main">
                <div className="activity-card-text">
                  <h3>Distribution automatique</h3>
                  <p>
                    Chez Dipsamatic, nous proposons des machines de distribution
                    automatique fiables et performantes, conçues pour offrir une
                    expérience de consommation simple tout en respectant RSE et
                    recyclage.
                  </p>
                </div>

                <div className="activity-card-image">
                  <img
                    src={activite1}
                    alt="Machine de distribution automatique"
                  />
                </div>
              </div>
            </div>

            {/* -------- Card 02 -------- */}
            <div className="activity-card">
              <div className="activity-card-number">02</div>

              <img
                src={goldLineFull}
                alt=""
                aria-hidden="true"
                className="activity-card-line"
              />

              <div className="activity-card-main">
                <div className="activity-card-text">
                  <h3>Office coffee system</h3>
                  <p>
                    Nous déployons également des solutions Office Coffee System,
                    avec des machines à café professionnelles élégantes et
                    connectées (CB), adaptées aux environnements de bureau.
                  </p>
                </div>

                <div className="activity-card-image">
                  <img
                    src={activite2}
                    alt="Office coffee system"
                  />
                </div>
              </div>
            </div>

            {/* -------- Card 03 -------- */}
            <div className="activity-card">
              <div className="activity-card-number">03</div>

              <img
                src={goldLineFull}
                alt=""
                aria-hidden="true"
                className="activity-card-line"
              />

              <div className="activity-card-main">
                <div className="activity-card-text">
                  <h3>Café, Hotellerie, Restaurant</h3>
                  <p>
                    Dipsamatic accompagne les professionnels de l’hôtellerie et
                    de la restauration avec des machines à café performantes,
                    conçues pour répondre aux exigences de qualité.
                  </p>
                </div>

                <div className="activity-card-image">
                  <img
                    src={activite3}
                    alt="Café, Hôtellerie, Restaurant"
                  />
                </div>
              </div>
            </div>

            {/* -------- Card 04 -------- */}
            <div className="activity-card">
              <div className="activity-card-number">04</div>

              <img
                src={goldLineFull}
                alt=""
                aria-hidden="true"
                className="activity-card-line"
              />

              <div className="activity-card-main">
                <div className="activity-card-text">
                  <h3>Fontaine à eau</h3>
                  <p>
                    Nous proposons également des fontaines à eau / bonbonnes
                    réseau écoresponsables, offrant une eau filtrée, fraîche ou
                    tempérée, plate ou gazeuse.
                  </p>
                </div>

                <div className="activity-card-image">
                  <img
                    src={activite4}
                    alt="Fontaine à eau"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Activite;