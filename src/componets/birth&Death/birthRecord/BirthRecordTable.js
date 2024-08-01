import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function BirthRecordTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Reference No</th>
            <th>Case Id</th>
            <th>Child Name</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th> Mother Name</th>

            <th>Father Name</th>
            <th>Report</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BREF68</td>
            <td>4468</td>
            <td> Aston Marsh</td>
            <td>Male</td>
            <td>07/15/2024 12:52 PM</td>
            <td> Carolyn Wright (827)</td>
            <td></td>
            <td>Normal</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/BirthRecord/birthrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BREF68</td>
            <td>4468</td>
            <td>Jack</td>
            <td>Male</td>
            <td>07/15/2024 12:52 PM</td>
            <td> Wordey Limpi (151)</td>
            <td></td>
            <td></td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/BirthRecord/birthrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>BREF68</td>
            <td>4468</td>
            <td> Aston Marsh</td>
            <td>Male</td>
            <td>07/15/2024 12:52 PM</td>
            <td>MAIREENA GOMAZ (1005)</td>
            <td>Garry</td>
            <td></td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/BirthRecord/birthrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>BREF68</td>
            <td>4468</td>
            <td> Aston Marsh</td>
            <td>Male</td>
            <td>07/15/2024 12:52 PM</td>
            <td>Maria Taylor (121)</td>
            <td>Harry</td>
            <td>Normal</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/BirthRecord/birthrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>BREF68</td>
            <td>4468</td>
            <td> Aston Marsh</td>
            <td>Male</td>
            <td>07/15/2024 12:52 PM</td>
            <td> Carolyn Wright (827)</td>
            <td></td>
            <td>Normal</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/BirthRecord/birthrecordDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>BREF68</td>
            <td>4468</td>
            <td> Aston Marsh</td>
            <td>Male</td>
            <td>07/15/2024 12:52 PM</td>
            <td> Carolyn Wright (827)</td>
            <td></td>
            <td>Normal</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/BirthRecord/birthrecordDetails"
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

export default BirthRecordTable;
