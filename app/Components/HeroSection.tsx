"use client"

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081780/m1_filpj5.jpg"
        alt="Metro Background"
        
        className="bgImage"
      />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        {/* LEFT */}
        <div className="left">
          <h1>
            GUJARAT <br />
            METRO RAIL <br />
            CORPORATION
          </h1>

          <p>
            Gujarat Metro Rail Corporation Limited (GMRC) was established on
            <strong> 04th February, 2010 </strong>
            as a <strong>Special Purpose Vehicle (SPV)</strong> by Government of
            Gujarat for implementation of Metro Rail Projects in Gujarat.
          </p>

          <p>
            The company was restructured with effect from 20th March 2015 and has
            been converted as a
            <strong>
              {" "}
              50:50 SPV of Government of India and Government of Gujarat.
            </strong>
          </p>

         <Link href="/User/technologi">
         <button className="readBtn">Read More →</button>
         </Link>
        </div>

        {/* RIGHT */}
        
      </div>
    </section>
  );
}
