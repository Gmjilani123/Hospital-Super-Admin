import React from "react";
import ExportFile from "../../../../../../../common/exportFile/ExportFile";

import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper app_heading">
        <div className="row">
          <div className="col">
            <h4>Payment</h4>
          </div>
        </div>
      </div>

      <div className="row me-2">
        <div className="col-md-4">
          <div className="me-3">
            <div className="dataTables_length d-flex">
              <label>
                <select className="form-select">
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="mt-3" style={{ textAlign: "end" }}>
            <ExportFile />
          </div>
        </div>
      </div>
      <div className="" style={{ overflow: "auto" }}>
        <table className="table py-1 px-1">
          <thead className="border-top">
            <tr>
              <th>Transition ID</th>
              <th>Date</th>
              <th> Note</th>
              <th>Payment Mode</th>
              <th>Paid Amount ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TRANID9366</td>
              <td>07/01/2024 05:19 PM</td>
              <td></td>
              <td>Cash </td>
              <td>144.00</td>

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
              <td colSpan={5} className="text-right">
                Total : $144.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment;
