import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function DeathRecordTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Reference No</th>
            <th>Case Id</th>
            <th>Patient Name</th>
            <th>Guardian Name</th>
            <th>Gender</th>
            <th>Death Date</th>

            <th>Report</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DREF51</td>
            <td>4723</td>
            <td> Wordey Limpi (151)</td>
            <td>Jack Limpi</td>
            <td>Female</td>
            <td>06/22/2024 05:46 PM</td>
            <td>Dennies Coats</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/DeathRecord/deathrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>DREF51</td>
            <td>4723</td>
            <td> Wordey Limpi (151)</td>
            <td>Jack Limpi</td>
            <td>Female</td>
            <td>06/22/2024 05:46 PM</td>
            <td>Dennies Coats</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/DeathRecord/deathrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>DREF51</td>
            <td>4723</td>
            <td> Wordey Limpi (151)</td>
            <td>Jack Limpi</td>
            <td>Female</td>
            <td>06/22/2024 05:46 PM</td>
            <td>Dennies Coats</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/DeathRecord/deathrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>DREF51</td>
            <td>4723</td>
            <td> Wordey Limpi (151)</td>
            <td>Jack Limpi</td>
            <td>Female</td>
            <td>06/22/2024 05:46 PM</td>
            <td>Dennies Coats</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/DeathRecord/deathrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>DREF51</td>
            <td>4723</td>
            <td> Wordey Limpi (151)</td>
            <td>Jack Limpi</td>
            <td>Female</td>
            <td>06/22/2024 05:46 PM</td>
            <td>Dennies Coats</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/DeathRecord/deathrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>DREF51</td>
            <td>4723</td>
            <td> Wordey Limpi (151)</td>
            <td>Jack Limpi</td>
            <td>Female</td>
            <td>06/22/2024 05:46 PM</td>
            <td>Dennies Coats</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/DeathRecord/deathrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
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

export default DeathRecordTable;
