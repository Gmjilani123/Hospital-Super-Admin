import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function PurposeTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Purpose </th>
            <th>Description</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Visit</td>
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
            <td>Inquiry</td>
            <td>
              Inquiry is an approach to learning that involves a process of
              exploring the natural or material world, and that leads to asking
              questions, making discoveries, and testing those discoveries in
              the search for new understanding.
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

export default PurposeTable;
