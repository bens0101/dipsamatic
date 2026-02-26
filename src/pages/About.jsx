import React from "react";
import "../styles/about.css";

import quiLogo from "../assets/quiLOGO.png";

import goldLineLeft from "../assets/goldLine_L.png";
import goldLineRight from "../assets/goldLine_R.png";

import qui1 from "../assets/qui1.png";
import qui2 from "../assets/qui2.png";
import qui3 from "../assets/qui3.png";
import qui4 from "../assets/qui4.png";

import quiIcon1 from "../assets/quiIcon1.png";
import quiIcon2 from "../assets/quiIcon2.png";
import quiIcon3 from "../assets/quiIcon3.png";
import quiIcon4 from "../assets/quiIcon4.png";

function About() {
  return (
    <main className="about-page">
      {/* ================ HERO (same style as RSE) ================ */}
      <section className="about-hero">
        <div className="about-hero-content">
          {/* Logo instead of text title */}
          <img src={quiLogo} alt="Qui sommes-nous" className="about-logo" />

          <p className="about-hero-subtitle">
            Depuis plus de 23 ans, DIPSAMATIC évolue dans le secteur de la
            distribution automatique de café et de snacking, au cœur du
            quotidien des entreprises. Portée par une équipe de terrain engagée
            et fidèle, la société accompagne ses clients avec des solutions clés
            en main de l&apos;installation au réapprovisionnement. Implantée
            localement, DIPSAMATIC privilégie la proximité, la réactivité et
            l&apos;écoute. Chaque jour, ce sont des centaines de sites et des
            milliers de pauses qui sont assurés avec la même exigence de
            qualité et de fiabilité.
          </p>
        </div>
      </section>

      {/* ================ NOS ÉQUIPES ================ */}
      <section className="about-team">
        <div className="about-inner">
          {/* title + gold lines (same pattern as RSE) */}
          <div className="title-wrapper">
            <img src={goldLineLeft} className="gold-line left" alt="" />
            <h2 className="about-section-title">Nos équipes</h2>
            <img src={goldLineRight} className="gold-line right" alt="" />
          </div>

          {/* cards */}
          <div className="team-cards">
            {/* Préparation */}
            <div className="team-card">
              <div className="team-icon">
                <img src={quiIcon1} alt="Préparation" />
              </div>
              <h3 className="team-title">Préparation</h3>
              <div className="team-photo-wrapper">
                <img src={qui1} alt="Préparation" className="team-photo" />
              </div>
              <p className="team-text">
                Préparation soignée de vos produits et consommables.
              </p>
            </div>

            {/* Installation */}
            <div className="team-card">
              <div className="team-icon">
                <img src={quiIcon2} alt="Installation" />
              </div>
              <h3 className="team-title">Installation</h3>
              <div className="team-photo-wrapper">
                <img src={qui2} alt="Installation" className="team-photo" />
              </div>
              <p className="team-text">
                Installation rapide et professionnelle sur site.
              </p>
            </div>

            {/* Livraison */}
            <div className="team-card">
              <div className="team-icon">
                <img src={quiIcon3} alt="Livraison" />
              </div>
              <h3 className="team-title">Livraison</h3>
              <div className="team-photo-wrapper">
                <img src={qui3} alt="Livraison" className="team-photo" />
              </div>
              <p className="team-text">
                Livraisons régulières, ponctuelles et sécurisées.
              </p>
            </div>

            {/* Réapprovisionnement */}
            <div className="team-card">
              <div className="team-icon">
                <img src={quiIcon4} alt="Réapprovisionnement" />
              </div>
              <h3 className="team-title">Réapprovisionnement</h3>
              <div className="team-photo-wrapper">
                <img
                  src={qui4}
                  alt="Réapprovisionnement"
                  className="team-photo"
                />
              </div>
              <p className="team-text">
                Réassort continu pour garantir un stock optimal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;