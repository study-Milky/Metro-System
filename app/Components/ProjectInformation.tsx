"use client"
import Link from 'next/link'
import React from 'react'
const ProjectInformation = () => {
  return (
    <div>
      <div className="info-bar">
        <div className="info-title">
          Important Information
        </div>

        <div className="info-marquee">
          <marquee>
            The Ahmedabad Metro Rail Project is designed to provide safe, fast, reliable, and eco-friendly public transportation for the city. The project aims to reduce traffic congestion, shorten travel time, and improve urban mobility while supporting sustainable development.
            <a
              href="/pdf/GMRCL.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view official notice (PDF)
            </a>
          </marquee>
        </div>

      </div>
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
            <button className="know-btn">To Know More →</button>
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
            <button className="know-btn">To Know More →</button>
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
            <button className="know-btn">To Know More →</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div className="feature-grid">

          <div className="feature-card">
            <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081794/project_obcgdi.webp" alt="overview" />
            <h3>Project<br />Overview</h3>
          </div>

          <div className="feature-card">
            <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081794/project_obcgdi.webp" alt="features" />
            <h3>Special<br />Features</h3>
          </div>

          <div className="feature-card">
            <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081734/123_ob5xo4.png" alt="integration" />
            <h3>Multi Model<br />Integration</h3>
          </div>

          <div className="feature-card">
            <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081734/456_foa66s.webp" alt="milestones" />
            <h3>Milestones</h3>
          </div>

          <div className="feature-card">
            <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081796/project1_qa1nzx.png" height={100} width={250} alt="environment" />
            <h3>Environment<br />Initiatives</h3>
          </div>

          <div className="feature-card center-card">
            <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081755/h1_grg3tf.png" alt="gallery" />
            <h3>Photo Gallery</h3>
          </div>

        </div>
      </section>




    </div>
  )
}

export default ProjectInformation
