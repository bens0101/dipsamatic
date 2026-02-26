import React from "react";
import "../styles/rse.css";

import cafeVideo from "../assets/homeherobanner.png";

function RSE() {
  return (
    <main className="rse-page">
      {/* ================= RSE HERO (VIDEO BACKGROUND) ================= */}
      <section className="rse-hero">
        {/* Background video */}
        <video
          className="rse-hero-video"
          src={cafeVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay handled in CSS via ::before – text sits on top */}
        <div className="rse-hero-content">
          <h1 className="rse-hero-title">RSE</h1>
          <p className="rse-hero-subtitle">
            Chez Dipsamatic, nos machines Like Touch s&apos;inscrivent dans un
            circuit durable, pensées pour limiter l&apos;impact environnemental
            tout en garantissant des solutions responsables et performantes au
            quotidien.
          </p>
        </div>
      </section>

      {/* You can add the “Recyclé en Europe” section etc. under here later */}
    </main>
  );
}

export default RSE;