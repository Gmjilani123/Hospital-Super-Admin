import React from "react";
import ExportFile from "../../../../common/exportFile/ExportFile";
import ShiftTable from "./ShiftTable";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";

function Shift() {
  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper">
        <div className="row">
          <div className="col">
            <h4> Shift</h4>
          </div>
          <div className="col">
            <div className="d-flex align-item-center justify-content-end">
              <Link
                className="btn btn-secondary add-new btn-primary ml-2"
                to={"/admin/setupAppointment/AddShift"}
              >
                <span>
                  <GoPlus className="fs-4 me-1" />
                  <span className="d-none d-sm-inline-block">Add Shift</span>
                </span>
              </Link>
            </div>
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
      <ShiftTable />
    </div>
  );
}

export default Shift;
