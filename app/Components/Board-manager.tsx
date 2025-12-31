"use client"

export default function GujaratDirectors() {
  return (
    <div>
    <section className="board-section">
      <p className="board-subtitle">Nominated By Government of Gujarat</p>
      <div className="orange-line"></div>

      {/* Row 1 */}
      <div className="board-grid">
        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081775/img4_mmb7mo.jpg"
          name="Smt. Sunaina Tomar, IAS"
          role="Director"
          desc={[
            "Additional Chief Secretary",
            "Social Justice & Empowerment Department",
            "Government of Gujarat",
          ]}
        />

        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081775/img5_xuji3e.jpg"
          name="Dr. Thiruvenkadam Natarajan, IAS"
          role="Director"
          desc={[
            "Principal Secretary",
            "Finance Department",
            "Government of Gujarat",
          ]}
        />

        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081777/img5_oodrbn.png"
          name="Shri M. Thennarasan, IAS"
          role="Director"
          desc={[
            "Principal Secretary",
            "Urban Development & Urban Housing Department",
            "Government of Gujarat",
          ]}
        />
      </div>

      {/* Row 2 */}
      <div className="board-grid">
        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081777/img6_uuehd3.webp"
          name="Smt. Avantika Singh Aulakh, IAS"
          role="Director"
          desc={[
            "Secretary to Hon’ble Chief Minister",
            "Government of Gujarat",
          ]}
        />

        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081772/img2_ixwuha.jpg"
          name="Shri S. S. Rathore"
          role="Managing Director"
          desc={[]}
        />

        <DirectorCard
          img="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081776/img7_c7etpj.jpg"
          name="Shri Sanjay Gupta"
          role="Joint Managing Director"
          desc={[]}
        />
      </div>
    </section>
    <section className="board-section">
      <h2 className="functional-title">Functional Directors</h2>
      <div className="orange-line"></div>

      <div className="functional-center">
        <div className="director-card">
          <img
            src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081778/img23_ui83rx.jpg"
            alt="Shri Anand Singh Bisht"
            width={260}
            height={320}
          />
          <h3>Shri Anand Singh Bisht</h3>
          <h4>Director (Project & Planning)</h4>
        </div>
      </div>
    </section>
    </div>
    
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
