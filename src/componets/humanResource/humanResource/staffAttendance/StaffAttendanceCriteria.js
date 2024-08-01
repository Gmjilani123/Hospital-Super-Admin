import React from "react";
import { FaSearch } from "react-icons/fa";

function StaffAttendanceCriteria() {
  return (
    <form className="row">
      <h5>Select Criteria</h5>
      <div className="d-flex">
        <div className="form-group col-6">
          <label htmlFor="class">Role</label>
          <select className="form-control" id="template">
            <option>Select Class</option>
            <option>Admin</option>
            <option>Teacher</option>
            <option>Accountant</option>
            <option>Librarian</option>
          </select>
        </div>

        <div className="form-group col-6">
          <div className="form-group col-12">
            <label htmlFor="section">Attendance Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-sm-12" style={{ textAlign: "end" }}>
            <button
              type="button"
              className="btn btn-primary btn_search btn-sm ms-1"
            >
              <FaSearch className="me-1" />
              Search..
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default StaffAttendanceCriteria;
