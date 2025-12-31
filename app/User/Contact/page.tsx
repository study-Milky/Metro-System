"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="contact-page">
      {/* Banner */}
      <div className="contact-banner">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081735/Contact_ub3ht1.avif"
          alt="Contact Banner"
        
          className="banner-img2"
        
        />
        <div className="banner-overlay">
          <h2>CONTACT US</h2>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <h1>Contact Us</h1>
        <div className="underline"></div>

        <div className="contact-box">
          <h2>Gujarat Metro Rail Corporation (GMRC) Limited</h2>
          <p className="cin">CIN NO. U60200GJ2010SGC059407</p>

          <div className="address">
            📍 Block No. 1, First Floor, Karmayogi Bhavan,  
            Sector 10/A, Gandhinagar – 382010
          </div>

          <div className="card-grid">
            {/* Passenger */}
            <div className="contact-card">
              <h3>Passenger Correspondence</h3>
              <div className="mini-underline"></div>

              <p>📞 +91-79-22960123</p>
              <p>
                ✉️{" "}
                <a href="mailto:care@gujaratmetrorail.com">
                  care@gujaratmetrorail.com
                </a>
              </p>
            </div>

            {/* General */}
            <div className="contact-card">
              <h3>General Correspondence</h3>
              <div className="mini-underline"></div>

              <p>📞 +91-79-23248572</p>
              <p>
                ✉️{" "}
                <a href="mailto:info@gujaratmetrorail.com">
                  info@gujaratmetrorail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
