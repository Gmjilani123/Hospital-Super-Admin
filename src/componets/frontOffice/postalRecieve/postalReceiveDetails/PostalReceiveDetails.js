import React from "react";
import { Link } from "react-router-dom";

function PostalReceiveDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Postal Receive Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors/PostalRecieve" className="back_btn">
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
                  <th>To Title</th>
                  <td>Medical Information </td>
                  <th>Reference No</th>
                  <td>435222</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>Government Hospital , </td>
                  <th>Note</th>
                  <td />
                </tr>
                <tr>
                  <th>From Title</th>
                  <td>Medical Information </td>
                  <th>Date</th>
                  <td>07/31/2024</td>
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

export default PostalReceiveDetails;
