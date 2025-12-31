// app/components/Footer.jsx
"use client"

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Logos */}
      <div className="footer-logos">
        
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081771/IGBC_h51sg3.jpg" alt="" width={150} height={120} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081746/gujarat_azyoqf.png" alt="" width={140} height={50} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081779/logo_aeggta.jpg" alt="" width={140} height={120} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081751/gujarat1_wkor21.png" alt="" width={170} height={70} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081791/OIP_uxvx9r.webp" alt="" width={160} height={60} />
        <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081751/gujarat2_z4eypu.jpg" alt="" width={100} height={130} />
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <div className="quick-left">
          <h3>Quick Link</h3>
          <ul>
            <li><Link href="/User/Contact" className="text">Contact Us</Link></li>
            <li>Careers</li>
            <li>Feedback/Grievance</li>
            <li>Privacy Policy</li>
    
            <li>Disclaimer</li>
          </ul>
        </div>

        <div className="quick-right">
          <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081793/oip1_cvtjud.png"   />
          <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081793/oip6_wy6sig.png" width={100} height={300}/>

          <div className="social">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="footer-bottom">
        <div className="left">
          <p>© Content owned, updated and maintained by the <b>GMRCL</b>.</p>
          <p>
            This website belongs to{" "}
            <a href="#">Gujarat Metro Rail Corporation (GMRC) Limited</a>
          </p>
          <p>Platform is designed, developed and hosted by <b>GMRCL</b></p>
        </div>

        <div className="right">
          <p>
            Visit Count : <span className="box">221950</span>
          </p>
          <p>
            Last Updated on :
            <span className="box">24-Dec-2025 @ 12:56 PM</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
