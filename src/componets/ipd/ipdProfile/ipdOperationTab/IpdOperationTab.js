import React from "react";
import { Link } from "react-router-dom";
import ExportFile from "../../../../common/exportFile/ExportFile";
import { Dropdown } from "react-bootstrap";
import { PiPrinterDuotone } from "react-icons/pi";
import { FaEye } from "react-icons/fa";

function IpdOperationTab() {
  const handlePrint = () => {
    console.log("Printing...");
    window.print();
  };
  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper">
        <div className="row">
          <div className="col-md-4 ">
            <h4>Operations </h4>
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
              <th>Reference No</th>
              <th>Operation Date</th>

              <th> Operation Name </th>
              <th>Operation Category</th>
              <th>OT Technician</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OTREF215</td>

              <td> 06/22/2024 09:30 PM</td>
              <td>Facelift Surgery</td>
              <td>Plastic Surgery</td>
              <td>Vinesh</td>
              <td style={{ textAlign: "center" }}>
                <div className="d-flex">
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/IPD-Patient/IPD-patient-Profile/OperationDetails"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>OTREF215</td>

              <td> 06/22/2024 09:30 PM</td>
              <td>Facelift Surgery</td>
              <td>Plastic Surgery</td>
              <td>Vinesh</td>
              <td style={{ textAlign: "center" }}>
                <div className="d-flex">
                  <div className="tool_show_parent">
                    <Link
                      to="/admin/IPD-Patient/IPD-patient-Profile/OperationDetails"
                      className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                      style={{ backgroundColor: "#2298C1" }}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IpdOperationTab;
