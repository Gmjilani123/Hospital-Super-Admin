import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ComplainTypeTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Complain Type </th>
            <th>Description</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Food quality</td>
            <td>
              A reference to a set of rules that were followed when the resource
              was constructed, and which must be understood when processing the
              content. Often, this is a reference to an implementation guide
              that defines the special rules along with other profiles etc.
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
            <td>Hospital services</td>
            <td></td>

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
            <td>Long Wait Times</td>
            <td>Long Wait </td>

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
            <td>Seminar</td>
            <td>
              A seminar may be defined as a gathering of people for the purpose
              of discussing a stated topic. Such gatherings are usually
              interactive sessions where the participants engage in discussions
              about the delineated topic.
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

export default ComplainTypeTable;
