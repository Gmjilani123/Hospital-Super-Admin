import React from "react";
import ExportFile from "../../../common/exportFile/ExportFile";
import DischagedPatientTable from "./DischagedPatientTable";

function DischargedPatient() {
  return (
    <div className="content_wrapper_main">
      <div className="card">
        <div className="dataTables_wrapper ">
          <div className="row_wrapper">
            <div className="row">
              <div className="col">
                <h4>IPD Discharged Patient list</h4>
              </div>
            </div>
          </div>
          <div className="row me-2">
            <div className="col-md-4">
              <div className="me-3">
                <div className="dataTables_length d-flex">
                  <input
                    type="text"
                    className="form-control ml-3"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="mt-3" style={{ textAlign: "end" }}>
                <ExportFile />
              </div>
            </div>
          </div>
          <DischagedPatientTable />
        </div>
      </div>
    </div>
  );
}

export default DischargedPatient;
