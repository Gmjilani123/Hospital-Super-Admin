import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function TpaManagementTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th> Code</th>
            <th> Phone</th>
            <th> Address</th>
            <th>Contact Person Name</th>
            <th>Contact Person Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Health Life Insurance</td>
            <td>2013</td>
            <td>9848940151</td>
            <td>Delhi</td>
            <td>Arvind Singh</td>
            <td>8445661051</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/TpaManagement/Details"
                    className="btn btn-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Star Health Insurance </td>
            <td>111</td>
            <td>7864456525</td>
            <td>AB road, Indore</td>
            <td>Mr Vineet sharma</td>
            <td>8445661051</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/TpaManagement/Details"
                    className="btn btn-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>IDBI Federal</td>
            <td>154</td>
            <td>9874523647</td>
            <td>Main Branch, Indore</td>
            <td>Menis Albert</td>
            <td>9871453652</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/TpaManagement/Details"
                    className="btn btn-info btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Health Life Insurance</td>
            <td>2013</td>
            <td>9848940151</td>
            <td>Delhi</td>
            <td>Arvind Singh</td>
            <td>8445661051</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/TpaManagement/Details"
                    className="btn btn-info btn-icon btn-circle btn-sm me-1"
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
  );
}

export default TpaManagementTable;
