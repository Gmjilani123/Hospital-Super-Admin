import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

function CourseRatingReportDetails() {
  return (
    <div
      className="card"
      style={{ padding: "10px", margin: "20px 10px 20px 40px" }}
    >
      <h5>Online Course Report Details</h5>

      <div className="card">
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead className="border-top">
            <tr>
              <th>Student Name </th>

              <th>Rating</th>
              <th>Review </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sapna (Guest - Guest147)</td>

              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>
              <td>Amazing Course</td>

              <td></td>
            </tr>
            <tr>
              <td>sapna (Guest - Guest147)</td>

              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>
              <td>Amazing Course</td>

              <td></td>
            </tr>
            <tr>
              <td>sapna (Guest - Guest147)</td>

              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>
              <td>Amazing Course</td>

              <td></td>
            </tr>
            <tr>
              <td>sapna (Guest - Guest147)</td>

              <td>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStarHalf />
                </span>
              </td>
              <td>Amazing Course</td>

              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseRatingReportDetails;
