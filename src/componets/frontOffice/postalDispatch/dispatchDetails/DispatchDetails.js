import React from "react";

function DispatchDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Dispatch Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors/PostalDispatch" className="back_btn">
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
                  <td>Room Cleaning Service </td>
                  <th>Reference No</th>
                  <td>3422</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>Smart Hospital , Delhi </td>
                  <th>Note</th>
                  <td />
                </tr>
                <tr>
                  <th>From Title</th>
                  <td>Room Cleaning Service </td>
                  <th>Date</th>
                  <td>07/31/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          {"{"}" "{"}"}
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default DispatchDetails;
