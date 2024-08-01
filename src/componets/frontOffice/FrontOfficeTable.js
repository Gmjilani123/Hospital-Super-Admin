import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function FrontOfficeTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Purpose</th>
            <th>Name</th>
            <th> Visit To</th>
            <th>IPD/OPD/Staff</th>
            <th>Phone</th>
            <th> Date</th>
            <th> In Time</th>
            <th>Out Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seminar</td>
            <td>Arun Sinha </td>
            <td>Staff</td>
            <td>April Clinton (9020)</td>
            <td>7887956754</td>
            <td> 06/30/2024</td>
            <td>02:47 PM</td>
            <td>03:47 PM</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/visitorDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
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
            <td>Seminar</td>
            <td>Arun Sinha </td>
            <td>Staff</td>
            <td>April Clinton (9020)</td>
            <td>7887956754</td>
            <td> 06/30/2024</td>
            <td>02:47 PM</td>
            <td>03:47 PM</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/visitorDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
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
            <td>Seminar</td>
            <td>Arun Sinha </td>
            <td>Staff</td>
            <td>April Clinton (9020)</td>
            <td>7887956754</td>
            <td> 06/30/2024</td>
            <td>02:47 PM</td>
            <td>03:47 PM</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/visitorDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
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
            <td>Seminar</td>
            <td>Arun Sinha </td>
            <td>Staff</td>
            <td>April Clinton (9020)</td>
            <td>7887956754</td>
            <td> 06/30/2024</td>
            <td>02:47 PM</td>
            <td>03:47 PM</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/visitorDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
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
            <td>Seminar</td>
            <td>Arun Sinha </td>
            <td>Staff</td>
            <td>April Clinton (9020)</td>
            <td>7887956754</td>
            <td> 06/30/2024</td>
            <td>02:47 PM</td>
            <td>03:47 PM</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/visitorDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
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

export default FrontOfficeTable;
