"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaRegFile,
  FaNewspaper,
  FaPhoneAlt,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [projectOpen, setProjectOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [mmiOpen, setMmiOpen] = useState(false);
  const [specialOpen, setSpecialOpen] = useState(false);

  const menuRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setProjectOpen(false);
        setOverviewOpen(false);
        setMmiOpen(false);
        setSpecialOpen(false);
      }
    };

    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <div className="top-header">
        <img
          src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081779/logo_aeggta.jpg"
          alt="Logo"
          width={120}
          height={100}
        />
        <div className="header-text">
          <h1>GUJARAT METRO RAIL CORPORATION (GMRC) LIMITED</h1>
          <p>(SPV of Government of India and Government of Gujarat)</p>
          <p>
            Formerly known as Metro-Link Express for Gandhinagar and Ahmedabad
            (MEGA) Company Limited
          </p>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <Link href="/User/Home" className={`nav-link ${isActive("/User/Home") ? "active" : ""}`}>
          <FaHome /> <span>Home</span>
        </Link>

        <Link href="/User/About" className={`nav-link ${isActive("/User/About") ? "active" : ""}`}>
          <FaInfoCircle /> <span>About</span>
        </Link>

        {/* ===== PROJECT MENU ===== */}
        <ul className="menu">
          <li className="menu-item" ref={menuRef}>
            <span
              className="menu-title nav-link"
              onClick={(e) => {
                e.stopPropagation();
                setProjectOpen(!projectOpen);
              }}
            >
              <FaProjectDiagram /> <span>Project</span>
              <FaChevronDown style={{ fontSize: '12px', marginLeft: '4px' }} />
            </span>

            {projectOpen && (
              <ul className="dropdown">
                {/* OVERVIEW */}
                <li 
                  className="has-submenu"
                  onMouseEnter={() => setOverviewOpen(true)}
                  onMouseLeave={() => setOverviewOpen(false)}
                >
                  <span className="submenu-title">
                    <span>Overview</span>
                    <FaChevronRight style={{ fontSize: '10px' }} />
                  </span>

                  {overviewOpen && (
                    <ul className="sub-dropdown">
                      <li><Link href="/User/Overview/Ahmedabad">Ahmedabad Phase 1</Link></li>
                      <li><Link href="/User/Overview/Ahmedabad2">Ahmedabad Phase 2</Link></li>
                      <li><Link href="/User/Overview/Surat1">Surat Phase 1</Link></li>
                    </ul>
                  )}
                </li>

                {/* SPECIAL FEATURES */}
                <li 
                  className="has-submenu"
                  onMouseEnter={() => setSpecialOpen(true)}
                  onMouseLeave={() => setSpecialOpen(false)}
                >
                  <span className="submenu-title">
                    <span>Special Features</span>
                    <FaChevronRight style={{ fontSize: '10px' }} />
                  </span>

                  {specialOpen && (
                    <ul className="sub-dropdown">
                      <li><Link href="/User/Special">Ahmedabad Phase 1</Link></li>
                      <li><Link href="/User/Special/Special1">Ahmedabad Phase 2</Link></li>
                    </ul>
                  )}
                </li>

                {/* MMI */}
                <li 
                  className="has-submenu"
                  onMouseEnter={() => setMmiOpen(true)}
                  onMouseLeave={() => setMmiOpen(false)}
                >
                  <span className="submenu-title">
                    <span>MMI</span>
                    <FaChevronRight style={{ fontSize: '10px' }} />
                  </span>

                  {mmiOpen && (
                    <ul className="sub-dropdown">
                      <li><Link href="/User/Mmi/Interation">Ahmedabad Phase 1</Link></li>
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

        <Link href="/User/Rti" className={`nav-link ${isActive("/User/Rti") ? "active" : ""}`}>
          <FaRegFile /> <span>RTI</span>
        </Link>

        <Link href="/User/Media" className={`nav-link ${isActive("/User/Media") ? "active" : ""}`}>
          <FaNewspaper /> <span>Media</span>
        </Link>

        <Link href="/User/Contact" className={`nav-link ${isActive("/User/Contact") ? "active" : ""}`}>
          <FaPhoneAlt /> <span>Contact</span>
        </Link>
      </nav>
    </>
  );
}