import React from "react";
import { Link } from "react-router-dom";

function ComplainDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Complain Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors/Complain" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body" id="getdetails">
          <div className="table-responsive">
            <table className="table table-striped bordergray mb0">
              <tbody>
                <tr>
                  <th>Complain #</th>
                  <td>239</td>
                  <th>Complain Type</th>
                  <td>Food quality</td>
                </tr>
                <tr>
                  <th>Source</th>
                  <td>Online Advertising</td>
                  <th>Name</th>
                  <td>Amelia </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>89067864</td>
                  <th>Date</th>
                  <td>07/31/2024</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td />
                  <th>Action Taken</th>
                  <td />
                </tr>
                <tr>
                  <th>Assigned</th>
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

export default ComplainDetails;
