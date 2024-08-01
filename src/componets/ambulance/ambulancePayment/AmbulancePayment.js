import React from "react";
import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function AmbulancePayment() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Ambulance Payments</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <Link to="/admin/Ambulance" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0 pb0">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <table className=" ">
                    <tbody>
                      <tr>
                        <th width="35%">Bill No</th>
                        <td>ACB342</td>
                      </tr>
                      <tr>
                        <th width="35%">Received To</th>
                        <td>Nishant Kadakia (980)</td>
                      </tr>
                      <tr>
                        <th>Vehicle Number</th>
                        <td>MP20SC1797</td>
                      </tr>
                      <tr>
                        <th>Vehicle Model</th>
                        <td>BS4</td>
                      </tr>
                      <tr>
                        <th>Driver Name</th>
                        <td>Ravi</td>
                      </tr>
                      <tr>
                        <th>Driver Contact</th>
                        <td />
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>06/21/2024</td>
                      </tr>
                      <tr>
                        <th>Patient Address</th>
                        <td colSpan={3}>CA.West </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <table className="">
                    <tbody>
                      <tr>
                        <th>Amount</th>
                        <td className="text text-right">$150.00</td>
                      </tr>
                      <tr>
                        <th>Tax (%)</th>
                        <td className="text text-right">(30.00) $45.00 </td>
                      </tr>
                      <tr>
                        <th>Net Amount</th>
                        <td className="text text-right">$195.00</td>
                      </tr>
                      <tr>
                        <th>Paid Amount</th>
                        <td className="text text-right">$195.00</td>
                      </tr>
                      <tr>
                        <th>Balance Amount</th>
                        <td className="text text-right">$0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              <form
                id="add_partial_payment"
                action="https://demo.smart-hospital.in/admin/vehicle/partialbill"
                acceptCharset="utf-8"
                method="post"
                className="ptt10"
              >
                <input type="hidden" name="billing_id" defaultValue={342} />
                <input type="hidden" name="case_id" defaultValue={6290} />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <small className="req"> *</small>
                      <input
                        type="text"
                        name="payment_date"
                        id="date"
                        className="form-control datetime"
                        fdprocessedid="315es"
                      />
                      <span className="text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Amount ($)</label>
                      <small className="req"> *</small>
                      <input
                        type="text"
                        name="payment_amount"
                        id="amount"
                        className="form-control"
                        defaultValue={0}
                        fdprocessedid="ujd70g"
                      />
                      <input
                        type="hidden"
                        name="net_amount"
                        id="net_amount"
                        className="form-control"
                        defaultValue={0}
                      />
                      <input
                        type="hidden"
                        name="patient_id"
                        id="patient_id"
                        className="form-control"
                        defaultValue={980}
                      />
                      <span className="text-danger" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Payment Mode</label>
                      <select
                        className="form-control payment_mode"
                        name="payment_mode"
                        fdprocessedid="jhpeg4"
                      >
                        <option value="Cash">Cash </option>
                        <option value="Cheque">Cheque </option>
                        <option value="transfer_to_bank_account">
                          Transfer to Bank Account{" "}
                        </option>
                        <option value="UPI">UPI </option>
                        <option value="Other">Other </option>
                        <option value="Online">Online </option>
                      </select>
                      <span className="text-danger" />
                    </div>
                  </div>
                </div>
                <div className="row cheque_div" style={{ display: "none" }}>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Cheque No</label>
                      <small className="req"> *</small>
                      <input
                        type="text"
                        name="cheque_no"
                        id="cheque_no"
                        className="form-control"
                      />
                      <span className="text-danger" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Cheque Date</label>
                      <small className="req"> *</small>
                      <input
                        type="text"
                        name="cheque_date"
                        id="cheque_date"
                        className="form-control date"
                      />
                      <span className="text-danger" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Attach Document</label>
                      <input
                        type="file"
                        className=" form-control filestyle"
                        name="document"
                      />
                      <span className="text-danger" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Note</label>
                      <textarea
                        name="note"
                        id="note"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  data-loading-text="Processing..."
                  className="btn btn-info pull-right"
                  fdprocessedid="x73xts"
                >
                  <i className="fa fa-check-circle" /> Save
                </button>
              </form>
            </div>
          </div>

          <div className="mt-5">
            <h4>Transaction History</h4>
            <hr />
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Mode</th>
                    <th>Amount ($)</th>
                    <th>Note</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TRANID9161</td>
                    <td>06/21/2024 05:45 PM</td>
                    <td>
                      Cash
                      <br />
                    </td>
                    <td>195.00</td>
                    <td />
                    <td>
                      <div className="pull-right">
                        <a
                          href="javascript:void(0)"
                          data-loading-text='<i class="fa fa-circle-o-notch fa-spin"></i>'
                          data-record-id={9161}
                          className="btn btn-default btn-xs print_receipt"
                          data-toggle="tooltip"
                          title
                          data-original-title="Print"
                        >
                          <i className="fa fa-print" />
                        </a>
                        <a
                          href="javascript:void(0)"
                          onclick="deletePayment('9161')"
                          data-loading-text='<i class="fa fa-circle-o-notch fa-spin"></i>'
                          data-record-id={9161}
                          className="btn btn-default btn-xs delete_trans"
                          data-toggle="tooltip"
                          title
                          data-original-title="Delete"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </div>
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

export default AmbulancePayment;
