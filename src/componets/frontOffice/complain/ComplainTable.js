import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function ComplainTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Complain</th>
            <th>Complain Type</th>
            <th> Source</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>239</td>

            <td>Food quality</td>
            <td>Online Advertising</td>
            <td>Amelia</td>
            <td>89067864</td>
            <td> 07/31/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/Complain/details"
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
                    to="/admin/Visitors/Complain/AddComplain"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>238</td>

            <td> Hospital services</td>
            <td>From visitors</td>
            <td>Allen</td>
            <td>789078574</td>
            <td>07/25/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/Complain/details"
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
                    to="/admin/Visitors/Complain/AddComplain"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>239</td>

            <td>Food quality</td>
            <td>Online Advertising</td>
            <td>Amelia</td>
            <td>89067864</td>
            <td> 07/31/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/Complain/details"
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
                    to="/admin/Visitors/Complain/AddComplain"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>239</td>

            <td>Food quality</td>
            <td>Online Advertising</td>
            <td>Amelia</td>
            <td>89067864</td>
            <td> 07/31/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/Complain/details"
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
                    to="/admin/Visitors/Complain/AddComplain"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <BsFillPencilFill />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>239</td>

            <td>Food quality</td>
            <td>Online Advertising</td>
            <td>Amelia</td>
            <td>89067864</td>
            <td> 07/31/2024</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Visitors/Complain/details"
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
                    to="/admin/Visitors/Complain/AddComplain"
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

export default ComplainTable;
