import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function PostalDispatchTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>To Title</th>
            <th>Form Title</th>
            <th>Reference No</th>

            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Room Cleaning Service</td>
            <td>Room Cleaning Service</td>
            <td>435222</td>

            <td>07/31/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PostalRecieve/PostalReceiveDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
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
                <div className="tool_show_parent">
                  <Link
                   to="/admin/Visitors/PostalDispatch/EditDispatch"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Medicine Service</td>
            <td>Medicine Service</td>

            <td>4322</td>

            <td>07/24/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PostalRecieve/PostalReceiveDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
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
                <div className="tool_show_parent">
                  <Link
                   to="/admin/Visitors/PostalDispatch/EditDispatch"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>CT SCAN Lab</td>
            <td>CT SCAN Lab</td>
            <td>222</td>
            <td>07/31/2024</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PostalRecieve/PostalReceiveDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
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
                <div className="tool_show_parent">
                  <Link
                   to="/admin/Visitors/PostalDispatch/EditDispatch"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>X-ray viewer(single screen)</td>
            <td>X-ray viewer(single screen)</td>
            <td>97872</td>
            <td>07/31/2024</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PostalRecieve/PostalReceiveDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
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
                <div className="tool_show_parent">
                  <Link
                   to="/admin/Visitors/PostalDispatch/EditDispatch"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Room Cleaning Service</td>
            <td>Room Cleaning Service</td>
            <td>435222</td>

            <td>07/31/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PostalRecieve/PostalReceiveDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
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
                <div className="tool_show_parent">
                  <Link
                   to="/admin/Visitors/PostalDispatch/EditDispatch"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>X-ray viewer(single screen)</td>
            <td>X-ray viewer(single screen)</td>
            <td>97872</td>
            <td>07/31/2024</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/PostalRecieve/PostalReceiveDetails"
                    className="btn btn-primary bg-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
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
                <div className="tool_show_parent">
                  <Link
                   to="/admin/Visitors/PostalDispatch/EditDispatch"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
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

export default PostalDispatchTable;
