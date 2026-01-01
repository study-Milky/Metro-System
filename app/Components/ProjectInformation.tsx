"use client";

import React from "react";
import Link from "next/link";


const ProjectInformation = () => {
  return (
    <div>
      {/* Info Bar */}
      <div className="info-bar">
        <div className="info-title">Important Information</div>

        {/* Marquee Replacement */}
        <div className="info-marquee">
          <div className="marquee-text">
            The Ahmedabad Metro Rail Project is designed to provide safe, fast,
            reliable, and eco-friendly public transportation for the city. The
            project aims to reduce traffic congestion, shorten travel time, and
            improve urban mobility while supporting sustainable development.{" "}
            <a
              href="/pdf/GMRCL.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view official notice (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="project-overview">
        <h2 className="section-title">Project Overview</h2>
        <div className="underline"></div>

        <div className="project-container">
          {/* Card 1 */}
          <div className="project-card">
            <h3 className="card-title">Ahmedabad Phase–1</h3>

            <div className="card-item">
              <span className="big">2014</span>
              <p>Sanctioning Year</p>
            </div>

            <div className="card-item">
              <span className="big">32</span>
              <p>Total Stations</p>
            </div>

            <div className="card-split">
              <div>
                <span>28</span>
                <p>Elevated Stations</p>
              </div>
              <div>
                <span>4</span>
                <p>Underground Stations</p>
              </div>
            </div>

            <div className="card-item">
              <span className="big">31</span>
              <p>Operational Stations</p>
            </div>

            <Link href="/User/Overview/Ahmedabad/Ahmedabad1">
              <button type="button" className="know-btn">
                To Know More →
              </button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="project-card">
            <h3 className="card-title">Ahmedabad Phase–2</h3>

            <div className="card-item">
              <span className="big">2019</span>
              <p>Sanctioning Year</p>
            </div>

            <div className="card-item">
              <span className="big">22</span>
              <p>Total Stations</p>
            </div>

            <div className="card-item">
              <span className="big">17</span>
              <p>Operational Stations</p>
            </div>

            <Link href="/User/Overview/Ahmedabad2">
              <button type="button" className="know-btn">
                To Know More →
              </button>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="project-card">
            <h3 className="card-title">Surat Phase–1</h3>

            <div className="card-item">
              <span className="big">2019</span>
              <p>Sanctioning Year</p>
            </div>

            <div className="card-item">
              <span className="big">38</span>
              <p>Total Stations</p>
            </div>

            <Link href="/User/Overview/Surat1">
              <button type="button" className="know-btn">
                To Know More →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="feature-grid">
         <div className="feature-card">
            <img
              src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081794/project_obcgdi.webp"
              alt="features"
              width={250}
              height={150}
            />
            <h3>
              Special <br /> Features
            </h3>
          </div>

          <div className="feature-card">
            <img
              src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081734/123_ob5xo4.png"
              alt="integration"
              width={250}
              height={150}
            />
            <h3>
              Multi Model <br /> Integration
            </h3>
          </div>

          <div className="feature-card">
            <img
              src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081734/456_foa66s.webp"
              alt="milestones"
              width={250}
              height={150}
            />
            <h3>Milestones</h3>
          </div>

          <div className="feature-card">
            <img
              src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081796/project1_qa1nzx.png"
              alt="environment"
              width={250}
              height={150}
            />
            <h3>
              Environment <br /> Initiatives
            </h3>
          </div>

          <div className="feature-card ">
            <img
              src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081755/h1_grg3tf.png"
              alt="gallery"
              width={250}
              height={150}
            />
            <h3>Photo Gallery</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInformation;
