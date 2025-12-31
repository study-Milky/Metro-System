"use client";


import { useState } from "react";

export default function SpecialFeatures() {
  const [active, setActive] = useState("phase1");

  return (
    <div>
    <section className="project-banner">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081794/overview1_xiuzxl.webp"
          alt="Project Overview"
         className="banner-img"
        />
        <h1 className="banner-title">PROJECT OVERVIEW</h1>
      </section>
    <section className="features-section">
      <h2 className="title">Special Features</h2>
      <div className="underline"></div>

      <div className="features-layout">
        {/* LEFT MENU */}
        <div className="left-menu">
          <button
            className={active === "phase1" ? "active" : ""}
            onClick={() => setActive("phase1")}
          >
            Ahmedabad Metro Phase-I
          </button>

          <button
            className={active === "phase2" ? "active" : ""}
            onClick={() => setActive("phase2")}
          >
            Ahmedabad Metro Phase-II
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right-content">
          {active === "phase1" && (
            <>
              {/* ITEM 1 */}
              <div className="feature-item">
                <div className="text">
                  <h3>Cantilever Bridge:</h3>
                  <p>
                    This 3-span bridge adjacent to Thaltej Station will be
                    constructed with total length of 165 m (45 m + 75 m + 45 m).
                    The work was awarded in January 2017 with a value of
                    Rs. 721 crore.
                  </p>
                </div>

                <div className="image">
                  <img
                    src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081800/Special_xhn3nx.jpg"
                    alt="Cantilever Bridge"
                    width={450}
                    height={260}
                  />
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="feature-item">
                <div className="text">
                  <h3>Open web girder (OWG):</h3>
                  <p>
                    These bridges are used in the Ahmedabad Metro Phase-1
                    project, particularly in the 4.85 km Package 4A connecting
                    Ranip and Motera, including an OWG steel bridge at
                    Sabarmati.
                  </p>
                </div>

                <div className="image">
                  <img
                    src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081801/Special1_obsqv7.jpg"
                    alt="OWG Bridge"
                    width={450}
                    height={260}
                  />
                </div>
              </div>
            </>
          )}
{active === "phase2" && (
            <>
              {/* ITEM 1 */}
              <div className="feature-item">
                <div className="text">
                  <h3>Cantilever Bridge:</h3>
                  <p>
                    Extradosed Bridge across Narmada Canal is part of elevated viaduct of Ahmedabad Metro Project from Mahatma Mandir to APMC through North-South corridor.

The 303 mts long extradosed bridge built over Narmada canal is one of its kind structure. This bridge is a precast segmentally constructed by balance cantilever construction technique supported by stray cable intermittently in two planes.
                  </p>
                </div>

                <div className="image">
                  <img
                    src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081802/Special3_jyd390.jpg"
                    alt="Cantilever Bridge"
                    width={450}
                    height={260}
                  />
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="feature-item">
                <div className="text">
                  <h3>Open web girder (OWG):</h3>
                  <p>
                    The 960 m long bridge across the Sabarmati river (23 spans, 41.8 m) built using latest auto launching technique, links Gandhinagar and Ahmedabad to GIFT City.
                  </p>
                </div>

                <div className="image">
                  <img
                    src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081804/Special4_ygdjzp.jpg"
                    alt="OWG Bridge"
                    width={450}
                    height={260}
                  />
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
    </div>
  );
}
