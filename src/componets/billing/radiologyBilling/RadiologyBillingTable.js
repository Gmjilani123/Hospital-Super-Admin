import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function RadiologyBillingTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Bill No</th>
            <th>Case ID</th>
            <th>Reporting Date</th>
            <th>Patient Name</th>
            <th>Reference Doctor</th>
            <th>Note</th>
            <th>Previous Reporting Value</th>
            <th>Amount ($)</th>
            <th>PaidAmount ($)</th>
            <th>Balance Amount ($)</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PATHOB449</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>Reyan Jain (9011) </td>
            <td></td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/Radiology/radiologyBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>PATHOB449</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>Reyan Jain (9011) </td>
            <td></td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/Radiology/radiologyBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>PATHOB449</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>Reyan Jain (9011) </td>
            <td></td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/Radiology/radiologyBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>PATHOB449</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>Reyan Jain (9011) </td>
            <td></td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/Radiology/radiologyBillDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>PATHOB449</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>Reyan Jain (9011) </td>
            <td></td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/Radiology/radiologyBillDetails"
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

export default RadiologyBillingTable;
