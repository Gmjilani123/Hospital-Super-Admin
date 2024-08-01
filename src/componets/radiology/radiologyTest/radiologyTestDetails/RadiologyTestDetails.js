import React from "react";
import Print from "../../../../common/print/Print";
import { Link } from "react-router-dom";

function RadiologyTestDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Radiology Test Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link to="/admin/Radiology/RadiologyTest" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Test Name: </strong> Resting 12-lead EKG
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Short Name: </strong>RLE
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Test Type: </strong>RLE
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Sub Category: </strong>RLE / lead EKG
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Report Days: </strong>1
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Category Name : </strong>X-RAY LUMBOSACRAL SPINE AP AND
                LAT VIEWS
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Category Name: </strong>X-RAY LUMBOSACRAL SPINE AP AND
                LAT VIEWS
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Charge Category: </strong>CAD-AI Research Laboratory.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Tax Category: </strong>Radiology Tax
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Tax (%) : </strong>20.00
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Charge Category: </strong>Radiology Charges{"{"}" "
                {"}"}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Standard Charge: </strong>$160.00
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Amount: </strong>$192.00
              </p>
            </div>
          </div>
          <div className="table-responsive mt10 ml-mius-5">
            <table className="table table-striped table-bordered table-hover mb10">
              <thead>
                <tr>
                  <th>Parameter Name</th>
                  <th>Reference Range</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ultrasound</td>
                  <td> &lt;7 mm</td>
                  <td>KHz</td>
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

export default RadiologyTestDetails;
