"use client";




export default function Technology() {
  return (
    <section className="tech-page">
      <h2>Technology</h2>
      <div className="underline"></div>

      {/* Construction Technology */}
      <h3>Construction Technology</h3>
      <ul>
        <li>
          Elevated viaduct consisting of pre-stressed concrete “Box” shaped
          girders on single pier with pile/open foundations requiring very less
          road occupancy.
        </li>
        <li>
          Metro stations constructed with state-of-the-art precast pre-stressed
          concrete technology improving speed & quality.
        </li>
        <li>
          Underground tunnelling by TBM using EPBM technology and NATM method.
        </li>
      </ul>

      <div className="media">
        <video controls>
          <source src="https://res.cloudinary.com/dmuaxsqy9/video/upload/v1767082755/video1_gvqru1.mp4" type="video/mp4" />
        </video>
        <p className="caption">Tunnel Boring Machine</p>
      </div>

      {/* Viaduct & Station */}
      <h3>Stages of Viaduct Construction & Station Construction</h3>

      <div className="video-grid">
        <div>
          <video controls>
            <source src="https://res.cloudinary.com/dmuaxsqy9/video/upload/v1767082937/video_ivaitt.mp4" type="video/mp4" />
          </video>
          <p className="caption">Stages of Viaduct Construction</p>
        </div>

        <div>
          <video controls>
            <source src="https://res.cloudinary.com/dmuaxsqy9/video/upload/v1767082755/video1_gvqru1.mp4" type="video/mp4" />
          </video>
          <p className="caption">Stages of Station Construction</p>
        </div>
      </div>

      {/* Signalling */}
      <h3>Signalling & Train Control</h3>

      <div className="two-col">
        <p>
          CATC based on CBTC system including ATP, ATO and ATS subsystems using
          radio communication between trackside and train. Train operations are
          planned to be driverless.
        </p>

        <div>
          <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081805/tech1_lzlot8.jpg" alt="OCC" width={420} height={260} />
          
        </div>
      </div>

      {/* Telecom */}
      <h3>Telecommunication and Fare Collection</h3>

      <div className="two-col">
        <ul>
          <li>Integrated fibre optic cable, SCADA, Train Radio, PA System</li>
          <li>Train information system & centralized clock</li>
          <li>Automatic fare collection with POM & Smart Card</li>
        </ul>

        <div>
          <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081805/tech2_bxbrcc.jpg" alt="AFC" width={420} height={260} />
          
        </div>
      </div>

      {/* Operations */}
      <h3>Technology in Operations</h3>

      <ul>
        <li>CBTC signalling enabling 90 seconds train frequency</li>
        <li>GoA Level-3 rolling stock with regenerative braking</li>
        <li>Open loop payment system for fare collection</li>
        <li>Solar power generation installed</li>
        <li>CCTV with video analytics</li>
        <li>In-house data integration system</li>
      </ul>

      <div className="img-grid">
        <div>
          <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081807/tech3_de2fqx.jpg" alt="CCTV" width={360} height={250} />
          <p className="caption">CCTV Surveillance</p>
        </div>

        <div>
          <img src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081808/tech4_zajlsb.jpg" alt="PSD" width={360} height={250} />
          <p className="caption">Platform Screen Door (PSD)</p>
        </div>
      </div>
    </section>
  );
}
