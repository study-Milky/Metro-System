"use client"
import BoardOfDirectors from "@/app/Components/Board-direct";
import GujaratDirectors from "@/app/Components/Board-manager";



export default function BoardBanner() {
  return (
    <div>
    <section className="board-banner">
      <img
        src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081740/BOD2_nfqpgg.png"
        alt="Board of Directors"
       
        className="banner-img"
      />

      <div className="banner-overlay"></div>

      <h1 className="banner-title">
        PRESENT BOARD OF DIRECTORS
      </h1>
    </section>
     <BoardOfDirectors/>
     <GujaratDirectors/>
    
    </div>
    
    
    
    
  );
}
