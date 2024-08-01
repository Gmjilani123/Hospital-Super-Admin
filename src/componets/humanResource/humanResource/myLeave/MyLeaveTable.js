import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MyLeaveTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Staff</th>
            <th>Leave Type</th>
            <th>Leave Date</th>
            <th>Days</th>
            <th>Apply Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maria Ford (9018)</td>
            <td>Paternity Leave.</td>
            <td> 04/26/2024 - 04/30/2024</td>
            <td>5 </td>
            <td> 04/26/2024</td>
            <td>
              <span className=" btn btn-warning btn-sm ">Pending</span>
            </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="#"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="#"
                    className="btn btn-danger  btn-icon btn-circle btn-sm me-1"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Maria Ford (9018)</td>
            <td>Paternity Leave.</td>
            <td> 04/26/2024 - 04/30/2024</td>
            <td>5 </td>
            <td> 04/26/2024</td>
            <td>
              <span className=" btn btn-warning btn-sm ">Pending</span>
            </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="#"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="#"
                    className="btn btn-danger  btn-icon btn-circle btn-sm me-1"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Maria Ford (9018)</td>
            <td>Paternity Leave.</td>
            <td> 04/26/2024 - 04/30/2024</td>
            <td>5 </td>
            <td> 04/26/2024</td>
            <td>
              <span className=" btn btn-success btn-sm">Approved</span>
            </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="#"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="#"
                    className="btn btn-danger  btn-icon btn-circle btn-sm me-1"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyLeaveTable;
