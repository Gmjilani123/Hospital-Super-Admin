import React from 'react'
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function RadiologyBillTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Bill No</th>
            <th>Case Id</th>
            <th>Reporting Date</th>
            <th>Patient Name</th>
            <th>Referrnce Doctor</th>
            <th> Previous Report Value</th>
            <th> Amount ($)</th>
            <th> paid Amount ($)</th>
            <th> balacnce Amount ($)</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PATHOB441</td>
            <td>6290</td>
            <td>06/22/2024 12:30 PM</td>
            <td>Nishant Kadakia (980)</td>
            <td>Sansa Gomez (9008)</td>
            <td></td>
            <td>195.00 </td>
            <td>150.00 </td>
            <td>40.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/BillDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>PATHOB440</td>
            <td>6202</td>
            <td>06/12/2024 03:35 PM</td>
            <td>NOlivier Thomas (1)</td>
            <td>Sansa Gomez (9008)</td>
            <td></td>
            <td>195.00 </td>
            <td>150.00 </td>
            <td>40.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/BillDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>PATHOB439</td>
            <td>4991</td>
            <td>06/30/2024 01:49 PM</td>
            <td>Alisha Knowles (896)</td>
            <td>Sonia Bush (9002) </td>
            <td></td>
            <td>180.00 </td>
            <td>180.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/BillDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>PATHOB438</td>
            <td></td>
            <td>06/22/2024 12:30 PM</td>
            <td>Shakib Khanna (520)</td>
            <td>Reyan Jain (9011)</td>
            <td></td>
            <td>195.00 </td>
            <td>195.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/BillDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>PATHOB441</td>
            <td>6290</td>
            <td>06/22/2024 12:30 PM</td>
            <td>Nishant Kadakia (980)</td>
            <td>Sansa Gomez (9008)</td>
            <td></td>
            <td>195.00 </td>
            <td>150.00 </td>
            <td>40.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/BillDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>PATHOB441</td>
            <td>6290</td>
            <td>06/22/2024 12:30 PM</td>
            <td>Nishant Kadakia (980)</td>
            <td>Sansa Gomez (9008)</td>
            <td></td>
            <td>195.00 </td>
            <td>150.00 </td>
            <td>40.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/Radiology/BillDetails"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RadiologyBillTable
