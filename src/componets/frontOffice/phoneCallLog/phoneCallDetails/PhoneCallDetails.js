import React from "react";
import { Link } from "react-router-dom";

function PhoneCallDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Phone Call Log Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors/PhoneCallLog" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body" id="getdetails">
          <div className="table-responsive">
            <table className="table table-striped bordergray">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Darwin</td>
                  <th>Phone</th>
                  <td> 80890567</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>07/30/2024</td>
                  <th>Next Follow Up Date</th>
                  <td>07/31/2024</td>
                </tr>
                <tr>
                  <th>Call Duration</th>
                  <td>40</td>
                  <th>Call Type</th>
                  <td>Incoming</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td />
                  <th>Note</th>
                  <td />
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

export default PhoneCallDetails;
