import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AmbulanceListTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Vehicle No</th>
            <th> Vehicle Model</th>

            <th>Year Mode</th>
            <th>Driver Name</th>
            <th>Driver License</th>

            <th>Driver Contact</th>

            <th>Note</th>

            <th>Vehicle Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MP20DDHK2562</td>
            <td>BS4FGD</td>
            <td>2019</td>
            <td>David Wood</td>
            <td>MLKK0099820</td>
            <td>9806545404</td>
            <td> </td>
            <td>Owned </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Ambulance/Payment"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <FaPencil />
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
            <td>MP20DFG56</td>
            <td>BS440</td>
            <td>2018</td>
            <td>MKLKL-569079</td>
            <td>MKLKL-569079 </td>
            <td>9806545404</td>
            <td> </td>
            <td>Contractual </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Ambulance/Payment"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <FaPencil />
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
            <td>MP20DDHK2562</td>
            <td>BS4FGD</td>
            <td>2019</td>
            <td>David Wood</td>
            <td>MLKK0099820</td>
            <td>9806545404</td>
            <td> </td>
            <td>Owned </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Ambulance/Payment"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <FaPencil />
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
            <td>MP20DDHK2562</td>
            <td>BS4FGD</td>
            <td>2019</td>
            <td>David Wood</td>
            <td>MLKK0099820</td>
            <td>9806545404</td>
            <td> </td>
            <td>Owned </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Ambulance/Payment"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <FaPencil />
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

export default AmbulanceListTable;
