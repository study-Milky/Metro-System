"use client";


import { useState } from "react";

export default function MMIPage() {
  const [activeTab, setActiveTab] = useState("phase2");

  return (
    <div className="mmi-page">
      
      {/* ===== TITLE ===== */}
      <h1 className="mmi-title">Multi Model Integration</h1>
      <div className="title-underline"></div>

      <p className="mmi-desc">
        Multi Model integration (MMI) refers to the seamless coordination and
        integration of different transportation modes at and around metro
        stations.
      </p>

      {/* ===== MAIN SECTION ===== */}
      <div className="mmi-container">

        {/* LEFT TABS */}
        <div className="mmi-sidebar">
          <button
            className={activeTab === "phase1" ? "active" : ""}
            onClick={() => setActiveTab("phase1")}
          >
            Ahmedabad Metro Phase-I
          </button>

          <button
            className={activeTab === "phase2" ? "active" : ""}
            onClick={() => setActiveTab("phase2")}
          >
            Ahmedabad Metro Phase-II
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="mmi-content">

          <h3>Integration With Other Transportation Modes</h3>

          {/* MAP IMAGE */}
          <img
            src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081767/eshs1_kswdof.jpg"
            alt="MMI Map"
            width={900}
            height={500}
            className="mmi-image"
          />

          <p className="mmi-note">
            All Ahmedabad Phase II stations are universally accessible...
          </p>

          {/* STREET PLAN IMAGE */}
          <img
            src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081796/mmi1_w0otib.jpg"
            alt="Street Development Plan"
            width={900}
            height={500}
            className="mmi-image"
          />

          
        </div>
      </div>
      <div className="station-page">

      {/* ===== AEC METRO ===== */}
      <h2 className="station-title">AEC Metro Station</h2>

      <div className="station-card">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081744/AEC_yi84ao.jpg"
          alt="AEC Metro Station MMI"
          width={1100}
          height={600}
          className="station-img"
        />
        <p className="station-caption">
          Skywalk connecting Sabarmati HSR Station and Lift connecting
          Sabarmati BRTS Stop
        </p>
      </div>

      {/* ===== RANIP METRO ===== */}
      <h2 className="station-title">Ranip Metro Station</h2>

      <div className="station-card">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081805/Ranip_pnxnxo.jpg"
          alt="Ranip Metro Station"
          width={1100}
          height={600}
          className="station-img"
        />
      </div>

      <div className="station-card">
        <img

          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081805/Ranip1_xoa1qu.jpg"
          alt="Ranip BRTS Integration"
          width={1100}
          height={600}
          className="station-img"
        />
        <p className="station-caption">
          Lift connecting Ranip BRTS Stop and GSRTC Ranip Bus Terminal
        </p>
      </div>

      {/* ===== VADAJ METRO ===== */}
      <h2 className="station-title">Vadaj Metro Station</h2>

      <div className="station-card">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081817/Vadaj_kau5kz.jpg"
          alt="Vadaj Metro Station"
          width={1100}
          height={600}
          className="station-img"
        />
        <p className="station-caption">
          Skywalk and lift connecting Vadaj Metro Station and Vadaj BRTS Stop
        </p>
      </div>
      
      <div className="station-card">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081817/Vadaj_kau5kz.jpg"
          alt="Vadaj Metro Station"
          width={1100}
          height={600}
          className="station-img"
        />
        <p className="station-caption">
          Skywalk and lift connecting Vadaj Metro Station and Vadaj BRTS Stop
        </p>
      </div>
      
      <div className="station-card">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081817/Vadaj1_u7rfwa.jpg"
          alt="Vadaj Metro Station"
          width={1100}
          height={600}
          className="station-img"
        />
        <p className="station-caption">
          Skywalk and lift connecting Vadaj Metro Station and Vadaj BRTS Stop
        </p>
      </div>

    </div>
    </div>
  );
}
