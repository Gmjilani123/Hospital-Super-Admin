import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

function VisitDetail() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Visit Detail</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <Link
              to="/admin/Bill/OPD-bill/patient-profile-1081"
              className="back_btn"
            >
              Back
            </Link>
            <div className="ml-2">
              <Link
                to="/admin/Bill/OPD-bill/patient-profile-1081/detail/Edit"
                className="btn btn-secondary btn-icon btn-circle btn-sm"
              >
                <EditIcon />
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
              >
                <DeleteIcon />
              </button>
            </div>
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
                      <th width="15%">OPD Checkup ID</th>
                      <td width="35%">
                        <span id="opd_no">CHKID6299</span>
                      </td>
                      <th width="15%">OPD ID</th>
                      <td width="35%">
                        <span id="opd_no">OPDN6296</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Case ID</th>
                      <td width="35%">
                        <span id="opd_no">6320</span>
                      </td>
                      <th width="15%">Patient Name</th>
                      <td width="35%">
                        <span id="patient_name">Stuart Wood (580)</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Old Patient</th>
                      <td width="35%">
                        <span id="old_patient" />
                      </td>
                      <th width="15%">Guardian Name</th>
                      <td width="35%">
                        <span id="guardian_name">Martin Wood</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Gender</th>
                      <td width="35%">
                        <span id="gen">Male</span>
                      </td>
                      <th width="15%">Marital Status</th>
                      <td width="35%">
                        <span id="marital_status" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Phone</th>
                      <td width="35%">
                        <span id="contact">87969078</span>
                      </td>
                      <th width="15%">Email</th>
                      <td width="35%">
                        <span id="email" style={{ textTransform: "none" }} />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Address</th>
                      <td width="35%">
                        <span id="patient_address" />
                      </td>
                      <th width="15%">Age</th>
                      <td width="35%">
                        <span id="age">13 Year 10 Month 7 Days</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Blood Group</th>
                      <td width="35%">
                        <span id="blood_group">B+</span>
                      </td>
                      <th width="15%">Height</th>
                      <td width="35%">
                        <span id="height" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Weight</th>
                      <td width="35%">
                        <span id="weight" />
                      </td>
                      <th width="15%">BP</th>
                      <td width="35%">
                        <span id="patient_bp" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Pulse</th>
                      <td width="35%">
                        <span id="pulse" />
                      </td>
                      <th width="15%">Temperature</th>
                      <td width="35%">
                        <span id="temperature" style={{}} />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Respiration</th>
                      <td width="35%">
                        <span id="respiration" style={{}} />
                      </td>
                      <th width="15%">Known Allergies</th>
                      <td width="35%">
                        <span id="known_allergies" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Appointment Date</th>
                      <td width="35%">
                        <span id="appointment_date">06/30/2024 02:51 PM</span>
                      </td>
                      <th width="15%">Case</th>
                      <td width="35%">
                        <span id="case" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Casualty</th>
                      <td width="35%">
                        <span id="casualty" />
                      </td>
                      <th width="15%">Reference</th>
                      <td width="35%">
                        <span id="refference" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">TPA</th>
                      <td width="35%">
                        <span id="organisation" />
                      </td>
                      <th width="15%">Consultant Doctor</th>
                      <td width="35%">
                        <span id="doc">Amit Singh (9009)</span>
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Note</th>
                      <td colSpan={3}>
                        <span id="note" />
                      </td>
                    </tr>
                    <tr>
                      <th width="15%">Symptoms</th>
                      <td colSpan={3}>
                        <span id="symptoms" />
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

export default VisitDetail;
