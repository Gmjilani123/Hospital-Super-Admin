import { FaSearch } from "react-icons/fa";
import React from "react";

function StudentCourseReport() {
  return (
    <div>
      <h5>Student Course Purchase Report</h5>
      <form className="row">
        <div className="d-flex">
          <div className="form-group col-3">
            <label htmlFor="class">Search Type:</label>
            <select className="form-control" id="template">
              <option>Select </option>
              <option>Today</option>
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>

          <div className="form-group col-3">
            <label htmlFor="section">Payment Type:</label>
            <select className="form-control" id="template">
              <option>All </option>
              <option>Online</option>
              <option>Offlien</option>
            </select>
          </div>

          <div className="form-group col-3">
            <label htmlFor="section">Payment Status:</label>
            <select className="form-control" id="template">
              <option>Success </option>
              <option>Processing..</option>
            </select>
          </div>

          <div className="form-group col-3">
            <div className="form-group col-12">
              <label htmlFor="section">User Type :</label>
              <select className="form-control" id="template">
                <option>All</option>
                <option>Student</option>
                <option>Guest</option>
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

      <div className="card">
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead className="border-top">
            <tr>
              <th>Student / Guest </th>
              <th>Date</th>
              <th>Course</th>

              <th>Course Provider</th>
              <th> Payment Type </th>
              <th>Payment Method</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seven</td>
              <td>A</td>
              <td>RSM-00007 </td>

              <td>Aiden</td>
              <td>Aiden Loxton</td>
              <td>17/05/1989</td>
              <td>8892345667</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>A</td>
              <td>RSM-00007 </td>

              <td>Aiden</td>
              <td>Aiden Loxton</td>
              <td>17/05/1989</td>
              <td>8892345667</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>A</td>
              <td>RSM-00007 </td>

              <td>Aiden</td>
              <td>Aiden Loxton</td>
              <td>17/05/1989</td>
              <td>8892345667</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentCourseReport;
