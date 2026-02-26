import React from "react";
import "../styles/home.css";

import icon1 from "../assets/homeicon_1.png";
import icon2 from "../assets/homeicon_2.png";
import icon3 from "../assets/homeicon_3.png";

import goldLineLeft from "../assets/goldLine_LEFT.png";
import goldLineRight from "../assets/goldLine_RIGHT.png";
import goldLineFull from "../assets/GoldLine_Full.png";

import paroleImg from "../assets/Paroledentreprise_Img.png";
import italyFlag from "../assets/ItalienFlag.png";

/* Nouveautés images */
import takeItImg from "../assets/Take-it.png";
import offerImg from "../assets/Offer.png";
import bunaImg from "../assets/Buna.png";

function Home() {
  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Améliorer les pauses au travail grâce à des solutions café et
            snacking sur mesure.
          </h1>

          <p className="hero-subtitle">
            Nous accompagnons les entreprises dans la création d’espaces de
            pause performants et conviviaux grâce à des solutions café et
            snacking sur mesure. De l’installation des équipements à leur
            gestion quotidienne, nous sélectionnons des produits de qualité et
            assurons un service fiable et réactif pour offrir à vos
            collaborateurs et visiteurs une expérience de pause agréable,
            moderne et sans contrainte.
          </p>
        </div>
      </section>

      {/* ================= STATS / FEATURE CARDS ================= */}
      <div className="features-wrapper">
        <div className="features">
          <div className="feature-card glass">
            <div className="feature-icon feature-icon_1">
              <img src={icon1} alt="Expertise" />
            </div>
            <h3 className="feature-title">23+</h3>
            <p className="feature-description">ans d’expérience</p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon feature-icon_2">
              <img src={icon2} alt="Innovation" />
            </div>
            <h3 className="feature-title">1500+</h3>
            <p className="feature-description">entreprises accompagnées</p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon feature-icon_3">
              <img src={icon3} alt="Qualité" />
            </div>
            <h3 className="feature-title">2500+</h3>
            <p className="feature-description">machines installées</p>
          </div>
        </div>
      </div>

      {/* ================= EXPERTISE SECTION ================= */}
      <section className="expertise-section">
        <div className="expertise-inner">
          {/* section title + gold lines */}
          <div className="title-wrapper">
            <img src={goldLineLeft} className="gold-line left" alt="" />
            <h2 className="expertise-title">L’expertise DIPSAMATIC</h2>
            <img src={goldLineRight} className="gold-line right" alt="" />
          </div>

          {/* PAROLE D’ENTREPRISE BLOCK */}
          <div className="expertise-content">
            {/* left side – TV image (always on the left) */}
            <div className="expertise-img-wrapper">
              <img src={paroleImg} className="expertise-img" alt="Parole TV" />
            </div>

            {/* right side – vertical line + text block */}
            <div className="expertise-text-wrapper">
              <img
                src={goldLineFull}
                className="expertise-line"
                alt=""
                aria-hidden="true"
              />

              <div className="expertise-text">
                <h3 className="expertise-subtitle">
                  <span className="quote-icon">“</span>
                  Parole d’entreprise - 28 juin 2025
                </h3>

                <p className="expertise-description">
                  Le passage du PDG de Dipsamatic sur BFM a permis de mettre en
                  avant la vision claire de l’entreprise, son ambition de
                  développement et son engagement à long terme. Une intervention
                  qui reflète le sérieux, l’expertise et la solidité de
                  Dipsamatic sur son marché.
                </p>

                <button className="video-btn">Voir la video</button>
              </div>
            </div>
          </div>

          {/* ================= PRODUITS / ITALIE ================= */}
          <div className="products-block">
            {/* LEFT: line + text */}
            <div className="products-text-wrapper">
              <img
                src={goldLineFull}
                className="products-line"
                alt=""
                aria-hidden="true"
              />

              <div className="products-text">
                <h3 className="products-title">Produits Naturel</h3>
                <p className="products-description">
                  Notre café est torréfié de façon naturelle en Italie, à
                  Modena, selon un savoir-faire artisanal qui garantit
                  authenticité et qualité.
                </p>
              </div>
            </div>

            {/* RIGHT: Italy flag only */}
            <div className="products-flag-wrapper">
              <img src={italyFlag} className="italy-flag" alt="Italie" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= NOUVEAUTÉS SECTION ================= */}
      <section className="news-section">
        <div className="news-inner">
          {/* reuse same title wrapper + gold lines */}
          <div className="title-wrapper">
            <img src={goldLineLeft} className="gold-line left" alt="" />
            <h2 className="expertise-title">Nouveautés</h2>
            <img src={goldLineRight} className="gold-line right" alt="" />
          </div>

          {/* TAKE-IT ROW */}
          <div className="news-row">
            {/* text left with gold line (like Produits Naturel) */}
            <div className="news-col news-col-text">
              <div className="news-text-wrapper">
                <img
                  src={goldLineFull}
                  className="news-line"
                  alt=""
                  aria-hidden="true"
                />

                <div className="news-text">
                  <h3 className="news-item-title">TAKE-IT</h3>
                  <p className="news-item-description">
                    Dipsamatic a mis en place une solution qui permet aux
                    consommateurs de régler leurs achats via leur téléphone
                    grâce à un compte personnel, utilisable sur l’ensemble du
                    parc de machines.
                  </p>
                </div>
              </div>
            </div>

            {/* image right */}
            <div className="news-col news-col-image">
              <div className="news-image-card">
                <img src={takeItImg} alt="Application Take-it" />
              </div>
            </div>
          </div>

          {/* BUNA ROW */}
          <div className="news-row buna-row">
            {/* LEFT: image + gold line + text stacked, all aligned left */}
            <div className="news-col buna-main">
              <div className="news-image-card">
                <img src={bunaImg} alt="Café Buna" />
              </div>

              {/* gold line + text, same structure as TAKE-IT */}
              <div className="news-text-wrapper buna-text-wrapper">
                <img
                  src={goldLineFull}
                  className="news-line"
                  alt=""
                  aria-hidden="true"
                />

                <div className="news-text">
                  <h3 className="news-item-title">BUNA</h3>
                  <p className="news-item-description">
                    Dipsamatic propose le café Buna, une sélection d’exception
                    torréfiée naturellement en Italie à Modena. Chaque tasse
                    incarne qualité, authenticité et plaisir, alliant
                    savoir-faire artisanal et dégustation raffinée.
                  </p>
                  <img
                    src={offerImg}
                    className="buna-offer"
                    alt="18,90€ par Kg — livraison offerte à partir de ..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;