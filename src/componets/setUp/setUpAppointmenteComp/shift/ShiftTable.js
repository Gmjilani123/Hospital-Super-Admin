import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShiftTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th> Time From</th>
            <th> Time To</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">Morning</a>
            </td>
            <td>06:00 AM</td>
            <td>09:30 AM</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                  >
                    <AiOutlineDelete />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#">Evening</a>
            </td>
            <td>04:00 PM</td>
            <td>07:00 PM</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Visitors/EditVisitor"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
                <div className="tool_show_parent">
                  <Link
                    to="/admin/OPD/PatientProfile/MovePatient-To-IPD"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
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

export default ShiftTable;
