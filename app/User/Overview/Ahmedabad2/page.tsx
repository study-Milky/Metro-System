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
          src="/Img/overview1.webp"
          alt="Project Overview"
         className="banner-img"
        />
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
             <Link href="/User/Overview/Ahmedabad/Ahmedabad1" className="metro-link"> Ahmedabad Metro Phase-II</Link>
            </button>
            <button
              className={active === "surat" ? "active" : ""}
              onClick={() => setActive("surat")}
            >
              <Link href="/User/Overview/Surat1" className="metro-link">Surat metro</Link>
            </button>
          </div>


          {/* Right Content */}
          <div className="project-content">
            
            <h3>Project Overview:</h3>

      <a href="#" className="metro-description">
  Ahmedabad Phase-II is an extension of the Phase-I that aims to connect the twin cities
  Ahmedabad and Gandhinagar. The network comprises of two corridors stretching 28.2 km
  and having 22 stations. Out of 28.2 Km corridor, 20.8 Km and 8 stations from Motera to
  Mahatma Mandir and GNLU to GIFT City was inaugurated by Hon'ble Prime Minister on
  16th September 2024. Additional 7 stations and 1.9 Km of stretch till Sachivalaya
  metro station was opened to public on 27 April 2025.

  <br /><br />

  The network details are as follows:
</a>


           
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
                  <td>Motera stadium to mahatma mandir</td>
                  <td>20</td>
                  <td>15</td>
                  <td>22.7</td>
                  <td>17.3</td>
                </tr>
                <tr>
                  <td>GNLU to giftcity</td>
                  <td>2</td>
                  <td>2</td>
                  <td>5.4</td>
                  <td>5.4</td>
                </tr>
   
                <tr className="total-row">
                  <td>Total</td>
                  <td>22</td>
                  <td>17</td>
                  <td>28.2</td>
                  <td>22.7</td>
                </tr>
              </tbody>
            </table>

            <button className="map-btn">View on Interactive Map</button>
            <div className="map-flex">
  {/* LEFT MAP */}
  <div className="map-left-2">
    <img
      src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081780/Imge2_xrencp.jpg"
      alt="Metro Map"
       className="map-img"
    />
  </div>

  {/* RIGHT LEGEND IMAGE */}
  <div className="map-right">
    <img
      src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081779/Imge_iftapj.jpg"
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
