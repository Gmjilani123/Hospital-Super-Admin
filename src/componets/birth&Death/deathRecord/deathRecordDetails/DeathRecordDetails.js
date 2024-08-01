import React from "react";
import Print from "../../../../common/print/Print";
import { Link } from "react-router-dom";

function DeathRecordDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Death Record Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link to="/admin/BirthRecord" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0">
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th>Reference No</th>
                  <td>
                    <span id="vreference_no" />
                  </td>
                  <th />
                  <td />
                </tr>
                <tr>
                  <th>Case ID</th>
                  <td>
                    <span id="vcase_id" />
                  </td>
                  <th>Patient Name</th>
                  <td>
                    <span id="vpatient" />
                  </td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>
                    <span id="vgender" />
                  </td>
                  <th>Death Date</th>
                  <td>
                    <span id="vdeath_date" />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <span id="vaddress" />
                  </td>
                  <th>Death Report</th>
                  <td>
                    <span id="vdeath_report" />
                  </td>
                </tr>
                <tr>
                  <th>Guardian Name</th>
                  <td>
                    <span id="vguardian_name" />
                  </td>
                </tr>
                <tr id="field_data">
                  <th>
                    <span id="vcustom_name" />
                  </th>
                  <td>
                    <span id="vcustom_value" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default DeathRecordDetails;
