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
             <Link href="/User/Overview/Ahmedabad/Ahmedabad1" className="metro-link"> Ahmedabad Metro Phase-II</Link>
            </button>
            <button
              className={active === "surat" ? "active" : ""}
              onClick={() => setActive("surat")}
            >
              <Link href="/User/Overview/Surat1"className="metro-link">surat Metro</Link>
            </button>
          </div>


          {/* Right Content */}
          <div className="project-content">
            
            <h3>Project Overview:</h3>

   <a href="#" className="metro-description">
  Surat Metro Project comprises of two corridors : Corridor-1 - Sarthana to Dream City and
  Corridor 2 - Bhesan to Saroli having 38 stations with a total length of 40.35 km of which
  6.47 km is underground. The two (02) depots are located at Dream City and Bhesan.
  The civil construction work is under progress.

  <br /><br />

  The network details are as follows:
</a>


           
            {/* Table */}
            
           <div className="table-wrapper">
  <table className="metro-table">
    <thead>
      <tr>
     <th rowSpan={2}>Corridor</th>
    <th colSpan={2}>Elevated</th>
    <th colSpan={2}>Underground</th>
       </tr>
      <tr>
        <th>No. of Stations</th>
        <th>Route Length (Km)</th>
        <th>No. of Stations</th>
        <th>Route Length (Km)</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Sarthana to Dream City</td>
        <td>14</td>
        <td>15.14</td>
        <td>6</td>
        <td>6.47</td>
      </tr>

      <tr>
        <td>Bhesan to Saroli</td>
        <td>18</td>
        <td>18.74</td>
        <td>–</td>
        <td>–</td>
      </tr>

      <tr className="total-row">
        <td>Total</td>
        <td>32</td>
        <td>33.88</td>
        <td>6</td>
        <td>6.47</td>
      </tr>
    </tbody>
  </table>
</div>

            <button className="map-btn">View on Interactive Map</button>
            <div className="map-flex">
  {/* LEFT MAP */}
  <div className="map-left-2">
    <img
      src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081790/Imge3_nw4xfk.jpg"
      alt="Metro Map"
       className="map-img"
    />
  </div>

  {/* RIGHT LEGEND IMAGE */}
  
</div>

          </div>
          </div>
      </div>
      
  );
}
