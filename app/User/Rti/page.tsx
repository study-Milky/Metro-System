"use client";




export default function RTIPage() {
  return (
    <section className="rti-page">

      {/* Banner */}
      <div className="rti-banner">
  <h2>
    DETAILS OF PUBLIC INFORMATION OFFICER AND APPELLATE AUTHORITY
  </h2>

  <img
    src="https://res.cloudinary.com/dmuaxsqy9/image/upload/v1767081797/Rti_acmzxl.webp"
    alt="RTI"
    className="rti-stamp"
  />
</div>


      {/* Content */}
      <div className="container">
        <h1>Details of Public Information Officer and Appellate Authority</h1>
        <div className="underline"></div>

        <p className="intro">
          For transparent functioning, Competent Authority has appointed the
          following officers for providing relevant information under the
          Right to Information Act – 2005 to the public, as an Information
          Officer and Appellate Authority as below:
        </p>

        {/* Table */}
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name & Designation</th>
                <th>Role</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Shri H. N. Patel <br />
                  <span>Chief Administrative Officer</span>
                </td>
                <td>Public Information Officer</td>
                <td>
                  <a href="mailto:cao@gujaratmetrorail.com">
                    cao@gujaratmetrorail.com
                  </a>
                </td>
                <td>
                  +91-79-23248572 <br /> Ext – 514
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  Shri Jatinder Kumar Shukla <br />
                  <span>Chief General Manager (Construction/Civil)</span>
                </td>
                <td>First Appellate Authority</td>
                <td>
                  <a href="mailto:jatinder.shukla@gujaratmetrorail.com">
                    jatinder.shukla@gujaratmetrorail.com
                  </a>
                </td>
                <td>
                  +91-79-23248572 <br /> Ext – 525
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
