import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SourceTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Source </th>
            <th>Description</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online Advertising</td>
            <td>
              Online advertising, also known as online marketing, Internet
              advertising, digital advertising or web advertising, is a form of
              marketing and advertising which uses the Internet to deliver
              promotional marketing messages to consumers.
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
            <td>From visitors </td>
            <td>
              Visitor centers used to provide fairly basic information about the
              place, corporation or event they are celebrating, acting more as
              the entry way to a place. The role of the visitor center has been
              rapidly evolving over the past 10 years to become more of an
              experience and to tell the story of the place or brand it
              represents. Many have become destinations and experiences in their
              own right.
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
            <td>Front Office </td>
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
        </tbody>
      </table>
    </div>
  );
}

export default SourceTable;
