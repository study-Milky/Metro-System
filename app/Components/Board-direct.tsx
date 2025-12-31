"use client"





export default function BoardOfDirectors() {
  return (
    <section className="board-section">
      <h2 className="board-title">PRESENT BOARD OF DIRECTORS</h2>

      <p className="board-subtitle">Nominated By Government of India</p>
      <div className="orange-line"></div>

      {/* First Row */}
      <div className="board-grid">
        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081771/img_vcb2fd.jpg"
          name="Shri Srinivas R. Katikithala, IAS"
          role="Chairman"
          desc={[
            "Secretary",
            "Ministry of Housing & Urban Affairs",
            "Government of India",
          ]}
        />

        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081773/img1_ualf9e.jpg"
          name="Shri Jaideep"
          role="Director"
          desc={[
            "OSD (UT)",
            "Ministry of Housing & Urban Affairs",
            "Government of India",
          ]}
        />

        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081777/img12_ztxdk1.jpg"
          name="Shri Sanjeet"
          role="Director"
          desc={[
            "Joint Secretary & Financial Advisor",
            "Ministry of Housing & Urban Affairs",
            "Government of India",
          ]}
        />
      </div>

      {/* Second Row */}
      <div className="board-grid left">
        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081773/img3_mgzwfa.jpg"
          name="Shri Thiruman Archunan"
          role="Director"
          desc={[
            "Director (Projects)",
            "Chennai Metro Rail Limited",
          ]}
        />
      </div>
    </section>
  );
}

function DirectorCard({
  img,
  name,
  role,
  desc,
}: {
  img: string;
  name: string;
  role: string;
  desc: string[];
}) {
  return (
    <div className="director-card">
      <img src={img} alt={name} width={220} height={260} />
      <h3>{name}</h3>
      <h4>{role}</h4>
      {desc.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
    </div>
  );
}
