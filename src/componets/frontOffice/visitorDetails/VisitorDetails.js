import React from "react";
import { Link } from "react-router-dom";

function VisitorDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Visitor Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body" id="getdetails">
          <div className="table-responsive">
            <table className="">
              <tbody>
                <tr>
                  <th width="15%">Purpose</th>
                  <td width="35%">Visit</td>
                  <th width="15%">Name</th>
                  <td width="35%">Archie</td>
                </tr>
                <tr>
                  <th width="15%">Phone</th>
                  <td width="35%">5418140851</td>
                  <th width="15%">Number Of Person</th>
                  <td width="35%">2</td>
                </tr>
                <tr>
                  <th width="15%">Date</th>
                  <td width="35%">05/01/2024</td>
                  <th />
                  <td />
                </tr>
                <tr>
                  <th width="15%">In Time</th>
                  <td width="35%">12:00 PM</td>
                  <th width="15%">Out Time</th>
                  <td width="35%">01:00 PM</td>
                </tr>
                <tr>
                  <th width="15%">Note</th>
                  <td width="85%" colSpan={3} />
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

export default VisitorDetails;
