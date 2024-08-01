import React from "react";
import { FaSearch } from "react-icons/fa";

function OfflinePayment() {
  return (
    <form className="row">
      <div className="d-flex">
        <div className="form-group col-4">
          <label htmlFor="class">Class:</label>
          <select className="form-control" id="template">
            <option>Select Class</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>

        <div className="form-group col-4">
          <label htmlFor="section">Section:</label>
          <select className="form-control" id="template">
            <option>Select Section</option>
            <option>Section 1</option>
            <option>Section 2</option>
            <option>Section 3</option>
          </select>
        </div>

        <div className="form-group col-4">
          <div className="form-group col-12">
            <label htmlFor="section">Student:</label>
            <select className="form-control" id="template">
              <option>Select Section</option>
              <option>Section 1</option>
              <option>Section 2</option>
              <option>Section 3</option>
            </select>
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

export default OfflinePayment;
