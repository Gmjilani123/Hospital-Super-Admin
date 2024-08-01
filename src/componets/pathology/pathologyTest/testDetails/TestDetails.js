import React from "react";
import Print from "../../../../common/print/Print";
import { Link } from "react-router-dom";

function TestDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Pathology Test Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link
              to="/admin/PathologyBill-List/PathologyTest"
              className="back_btn"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body ptt10 pb0">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Test Name : </strong> Appendicitis
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Short Name : </strong>Appendicitis
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Test Type : </strong>Appendicitis
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Sub Category : </strong>Appendicitis
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Report Days : </strong>2
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Method : </strong>open appendectomy
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Category Name : </strong>Hematology
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Charge Name : </strong>Surgical Pathology{"{"}" "{"}"}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Charge Category : </strong>9
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Standard Charge : </strong>$150.00
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Tax Category : </strong>Pathology Tax
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Tax (%) : </strong>30.00
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong> Charge Category : </strong>Surgical pathology
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong> Amount : </strong>$195.00
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                <strong>Charge Category Details : </strong>
              </p>
            </div>
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default TestDetails;
