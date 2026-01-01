// app/components/Footer.jsx
"use client"

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Logos */}
      <div className="footer-logos">
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081771/IGBC_h51sg3.jpg" alt="" width={120} height={70} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081746/gujarat_azyoqf.png" alt="" width={120} height={40} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081779/logo_aeggta.jpg" alt="" width={120} height={70} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081751/gujarat1_wkor21.png" alt="" width={140} height={50} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081791/OIP_uxvx9r.webp" alt="" width={130} height={45} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081751/gujarat2_z4eypu.jpg" alt="" width={80} height={70} />
      </div>

      {/* Quick Links Section */}
      <div className="footer-content">
        <div className="quick-links-section">
          <h2 className="footer-heading">Quick Link</h2>
          <div className="links-list">
            <Link href="/User/Contact">Contact Us</Link>
            <span>Careers</span>
            <span>Feedback/Grievance</span>
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
          </div>
          
          <div className="terms-section">
            <h3 className="terms-heading">Terms and Conditions</h3>
            <div className="copyright-text">
              <p>© Content owned, updated and maintained by the <strong>GMRCL</strong>.</p>
              <p>This website belongs to <strong>Gujarat Metro Rail Corporation (GMRC) Limited</strong></p>
              <p>Platform is designed, developed and hosted by <strong>GMRCL</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="footer-bottom">
        <div className="visit-info">
          <div className="info-item">
            <span className="info-label">Visit Count:</span>
            <span className="info-value">221950</span>
          </div>
          <div className="info-item">
            <span className="info-label">Last Updated on:</span>
            <span className="info-value">01-Jan-2026 @ 5:43 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}