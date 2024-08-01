import React from "react";
import { Link } from "react-router-dom";

function PaymentBlood() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Payment</h4>
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

          <div className="mt-5">
            <div>
              <h4>Transaction History</h4>
              <hr />
              <div className="table-responsive">
                <table className="table table-hover example">
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Date</th>
                      <th>Mode</th>
                      <th>Note</th>
                      <th>Amount</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TRANID9433</td>
                      <td>07/02/2024 11:17 AM</td>
                      <td>
                        Cash
                        <br />
                      </td>
                      <td />
                      <td>$121.00</td>
                      <td className="text-right">
                        <a
                          href="javascript:void(0)"
                          data-loading-text='<i class="fa fa-circle-o-notch fa-spin"></i>'
                          data-record-id={9433}
                          className="btn btn-default btn-xs print_receipt"
                          data-toggle="tooltip"
                          title="Print"
                        >
                          <i className="fa fa-print" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default PaymentBlood;
