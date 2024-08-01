import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function OpdBillingTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th>Patient ID</th>
            <th>Guardian Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Consultant</th>
            <th>Last Visit</th>
            <th>Provious Madical Issue</th>
            <th>Total Recheckup</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                Baber Devan
              </Link>
            </td>
            <td>1081</td>
            <td></td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Reyan Jain (9011)</td>
            <td>07/31/2024 05:19 PM</td>
            <td></td>
            <td>10</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/OPD-bill/patient-profile-1081"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                Stephen Jackson
              </Link>
            </td>
            <td>874</td>
            <td></td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Sonia Bush (9002)</td>
            <td>07/31/2024 05:19 PM</td>
            <td></td>
            <td>10</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/OPD-bill/patient-profile-1081"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                Lincoln Yeo
              </Link>
            </td>
            <td>1075</td>
            <td></td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Sansa Gomez (9008)</td>
            <td>07/30/2024 05:26 PM</td>
            <td></td>
            <td>7</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/OPD-bill/patient-profile-1081"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                Wesley Barresi
              </Link>
            </td>
            <td>922</td>
            <td></td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Reyan Jain (9011)</td>
            <td>07/31/2024 05:19 PM</td>
            <td></td>
            <td>10</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/OPD-bill/patient-profile-1081"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                Baber Devan
              </Link>
            </td>
            <td>1081</td>
            <td></td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Reyan Jain (9011)</td>
            <td>07/31/2024 05:19 PM</td>
            <td></td>
            <td>10</td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/OPD-bill/patient-profile-1081"
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

export default OpdBillingTable;
