import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LuArrowDownToLine } from "react-icons/lu";
function DownloadTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Content Title</th>
            <th> Type</th>
            <th> Date</th>
            <th> Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td>PDF File</td>
            <td>06/30/2024</td>
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <LuArrowDownToLine />
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
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td>PDF File</td>
            <td>06/30/2024</td>
            <td>
              Hospital Services means Medically Necessary acute and sub-acute
              care inpatient and hospital outpatient services and supplies which
              are both (a) covered by a Benefit.
            </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <LuArrowDownToLine />
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
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td>PDF File</td>
            <td>06/30/2024</td>
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <LuArrowDownToLine />
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
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td>PDF File</td>
            <td>06/30/2024</td>
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <LuArrowDownToLine />
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
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td>PDF File</td>
            <td>06/30/2024</td>
            <td>Centre for Bacterial Disease and Drug Resistance</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <LuArrowDownToLine />
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

export default DownloadTable;
