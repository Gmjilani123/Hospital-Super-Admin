


import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import React, { useState } from "react";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";
import Print from "../../../../common/print/Print";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function IssueComponent() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [lgShow, setLgShow] = useState(false);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Issue Component</h4>
        </div>

        <div>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
        </div>

        <Button onClick={() => setLgShow(true)} className="p2-modal">
          <i className="ti ti-plus me-0 me-sm-1 ti-xs plus " />
          New Patient
        </Button>

        <div>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <Print />
            </div>
            <Link to="/admin/Bill/BloodComponent" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="modal-body px-2 py-3">
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label>Issue Date</label>
                <small className="req"> *</small>
                <input
                  type="text"
                  name="date_of_issue"
                  id="dates_of_issue"
                  className="form-control datetime"
                  fdprocessedid="75oa82"
                />
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="exampleInputFile">Hospital Doctor</label>
                <div>
                  <select
                    name="consultant_doctor"
                    style={{ width: "100%" }}
                    id="consultant_doctor"
                    onchange="get_Docname(this.value)"
                    className="form-control select2 select2-hidden-accessible"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option value>Select</option>
                    <option value={11}>Amit Singh (9009)</option>
                    <option value={12}>Reyan Jain (9011)</option>
                    <option value={4}>Sansa Gomez (9008)</option>
                    <option value={2}>Sonia Bush (9002)</option>
                  </select>
                </div>
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label>Reference Name</label>
                <small className="req">*</small>
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  className="form-control"
                  fdprocessedid="9ikdc9"
                />
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label> Technician</label>
                <input
                  type="text"
                  name="technician"
                  className="form-control"
                  fdprocessedid="eyf14"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label> Blood Group</label>
                <select
                  style={{ width: "100%" }}
                  className="form-control select2 blood_group select2-hidden-accessible"
                  name="blood_group"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value>Select</option>
                  <option value={1}>B+</option>
                  <option value={2}>A+</option>
                  <option value={3}>AB-</option>
                  <option value={4}>AB+</option>
                  <option value={5}>O-</option>
                  <option value={6}>A-</option>
                  <option value={7}>B-</option>
                  <option value={8}>O+</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label>Bag</label>
                <small className="req"> *</small>
                <select
                  style={{ width: "100%" }}
                  className="form-control select2 bag_no select2-hidden-accessible"
                  name="bag_no"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value>Select</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label>Charge Category</label>
                <small className="req"> *</small>
                <select
                  name="charge_category"
                  id="charge_category"
                  style={{ width: "100%" }}
                  className="form-control select2 charge_category select2-hidden-accessible"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value>Select</option>
                  <option value={17}>Packed Blood Cells</option>
                  <option value={18}>Fresh Frozen Plasma</option>
                  <option value={19}>Platelet Concentrate</option>
                  <option value={20}>Cryoprecipitate</option>
                  <option value={26}>Blood sugar test</option>
                  <option value={34}>Other Charges</option>
                </select>

                <span className="text-danger" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label>Charge Name</label>
                <small className="req"> *</small>
                <select
                  name="charge_id"
                  id="code"
                  style={{ width: "100%" }}
                  className="form-control addcharge select2  select2-hidden-accessible"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value>Select</option>
                </select>

                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Standard Charge ($)</label>
                <input
                  type="text"
                  name="standard_charge"
                  id="addstandard_charge"
                  className="form-control"
                  defaultValue
                  fdprocessedid="o0ghak"
                />
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-sm-3 hide">
              <div className="form-group">
                <label>Qty</label>
                <small className="req"> *</small>
                <input
                  type="text"
                  name="qty"
                  id="qty"
                  className="form-control"
                />
                <span className="text-danger" />
              </div>
            </div>
          </div>
          {/*./row*/}
          <div className="divider" />
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Note</label>
                    <textarea
                      name="note"
                      rows={3}
                      id="note"
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        htmlFor="custom_fields[blood_issue][9]"
                        className="control-label"
                      >
                        Blood Qty
                      </label>
                      <input
                        type="text"
                        id="custom_fields[blood_issue][9]"
                        name="custom_fields[blood_issue][9]"
                        className="form-control"
                        defaultValue
                        fdprocessedid="39mgrm"
                      />
                      <span className="text-danger" />
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
            {/*./col-sm-6*/}
            <div className="col-sm-6">
              <table className="printablea4">
                <tbody>
                  <tr>
                    <th width="40%">Total ($)</th>
                    <td
                      width="60%"
                      colSpan={2}
                      className="text-right ipdbilltable"
                    >
                      <input
                        type="text"
                        placeholder="Total"
                        defaultValue={0}
                        name="total"
                        id="total"
                        style={{ width: "30%", float: "right" }}
                        className="form-control total"
                        readOnly
                        fdprocessedid="mr92ng"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Discount ($)</th>
                    <td className="text-right ipdbilltable">
                      <h4
                        style={{ float: "right", fontSize: 12, paddingLeft: 5 }}
                      >
                        {" "}
                        %
                      </h4>
                      <input
                        type="text"
                        placeholder="Discount"
                        name="discount_percent"
                        id="discount_percent"
                        defaultValue={0}
                        className="form-control discount_percent"
                        style={{ width: "70%", float: "right", fontSize: 12 }}
                        fdprocessedid="5iq17"
                      />
                    </td>
                    <td className="text-right ipdbilltable">
                      <input
                        type="text"
                        placeholder="Discount"
                        defaultValue={0}
                        name="discount"
                        id="discount"
                        style={{ width: "50%", float: "right" }}
                        className="form-control discount"
                        fdprocessedid="9nr0f"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Tax ($)</th>
                    <td className="text-right ipdbilltable">
                      <h4
                        style={{ float: "right", fontSize: 12, paddingLeft: 5 }}
                      >
                        {" "}
                        %
                      </h4>
                      <input
                        type="text"
                        placeholder="Tax"
                        name="tax_percentage"
                        id="tax_percentage"
                        className="form-control tax_percentage"
                        readOnly
                        style={{ width: "70%", float: "right", fontSize: 12 }}
                        fdprocessedid="pfsbyi"
                      />
                    </td>
                    <td className="text-right ipdbilltable">
                      <input
                        type="text"
                        placeholder="Tax"
                        name="tax"
                        defaultValue={0}
                        id="tax"
                        style={{ width: "50%", float: "right" }}
                        className="form-control tax"
                        readOnly
                        fdprocessedid="nrke1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Net Amount ($)</th>
                    <td colSpan={2} className="text-right ipdbilltable">
                      <input
                        type="text"
                        placeholder="Net Amount"
                        defaultValue={0}
                        name="net_amount"
                        id="net_amount"
                        style={{ width: "30%", float: "right" }}
                        className="form-control net_amount"
                        readOnly
                        fdprocessedid="qz0z29"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Payment Mode</label>
                    <select
                      className="form-control payment_mode"
                      name="payment_mode"
                      fdprocessedid="4m4ajc"
                    >
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="transfer_to_bank_account">
                        Transfer to Bank Account
                      </option>
                      <option value="UPI">UPI</option>
                      <option value="Other">Other</option>
                      <option value="Online">Online</option>
                    </select>
                    <span className="text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Payment Amount ($)</label>
                    <small className="req"> *</small>
                    <input
                      type="text"
                      name="payment_amount"
                      id="payment_amount"
                      className="form-control payment_amount text-right"
                      fdprocessedid="9gzs2c"
                    />
                    <span className="text-danger" />
                  </div>
                </div>
                <div className="cheque_div" style={{ display: "none" }}>
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
                        readOnly="readonly"
                      />
                      <span className="text-danger" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Attach Document</label>
                      <div className="dropify-wrapper">
                        <div className="dropify-message">
                          <p>
                            <i className="fa fa-cloud-upload dropi18" />
                            Drop a file here or click
                          </p>
                          <p className="dropify-error">
                            Ooops, something wrong appended.
                          </p>
                        </div>
                        <div className="dropify-loader" />
                        <div className="dropify-errors-container">
                          <ul />
                        </div>
                        <input
                          type="file"
                          className="filestyle form-control"
                          name="document"
                        />
                        <button type="button" className="dropify-clear">
                          Remove
                        </button>
                        <div className="dropify-preview">
                          <span className="dropify-render" />
                          <div className="dropify-infos">
                            <div className="dropify-infos-inner">
                              <p className="dropify-filename">
                                <span className="file-icon" />{" "}
                                <span className="dropify-filename-inner" />
                              </p>
                              <p className="dropify-infos-message">
                                Drag and drop or click to replace
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="text-danger" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*./row*/}
          <Button variant="primary">Save</Button>{" "}
        </div>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}

export default IssueComponent;

