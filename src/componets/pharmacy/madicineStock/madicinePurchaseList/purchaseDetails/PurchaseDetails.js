import React from "react";
import { Link } from "react-router-dom";
import Print from "../../../../../common/print/Print";

function PurchaseDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Madicine Purchase Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link
              to="/admin/Pharmacy-Bill-list/MadicineStock/MadicinePurchase"
              className="back_btn"
            >
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
                <table width="100%" className="printablea4">
                  <tbody>
                    <tr>
                      <td align="text-left">
                        <h5>
                          <label>Pharmacy Purchase No </label> : PCHNO138
                        </h5>
                      </td>
                      <td align="text-left">
                        <h5>
                          <label>Bill No </label> :
                        </h5>
                      </td>
                      <td align="right">
                        <h5>
                          <label>Date </label> : 06/29/2024 05:45 PM
                        </h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="dividerhrmb10" />
                <div className="table-responsive">
                  <table
                    className="printablea4"
                    cellSpacing={0}
                    cellPadding={0}
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <th width="20%">Supplier Name</th>
                        <td width="25%">SGS Pharmacy</td>
                        <th width="25%">Contact No</th>
                        <td width="30%" align="left">
                          7864251478
                        </td>
                      </tr>
                      <tr>
                        <th width="20%">Contact Person</th>
                        <td width="25%">Nitin Viraj</td>
                        <th width="25%">Address</th>
                        <td width="30%" align="left">
                          Civil lines
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr className="dividerhrmb10" />
                <div className="table-responsive">
                  <table className="printablea4" id="testreport" width="100%">
                    <tbody>
                      <tr>
                        <th>Medicine Category</th>
                        <th width>Medicine Name</th>
                        <th>Batch No</th>
                        <th>Expiry Date</th>
                        <th style={{ textAlign: "right" }}>MRP ($)</th>
                        <th style={{ textAlign: "right" }}>Batch Amount ($)</th>
                        <th style={{ textAlign: "right" }}>Sale Price ($)</th>
                        <th style={{ textAlign: "right" }}>Packing Qty</th>
                        <th style={{ textAlign: "right" }}>Quantity</th>
                        <th style={{ textAlign: "right" }}>Tax (%)</th>
                        <th style={{ textAlign: "right" }}>
                          Purchase Price ($)
                        </th>
                        <th style={{ textAlign: "right" }}>Amount ($)</th>
                      </tr>
                      <tr>
                        <td width>Diaper </td>
                        <td width>MEDAMET</td>
                        <td>3663</td>
                        <td>Mar/2027</td>
                        <td align="right">2.00</td>
                        <td align="right">200.00</td>
                        <td align="right">
                          <input
                            type="text"
                            name="salerate[]"
                            id="salerate"
                            className="form-control"
                            style={{ width: "80%", textAlign: "right" }}
                            defaultValue={300.0}
                            fdprocessedid="ezgwk"
                          />
                          <input
                            type="hidden"
                            name="id[]"
                            id="id"
                            defaultValue={148}
                          />
                        </td>
                        <td align="right">8</td>
                        <td align="right">800</td>
                        <td align="right">10.00</td>
                        <td align="right">90.00</td>
                        <td align="right">72,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr className="dividerhrmb10" />
                <table className="printablea4" id="testreport" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <label>Payment Mode </label> : Cash{" "}
                        </p>
                      </td>
                      <td width="30%">
                        <table
                          className="printablea4"
                          width="100%"
                          style={{ float: "right" }}
                        >
                          <tbody>
                            <tr>
                              <th width="35%">Total ($)</th>
                              <td align="right" width="65%">
                                72,000.00
                              </td>
                            </tr>
                            <tr>
                              <th>Discount ($)</th>
                              <td align="right">0.00</td>
                            </tr>
                            <tr>
                              <th>Tax ($)</th>
                              <td align="right">7,200.00</td>
                            </tr>
                            <tr>
                              <th>Net Amount ($)</th>
                              <td align="right">79,200.00</td>
                            </tr>
                          </tbody>
                        </table>
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
                <p />
              </div>
            </div>
            {/*/.col (left) */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetails;
