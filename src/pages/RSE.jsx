import React from "react";
import "../styles/rse.css";

import rseLogo from "../assets/RSE_LOGO.png";
import goldLineLeft from "../assets/goldLine_L.png";
import goldLineRight from "../assets/goldLine_R.png";
import rseEU from "../assets/RSEEU.png";

/* Scroll reveal wrapper */
import Reveal from "../components/Reveal";

function RSE() {
  return (
    <main className="rse-page">
      {/* ================= RSE HERO (IMAGE BACKGROUND) ================= */}
      <section className="rse-hero">
        <Reveal animation="fade-up">
          <div className="rse-hero-content">
            {/* Logo instead of text title */}
            <img src={rseLogo} alt="RSE" className="rse-logo" />

            <p className="rse-hero-subtitle">
              Chez Dipsamatic, nos machines Like Touch s&apos;inscrivent dans un
              circuit durable, pensées pour limiter l&apos;impact environnemental
              tout en garantissant des solutions responsables et performantes au
              quotidien.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= RECYCLÉ EN EUROPE ================= */}
      <section className="rse-europe">
        <div className="rse-inner">
          {/* title + gold lines, same style as home */}
          <Reveal animation="fade-up">
            <div className="title-wrapper">
              <img src={goldLineLeft} className="gold-line left" alt="" />
              <h2 className="rse-section-title">Recyclé en Europe</h2>
              <img src={goldLineRight} className="gold-line right" alt="" />
            </div>
          </Reveal>

          {/* image block */}
          <Reveal animation="fade-up">
            <div className="rse-europe-image-wrapper">
              <img
                src={rseEU}
                alt="Carte Recyclé en Europe"
                className="rse-europe-image"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRAITEMENT DE NOS DÉCHETS ================= */}
      <section className="rse-waste">
        <div className="rse-inner">
          {/* title + gold lines */}
          <Reveal animation="fade-up">
            <div className="title-wrapper">
              <img src={goldLineLeft} className="gold-line left" alt="" />
              <h2 className="rse-section-title">Traitement de nos déchets</h2>
              <img src={goldLineRight} className="gold-line right" alt="" />
            </div>
          </Reveal>

          {/* 3 step cards */}
          <Reveal animation="fade-up">
            <div className="waste-cards">
              <div className="waste-card">
                <div className="waste-number">01</div>
                <div className="waste-content">
                  <h3 className="waste-title">Collecte</h3>
                  <p className="waste-text">
                    Collecte des cartons sur l&apos;ensemble de nos lieux de travail.
                  </p>
                </div>
              </div>

              <div className="waste-card">
                <div className="waste-number">02</div>
                <div className="waste-content">
                  <h3 className="waste-title">Mise en balles</h3>
                  <p className="waste-text">
                    Compactage en balles pour optimiser le stockage et le transport.
                  </p>
                </div>
              </div>

              <div className="waste-card">
                <div className="waste-number">03</div>
                <div className="waste-content">
                  <h3 className="waste-title">Recyclage</h3>
                  <p className="waste-text">
                    Valorisation des matières recyclables dans un circuit
                    responsable.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* paragraph under cards */}
          <Reveal animation="fade-up">
            <p className="waste-paragraph">
              Le siège de Dipsamatic met en place des dispositifs de collecte et
              de traitement des cartons en balles, permettant d’optimiser le
              recyclage des emballages. Cette démarche contribue à réduire les
              déchets, à valoriser les matières recyclables et à inscrire nos
              activités dans un circuit plus responsable et durable.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default RSE;