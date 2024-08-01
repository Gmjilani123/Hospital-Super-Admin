import React from "react";
import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";
import HospitalAdd from "../../../common/hospitalAdd/HospitalAdd";

function AmbulanceBillDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Ambulance Bill Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link to="/admin/Ambulance" className="back_btn">
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
                <div className="pprinta4">
                  {/* <img
                    src="https://demo.smart-hospital.in/uploads/printing/15.jpg?1719977997"
                    className="img-responsive"
                    style={{ height: 100, width: "100%" }}
                  /> */}

                  <HospitalAdd/>
                </div>
                <table width="100%" className="printablea4">
                  <tbody>
                    <tr>
                      <td align="text-left">
                        <h5>Bill No ACB342</h5>
                      </td>
                      <td className="text-right">
                        <h5>Date : 06/21/2024 05:45 PM</h5>
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
                >
                  <tbody>
                    <tr>
                      <th width="20%">Patient Name</th>
                      <td width="25%">Nishant Kadakia (980)</td>
                      <th width="25%">Driver Name</th>
                      <td width="30%" align="left">
                        Ravi
                      </td>
                    </tr>
                    <tr>
                      <th width="20%">Vehicle Number</th>
                      <td width="25%">MP20SC1797</td>
                      <th width="25%">Vehicle Model</th>
                      <td width="30%" align="left">
                        BS4
                      </td>
                    </tr>
                    <tr>
                      <th width="20%">Case ID</th>
                      <td width="25%">6290</td>
                      <th width="20%">Charge Category</th>
                      <td width="25%">Private Ambulance </td>
                    </tr>
                    <tr>
                      <th width="20%">Charge Name</th>
                      <td width="25%">Private </td>
                      <th width="20%">Collected By</th>
                      <td width="25%">Super Admin (9001)</td>
                    </tr>
                  </tbody>
                </table>{" "}
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
                  style={{ width: "30%", float: "right" }}
                >
                  <tbody>
                    <tr>
                      <th style={{ paddingBottom: 5 }}>Standard Charge ($)</th>
                      <td align="right" style={{ paddingBottom: 5 }}>
                        150.00
                      </td>
                    </tr>
                    <tr>
                      <th style={{ paddingBottom: 5 }}>Amount ($)</th>
                      <td align="right" style={{ paddingBottom: 5 }}>
                        150.00
                      </td>
                    </tr>
                    <tr>
                      <th>Tax ($)</th>
                      <td align="right">(30.00%) 45.00</td>
                    </tr>
                    <tr>
                      <th>Net Amount ($)</th>
                      <td align="right">195.00</td>
                    </tr>
                    <tr>
                      <th>Paid Amount ($)</th>
                      <td align="right">195.00</td>
                    </tr>
                    <tr>
                      <th>Due Amount ($)</th>
                      <td align="right">0</td>
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
                <div className="table-responsive">
                  <table className style={{ width: "100%" }}></table>
                </div>
                <hr
                  style={{
                    height: 1,
                    clear: "both",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
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

export default AmbulanceBillDetails;
