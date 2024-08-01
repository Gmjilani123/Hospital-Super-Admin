import React from "react";
import { FaSearch } from "react-icons/fa";

function StaffDirectoryCriteria() {
  return (
    <form className="row form_ro">
      <div className="d-flex">
        <div className="form-group col-6">
          <div className="form-group ">
            <label htmlFor="class">Role:</label>
            <select className="form-control" id="template">
              <option>Select </option>
              <option>Admin</option>
              <option>Teacher </option>
              <option> Account</option>
            </select>
          </div>
          <div className="col-sm-12 col-12" style={{ textAlign: "end" }}>
            <button
              type="button"
              className="btn btn-primary btn_search btn-sm ms-1"
            >
              <FaSearch className="me-1" />
              Search..
            </button>
          </div>
        </div>

        <div className="form-group col-6">
          <div className="form-group ">
            <label htmlFor="section"> Search By Keyword :</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-12 col-12" style={{ textAlign: "end" }}>
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

export default StaffDirectoryCriteria;
