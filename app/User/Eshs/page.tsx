"use client";

import { useState } from "react";

export default function ESHS() {
  const [tab, setTab] = useState("env");

  return (
    <section className="eshs-page">
      {/* Banner */}
      <div className="eshs-banner">
        <h2>ESHS (Environment, Safety & Health, Social and R&R)</h2>
      </div>

      {/* Tabs */}
      <div className="eshs-tabs">
        <button
          className={tab === "env" ? "active" : ""}
          onClick={() => setTab("env")}
        >
          Environment
        </button>

        <button
          className={tab === "social" ? "active" : ""}
          onClick={() => setTab("social")}
        >
          Social
        </button>

        <button
          className={tab === "hse" ? "active" : ""}
          onClick={() => setTab("hse")}
        >
          Health & Safety
        </button>
      </div>

      {/* ENVIRONMENT TAB */}
      {tab === "env" && (
        <>
          <Section title="Environment Impact Assessment (EIA)">
            <p>
              EIA study has been conducted as per World Bank guidelines covering
              air, water, biodiversity, noise & vibration and waste management.
            </p>
          </Section>

          <Section title="Environment Monitoring">
            <p>
              Air & noise quality monitored twice a month through NABL
              accredited agencies.
            </p>

            <div className="img-grid">
              <div className="img-card">
                <img
                  src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081737/esms_yfvhua.jpg"
                  alt="Mahatma Mandir"
                />
                <p>Mahatma Mandir, Gandhinagar</p>
              </div>

              <div className="img-card">
                <img
                  src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081737/esms1_gson1k.jpg"
                  alt="Sector 10A"
                />
                <p>Sector 10A, Gandhinagar</p>
              </div>

              <div className="img-card">
                <img
                  src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081738/esms2_knpend.jpg"
                  alt="RMC Plant"
                />
                <p>RMC Plant, Gandhinagar</p>
              </div>
            </div>
          </Section>

          <Section title="Waste Management">
            <div className="img-grid two">
              <div className="img-card">
                <img
                  src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081741/esms3_racags.jpg"
                  alt="Waste Management"
                />
              </div>

              <div className="img-card">
                <img
                  src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081739/esms4_imqfjm.jpg"
                  alt="Waste Management"
                />
              </div>
            </div>
          </Section>

          <Section title="Water Management">
            <div className="img-grid two">
              <div className="img-card">
                <img
                  src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081742/esms5_apvnfw.jpg"
                  alt="Water Management"
                />
              </div>

              <div className="img-card">
                <img
                  src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081749/esms9_gcyzom.jpg"
                  alt="Water Management"
                />
              </div>
            </div>
          </Section>

          <Section title="Site Photograph">
            <img
              src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081766/esms8_puto2f.jpg"
              alt="Site"
              className="full-img"
            />
          </Section>
        </>
      )}

      {/* OTHER TABS */}
      {tab !== "env" && (
        <div className="placeholder">
          <h3>Content Coming Soon</h3>
        </div>
      )}
    </section>
  );
}

/* ---------- Section Component ---------- */
function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="eshs-section">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}


