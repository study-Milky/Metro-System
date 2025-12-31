"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  
  FaUserTie,
  FaRegFile,
  FaNewspaper,
  FaPhoneAlt,
  FaShieldAlt,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const [projectOpen, setProjectOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [specialOpen, setSpecialOpen] = useState(false);
  const [mmiOpen, setMmiOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setProjectOpen(false);
        setOverviewOpen(false);
        setSpecialOpen(false);
        setMmiOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <div className="top-header">
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081779/logo_aeggta.jpg" alt="Logo" width={120} height={100} />
        <div className="header-text">
          <h1>GUJARAT METRO RAIL CORPORATION (GMRC) LIMITED</h1>
          <p>(SPV of Government of India and Government of Gujarat)</p>
          <p>
  Formerly known as Metro-Link Express for Gandhinagar and Ahmedabad (MEGA) Company Limited
</p>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <Link href="/User/Home"><FaHome /> Home</Link>
        <Link href="/User/About"><FaInfoCircle /> About</Link>

        {/* ===== PROJECT ===== */}
        <ul className="menu">
          <li className="menu-item" ref={menuRef}>
            <span className="menu-title" onClick={() => setProjectOpen(!projectOpen)}>
              <FaProjectDiagram /> Project ▾
            </span>

            {projectOpen && (
              <ul className="dropdown">

                {/* ===== OVERVIEW ===== */}
                <li
                  className="has-submenu"
                  onMouseEnter={() => setOverviewOpen(true)}
                  onMouseLeave={() => setOverviewOpen(false)}
                >
                  <span className="submenu-title">Overview ▸</span>
                  {overviewOpen && (
                    <ul className="sub-dropdown">
                      <li><Link href="/User/Overview/Ahmedabad">Ahmedabad Phase 1</Link></li>
                      <li><Link href="/User/Overview/Ahmedabad2">Ahmedabad Phase 2</Link></li>
                      <li><Link href="/User/Overview/Surat1">Surat Phase 1</Link></li>
                    </ul>
                  )}
                </li>

                {/* ===== SPECIAL FEATURES ===== */}
                <li
                  className="has-submenu"
                  onMouseEnter={() => setSpecialOpen(true)}
                  onMouseLeave={() => setSpecialOpen(false)}
                >
                  <span className="submenu-title">Special Features ▸</span>
                  {specialOpen && (
                    <ul className="sub-dropdown">
                      <li><Link href="/User/Special">Ahmedabad phase1</Link></li>
                      <li><Link href="/User/Special/Special1">Ahmedabad phase2</Link></li>
                    </ul>
                  )}
                </li>

                {/* ===== MMI ===== */}
                <li
                  className="has-submenu"
                  onMouseEnter={() => setMmiOpen(true)}
                  onMouseLeave={() => setMmiOpen(false)}
                >
                  <span className="submenu-title">MMI ▸</span>
                  {mmiOpen && (
                    <ul className="sub-dropdown">
                      <li><Link href="/User/Mmi/Interation">Ahmedabad phase1</Link></li>
                      {/* <li><Link href="/User/Mmi/Interation1">Ahmedabad phase2</Link></li> */}
                    </ul>
                  )}
                </li>

                <li><Link href="/User/Melistone">Milestones</Link></li>
                <li><Link href="/User/technologi">Technology</Link></li>
                <li><Link href="/User/Eshs">ESHS</Link></li>
                
              </ul>
            )}
          </li>
        </ul>

        
        <Link href="/User/Rti"><FaRegFile /> RTI</Link>
        <Link href="/User/Media"><FaNewspaper /> Media</Link>
        <Link href="/User/Contact"><FaPhoneAlt /> Contact</Link>
       
      </nav>
    </>
  );
}
