"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";


export default function Milestones() {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);

  // 🔵 Scroll animated blue line
  useEffect(() => {
    const onScroll = () => {
      const box = timelineRef.current;
      const fill = fillRef.current;
      if (!box || !fill) return;

      const rect = box.getBoundingClientRect();
      const height = box.offsetHeight;
      const visible = window.innerHeight - rect.top;

      let progress = visible / height;
      progress = Math.max(0, Math.min(1, progress));

      fill.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const data = [
    {
      id: "01",
      side: "left",
      title: "Ahmedabad Phase-I",
      desc: "Bhoomi Poojan of East West Corridor by Hon’ble Chief Minister",
      date: "March 14, 2015",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081787/m1_fc9q5o.jpg",
    },
    {
      id: "02",
      side: "right",
      title: "Ahmedabad Phase-I",
      desc: "Signing GEC contract with Systra S.A. led consortium",
      date: "October 5, 2015",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081784/m2_eycpay.jpg",
    },
    {
      id: "03",
      side: "left",
      title: "Ahmedabad Phase-I",
      desc: "Bhoomi Poojan of North-South Corridor",
      date: "January 17, 2016",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081786/m3_wnmzqk.jpg",
    },
    {
      id: "04",
      side: "right",
      title: "Ahmedabad Phase-I",
      desc: "Part Loan agreement signed with JICA",
      date: "March 4, 2016",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081789/m8_vgtdju.jpg",
    },
    {
      id: "05",
      side: "left",
      title: "Ahmedabad Phase-I",
      desc: "Inauguration of metro rail services from Vastral Gam to Apparel Park",
      date: "March 6, 2019",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081788/m5_qtd9ee.jpg",
    },
    {
      id: "06",
      side: "right",
      title: "Ahmedabad Phase-I",
      desc: "Completion of tunnelling from Kalupur to Gheekanta station",
      date: "July 10, 2019",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081790/m6_i7cq7d.jpg",
    },
    {
      id: "07",
      side: "left",
      title: "Ahmedabad Phase-I",
      desc: "Metro Rail Project Phase-I inaugurated & commissioned",
      date: "September 30, 2022",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081791/m7_t8faxk.jpg",
    },
    {
      id: "08",
      side: "right",
      title: "Ahmedabad Metro",
      desc: "German Minister Visit",
      date: "September 14, 2024",
      img: "https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081789/m8_vgtdju.jpg",
    },
  ];

  return (
    <section className="milestone-page">
      <h2>Milestones</h2>
      <div className="underline"></div>

      <div className="layout">
        {/* LEFT TABS */}
        <div className="tabs">
          <button className="active">Ahmedabad Phase-1</button>
          <button>Ahmedabad Phase-2</button>
          <button>Surat Phase-1</button>
        </div>

        {/* TIMELINE */}
        <div className="timeline" ref={timelineRef}>
          <div className="line-bg"></div>
          <div className="line-fill" ref={fillRef}></div>

          {data.map((m) => (
            <div key={m.id} className={`item ${m.side}`}>
              <div className="card">
                <span className="no">{m.id}</span>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>

                <div className="img-wrap">
                  <img src={m.img} alt="" width={420} height={260} />
                  <div className="img-date">{m.date}</div>
                </div>
              </div>

              <div className="date">
                <span className="dot"></span>
                {m.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
