import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiAddLargeLine } from "react-icons/ri";

function BloodIssueBillingTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Bill No</th>
            <th>Case ID</th>
            <th>Issue Date</th>
            <th>Received Date</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>DONOR NAME</th>
            <th>BAGS ($)</th>
            <th>blood qty</th>
            <th>Amount ($)</th>
            <th>PaidAmount ($)</th>
            <th>Balance Amount ($)</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BIB568</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>
            <td>Ahemad</td>
            <td>5463 (220 1) </td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/BloodIssueDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-light  btn-icon btn-circle btn-sm me-1"
                  >
                    <RiAddLargeLine />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>
            <td>Ahemad</td>
            <td>5463 (220 1) </td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/BloodIssueDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-light  btn-icon btn-circle btn-sm me-1"
                  >
                    <RiAddLargeLine />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>
            <td>Ahemad</td>
            <td>5463 (220 1) </td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/BloodIssueDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-light  btn-icon btn-circle btn-sm me-1"
                  >
                    <RiAddLargeLine />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>
            <td>Ahemad</td>
            <td>5463 (220 1) </td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/BloodIssueDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-light  btn-icon btn-circle btn-sm me-1"
                  >
                    <RiAddLargeLine />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td>115</td>
            <td>07/02/2024 11:16 AM</td>
            <td>Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>
            <td>Ahemad</td>
            <td>5463 (220 1) </td>
            <td></td>
            <td>195.00 </td>
            <td>120.00 </td>
            <td>75.00 </td>
            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/BloodIssueDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-light  btn-icon btn-circle btn-sm me-1"
                  >
                    <RiAddLargeLine />
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

export default BloodIssueBillingTable;
