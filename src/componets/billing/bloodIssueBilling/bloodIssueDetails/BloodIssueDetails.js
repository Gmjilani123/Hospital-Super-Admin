import React from "react";
import { Link } from "react-router-dom";

function BloodIssueDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Blood Issue Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Bill/bloodIssue" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body min-h-3">
          <div className="row">
            <div className="col-md-8">
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <th width="40%">Bill No</th>
                    <td width="60%">BIB568</td>
                  </tr>
                  <tr>
                    <th width="40%">Received To</th>
                    <td width="60%">Olivier Thomas (1)</td>
                  </tr>
                  <tr>
                    <th width="40%">Bags</th>
                    <td width="60%">5463 (220 1)</td>
                  </tr>
                  <tr>
                    <th width="40%">Issue Date</th>
                    <td width="60%">07/02/2024 11:17 AM</td>
                  </tr>
                  <tr>
                    <th width="40%">Blood Group</th>
                    <td width="60%">A+</td>
                  </tr>
                  <tr>
                    <th width="40%">Reference</th>
                    <td width="60%">Sansa Gomez (9008)</td>
                  </tr>
                  <tr>
                    <th width="40%">Donor Name</th>
                    <td width="60%">Ahemad</td>
                  </tr>
                  <tr>
                    <th width="40%">Technician</th>
                    <td width="60%" />
                    <td colSpan={2} />
                  </tr>
                  <tr>
                    <th width="40%">Note</th>
                    <td width="60%" />
                    <td colSpan={2} />
                  </tr>
                  <tr>
                    <th width="10%">Blood Qty</th>
                    <td width="10%" />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <th width="40%">Amount</th>
                    <td width="60%" className="text text-right">
                      $110.00
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Discount (%)</th>
                    <td width="60%" className="text text-right">
                      (0.00) $0.00
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Tax (%)</th>
                    <td width="60%" className="text text-right">
                      (10.00) $11.00
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Net Amount</th>
                    <td width="60%" className="text text-right">
                      $121.00
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Paid Amount</th>
                    <td width="60%" className="text text-right">
                      $121.00
                    </td>
                  </tr>
                  <tr>
                    <th width="40%">Balance Amount</th>
                    <td width="60%" className="text text-right">
                      $0.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default BloodIssueDetails;
