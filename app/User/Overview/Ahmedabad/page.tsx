"use client";

import Link from "next/link";
import { useState } from "react";



export default function Ahmedabad() {
  const [active, setActive] = useState("phase1");

  return (
    <div>
      {/* Banner */}
      <section className="project-banner">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081794/overview1_xiuzxl.webp"
          alt="Project Overview"
         className="banner-img"
        />
           <div className="banner-overlay"></div>
        <h1 className="banner-title">PROJECT OVERVIEW</h1>
      </section>

      {/* Main Section */}
        <section className="projects-wrapper">
            
        <h2 className="section-title">Projects Overview</h2>
        <div className="underline"></div>

        </section>
        <div className="projects-container">
          {/* Left Tabs */}
          <div className="project-tabs">
            <button
              className={active === "phase1" ? "active" : ""}
              onClick={() => setActive("phase1")}
            >
              <Link href="/User/Overview/Ahmedabad" className="metro-link"> Ahmedabad Metro Phase-I</Link>
            </button>
            <button
              className={active === "phase2" ? "active" : ""}
              onClick={() => setActive("phase2")}
            >
             <Link href="/User/Overview/Ahmedabad2" className="metro-link"> Ahmedabad Metro Phase-II</Link>
            </button>
            <button
              className={active === "surat" ? "active" : ""}
              onClick={() => setActive("surat")}
            >
              <Link href="/User/Overview/Surat1" className="metro-link">Surat Metro</Link>
            </button>
          </div>


          {/* Right Content */}
          <div className="project-content">
            
            <h3>Project Overview:</h3>

            <p>
             Ahmedabad Metro Project, Phase-I having two corridors i.e. North-South Corridor – APMC to Motera Stadium and East-West Corridor, Thaltej Gam to Vastral Gam was sanctioned by Government of India (GoI) in November, 2014.
</p>

<p>
The commercial operations of the Ahmedabad Metro Rail Project Phase-I began in March 2019 with 6.5 km viaduct and initial opening of Vastral Gam & Apparel Park stations, followed by Nirant Cross Road in April 2019, Amraiwadi in May 2019 and Vastral & Rabari Colony in March’21. Further, 32.1 km stretch became operational in October 2022. An additional 1.43 km stretch from Thaltej to Thaltej Gam opened for public in December 2024, bringing the total span of Ahmedabad Metro Phase-I to 40.03 km with 31 stations.
            </p>

           
            {/* Table */}
            
            <table>
              <thead>
                <tr>
                  <th>Corridor</th>
                  <th>No. of Stations</th>
                  <th>Operational Stations</th>
                  <th>Route Length (km)</th>
                  <th>Operational Length (km)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>East–West</td>
                  <td>17</td>
                  <td>17</td>
                  <td>21.16</td>
                  <td>21.16</td>
                </tr>
                <tr>
                  <td>North–South</td>
                  <td>15</td>
                  <td>14</td>
                  <td>18.87</td>
                  <td>18.87</td>
                </tr>
   
                <tr className="total-row">
                  <td>Total</td>
                  <td>32</td>
                  <td>31</td>
                  <td>40.03</td>
                  <td>40.03</td>
                </tr>
              </tbody>
            </table>

            <button className="map-btn">View on Interactive Map</button>
            <div className="map-flex">
  {/* LEFT MAP */}
  <div className="map-left">
    <img
      src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081776/image_liw9cp.png"
      alt="Metro Map"
       className="map-img"
    />
  </div>

  {/* RIGHT LEGEND IMAGE */}
  <div className="map-right">
    <img
      src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081790/map1_ii2yy2.jpg"
      alt="Metro Legend"
      width={320}
      height={200}
      
    />
  </div>
</div>

          </div>
          </div>
      </div>
      
  );
}
