import React from "react";
import { Link } from "react-router-dom";

function PatientProfilePrescription() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Prescription</h4>
        </div>
        <div>
          <Link to="/admin/OPD/PatientProfile " className="back_btn">
            Back
          </Link>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="hospital_details">
          <div style={{ width: "70%" }}>
            <div>
              <img
                src="https://www.abarissoftech.com/assets/img/logo-2.png"
                alt=""
                className="school_logo"
              />
            </div>

            <div className="mt-2">
              <h3>Hospital Name & Research Center</h3>
            </div>
          </div>
          <div className="Address_details_container">
            <h3>full Address Details Here</h3>
          </div>
        </div>
        <div className="opd_des">
          <h5 className="text-white py-1">OPD-Description</h5>
        </div>
        <div className>
          <table width="100%" className="printablea4">
            <tbody>
              <tr>
                <td>
                  <b>OPD No: OPDN6296</b>
                </td>
                <td />
                <th className="text-right" />{" "}
                <th className="text-right">Date : 06/25/2024</th>
              </tr>
              <tr>
                <td>
                  <b>OPD Checkup ID: CHKID6299</b>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
          <hr
            style={{
              height: 1,
              clear: "both",
              marginBottom: 10,
              marginTop: 10,
            }}
          />
          <table width="100%" className="printablea4">
            <tbody>
              <tr>
                <th width="10%">Patient Name</th>
                <td width="10%">Stuart Wood (580)</td>
                <th width="10%">Weight</th>
                <td width="10%" />
                <th width="10%">BP</th>
                <td width="10%" />
              </tr>
              <tr>
                <th width="10%">Age</th>
                <td>13 Year 10 Month 7 Days </td>
                <th width="10%">Gender</th>
                <td>Male</td>
                <th width="10%">Height</th>
                <td width="10%" />
              </tr>
              <tr>
                <th width="10%">Consultant Doctor</th>
                <td width="10%">Amit Singh (9009)</td>
                <th width="10%">Address</th>
                <td width="10%" />
                <th width="10%">Blood Group</th>
                <td width="10%">B+</td>
              </tr>
              <tr>
                <th width="10%">Known Allergies</th>
                <td width="10%" />
                <th width="10%">Pulse</th>
                <td width="10%" />
                <th width="10%">Temperature</th>
                <td width="10%" />
              </tr>
            </tbody>
          </table>
          <hr
            style={{
              height: 1,
              clear: "both",
              marginBottom: 10,
              marginTop: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PatientProfilePrescription;
