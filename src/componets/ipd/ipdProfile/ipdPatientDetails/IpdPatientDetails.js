import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

function IpdPatientDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>IPD Patient Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <Link
              to="/admin/IPD-Patient/IPD-patient-Profile"
              className="back_btn"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0 pb0">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="table-responsive">
                <table className="">
                  <tbody>
                    <tr>
                      <th width="15%">Patient Name</th>
                      <td width="35%">
                        <span id="opd_no">AKA HOLAN (1084)</span>
                      </td>
                      <th width="15%">Guardian Name</th>
                      <td width="35%">
                        <span id="opd_no">Dinesh HOLAN</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Gender</th>
                      <td width="35%">
                        <span id="opd_no">Male</span>
                      </td>
                      <th width="15%">Marital Status</th>
                      <td width="35%">
                        <span id="patient_name">Single</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Phone</th>
                      <td width="35%">
                        <span id="old_patient">94564651414</span>
                      </td>
                      <th width="15%"> Email</th>
                      <td width="35%">
                        <span id="guardian_name"> holan25@gmail.com</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Address</th>
                      <td width="35%">
                        <span id="gen"> CA.West</span>
                      </td>
                      <th width="15%"> Age</th>
                      <td width="35%">
                        <span id="marital_status">25 Year 20 Days</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Blood Group</th>
                      <td width="35%">
                        <span id="contact">AB-</span>
                      </td>
                      <th width="15%">Height</th>
                      <td width="35%">
                        <span id="email" style={{ textTransform: "none" }}>
                          5'6 Inch
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Weight</th>
                      <td width="35%">
                        <span id="patient_address">65kg</span>
                      </td>
                      <th width="15%">Temperature</th>
                      <td width="35%">
                        <span id="age">94</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Respiration</th>
                      <td width="35%">
                        <span id="blood_group">16</span>
                      </td>
                      <th width="15%">Pulse</th>
                      <td width="35%">
                        <span id="height">75</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">BP</th>
                      <td width="35%">
                        <span id="weight">120</span>
                      </td>
                      <th width="15%">Symptoms</th>
                      <td width="35%">
                        <span id="patient_bp" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Known Allergies</th>
                      <td width="35%">
                        <span id="pulse">Sea Food</span>
                      </td>
                      <th width="15%">Admission Date</th>
                      <td width="35%">
                        <span id="temperature">06/15/2024 02:51 PM</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Case</th>
                      <td width="35%">
                        <span id="respiration" style={{}} />
                      </td>
                      <th width="15%"> Old Patient</th>
                      <td width="35%">
                        <span id="known_allergies" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%"> Casualty</th>
                      <td width="35%">
                        <span id="appointment_date">Yes</span>
                      </td>
                      <th width="15%">Reference</th>
                      <td width="35%">
                        <span id="case" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">TPA</th>
                      <td width="35%">
                        <span id="casualty">Health Life Insurance</span>
                      </td>
                      <th width="15%">Bed Group</th>
                      <td width="35%">
                        <span id="refference">Ac (Normal)-1st Floor</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Consultant Doctor</th>
                      <td width="35%">
                        <span id="organisation">Amit Singh (9009)</span>
                      </td>
                      <th width="15%">Bed Number</th>
                      <td width="35%">
                        <span id="doc">FF - 117</span>
                      </td>
                    </tr>

                    <tr>
                      <th width="15%">Previous Medical Issue</th>
                      <td colSpan={3} />
                    </tr>
                    {/* <tr>
              <th width="15%">Collected By</th>
              <td width="35%"><span id='collected_by'></span></td>
          </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IpdPatientDetails;
