import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

function AmbulanceTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Bill No</th>
            <th> case id</th>

            <th> Patient name</th>
            <th>Vehicle No</th>
            <th>Vehicle Model</th>
            <th>Driver Name</th>
            <th>Driver Contact no</th>
            <th>Patient Address</th>
            <th>Date</th>
            <th> Amount ($)</th>
            <th> Paid Amount ($)</th>
            <th> balance Amount ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ACB342</td>
            <td>6290</td>
            <td>Nishant Kadakia (980)</td>
            <td>MP20SC1797</td>
            <td>BS4</td>
            <td>Ravi</td>
            <td>94564651414</td>
            <td>CA.West</td>
            <td>06/21/2024 05:45 PM</td>
            <td>195.00 </td>
            <td>195.00 </td>
            <td>0.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Ambulance/Payment"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <FiPlus />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
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
              </div>
            </td>
          </tr>

          <tr>
            <td>ACB342</td>
            <td>6290</td>
            <td> Olivier Thomas (1)</td>
            <td>MP20QW4562</td>
            <td> BNS321</td>
            <td>Farhan</td>
            <td>94564651414</td>
            <td>482 Kingsway, Brooklyn West, CA</td>
            <td>06/21/2024 05:45 PM</td>
            <td>195.00 </td>
            <td>195.00 </td>
            <td>0.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Ambulance/Payment"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <FiPlus />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
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
              </div>
            </td>
          </tr>

          <tr>
            <td>ACB342</td>
            <td>6290</td>
            <td>Elliot Coates (868)</td>
            <td>MP20DDHK2562</td>
            <td>BS4FGD</td>
            <td> David Wood</td>
            <td>94564651414</td>
            <td>38 South Western Terrace MILTON CLEVEDON BA4 1ZB</td>
            <td>06/21/2024 05:45 PM</td>
            <td>195.00 </td>
            <td>195.00 </td>
            <td>0.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div className="tool_show_parent">
                  <Link
                    to="/admin/Ambulance/Payment"
                    className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                  >
                    <FiPlus />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/admin/Ambulance/AmbulanceBillDetails"
                    className="btn btn-primary btn-icon btn-circle btn-sm me-1 bg-info"
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
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AmbulanceTable;
