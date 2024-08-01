import React from "react";
import ExportFile from "../../../common/exportFile/ExportFile";
import RadiologyTestTable from "./RadiologyTestTable";

function RadiologyTest() {
  return (
    <div className="content_wrapper_main">
      <div className="card">
        <div className="dataTables_wrapper ">
          <div className="row_wrapper">
            <div className="row">
              <div className="col-md-4 ">
                <h4>Radiology Test</h4>
              </div>
            </div>
          </div>
          <div className="row me-2">
            <div className="col-md-4">
              <div className="me-3">
                <div className="dataTables_length d-flex">
                  <label>
                    <select className="form-select">
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
          <RadiologyTestTable />
        </div>
      </div>
    </div>
  );
}

export default RadiologyTest;
