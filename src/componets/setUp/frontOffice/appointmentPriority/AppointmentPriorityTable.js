import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function AppointmentPriorityTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Priority</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">Normal</a>
            </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="#"
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
              <a href="#">Urgent</a>
            </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="#"
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
              <a href="#">Very Urgent</a>
            </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="#"
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
              <a href="#"> Low</a>
            </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="#"
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

export default AppointmentPriorityTable;
