import React from "react";
import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function BillDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Madicine Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link to="/admin/Pharmacy-Bill-list" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0 pb0">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              <div className>
                {/* <div className="pprinta4">
                  <img
                    src="https://demo.smart-hospital.in/uploads/printing/6.jpg?1719677862"
                    className="img-responsive"
                    style={{ height: 100, width: "100%" }}
                  />
                </div> */}
                <table
                  width="100%"
                  className="printablea4"
                  style={{ textAlign: "left" }}
                >
                  <tbody>
                    <tr>
                      <td width="77%" align="text-left">
                        <h5>Bill No : PHARMAB378</h5>
                      </td>
                      <td width="23%">
                        <h5>Date : 06/22/2024 05:43 PM</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr
                  style={{
                    height: 1,
                    clear: "both",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <table
                  className="printablea4"
                  cellSpacing={0}
                  cellPadding={0}
                  width="100%"
                  style={{ textAlign: "left" }}
                >
                  <tbody>
                    <tr>
                      <th width="10%">Name</th>
                      <td width="10%">Nishant Kadakia (980)</td>
                      <th width="10%">Phone</th>
                      <td width="10%">94564651414</td>
                      <th width="10%">Doctor</th>
                      <td width="10%">Reyan Jain (9011)</td>
                    </tr>
                    <tr>
                      <th width="10%">Case ID</th>
                      <td width="10%">6290</td>
                      <th width="10%">Prescription</th>
                      <td width="10%">IPDP294</td>
                    </tr>
                  </tbody>
                </table>
                <hr
                  style={{
                    height: 1,
                    clear: "both",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <table
                  className="printablea4"
                  id="testreport"
                  width="100%"
                  style={{ textAlign: "left" }}
                >
                  <tbody>
                    <tr>
                      <th width="20%">Medicine Category</th>
                      <th width="20%">Medicine Name</th>
                      <th>Batch No</th>
                      <th>Unit</th>
                      <th>Expiry Date</th>
                      <th>Quantity</th>
                      <th className="text-left" style={{ textAlign: "left" }}>
                        Tax
                      </th>
                      <th style={{ textAlign: "right" }}>Amount ($)</th>
                    </tr>
                    <tr>
                      <td width="20%" style={{ textAlign: "left" }}>
                        Syrup
                      </td>
                      <td width="20%">Alprovit</td>
                      <td>34321</td>
                      <td>50</td>
                      <td>Dec/2024</td>
                      <td>4</td>
                      <td className="text-left" style={{ textAlign: "left" }}>
                        20.00 (5.00%)
                      </td>
                      <td align="right">400.00</td>
                    </tr>
                  </tbody>
                </table>
                <hr
                  style={{
                    height: 1,
                    clear: "both",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <div className="row">
                  <div className="col-md-6">
                    <table align className="printablea4">
                      <tbody>
                        <tr id="generated_by">
                          <th>Collected By</th>
                          <td>Super Admin (9001)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table align="right" className="printablea4">
                      <tbody>
                        <tr>
                          <th style={{ width: "50%", textAlign: "left" }}>
                            Total ($)
                          </th>
                          <td
                            style={{ width: "50%", textAlign: "right" }}
                            className="text-right"
                          >
                            400.00
                          </td>
                        </tr>
                        <tr>
                          <th style={{ width: "50%", textAlign: "left" }}>
                            Discount ($)
                          </th>
                          <td
                            style={{ width: "50%", textAlign: "right" }}
                            className="text-right"
                          >
                            40.00
                          </td>
                        </tr>
                        <tr>
                          <th style={{ width: "50%", textAlign: "left" }}>
                            Tax ($)
                          </th>
                          <td
                            style={{ width: "50%", textAlign: "right" }}
                            className="text-right"
                          >
                            20.00
                          </td>
                        </tr>
                        <tr>
                          <th style={{ width: "50%", textAlign: "left" }}>
                            Net Amount ($)
                          </th>
                          <td
                            style={{ width: "50%", textAlign: "right" }}
                            className="text-right"
                          >
                            380.00
                          </td>
                        </tr>
                        <tr>
                          <th style={{ width: "50%", textAlign: "left" }}>
                            Paid Amount ($)
                          </th>
                          <td
                            style={{ width: "50%", textAlign: "right" }}
                            className="text-right"
                          >
                            250.00
                          </td>
                        </tr>
                        <tr>
                          <th style={{ width: "50%", textAlign: "left" }}>
                            Refund Amount ($)
                          </th>
                          <td
                            style={{ width: "50%", textAlign: "right" }}
                            className="text-right"
                          >
                            0.00
                          </td>
                        </tr>
                        <tr>
                          <th style={{ width: "50%", textAlign: "left" }}>
                            Due Amount ($)
                          </th>
                          <td
                            style={{ width: "50%", textAlign: "right" }}
                            className="text-right"
                          >
                            130.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr
                  style={{
                    height: 1,
                    clear: "both",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <p />
              </div>
            </div>
            {/*/.col (left) */}
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default BillDetails;
