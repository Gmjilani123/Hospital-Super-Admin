import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import React, { useState } from "react";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";

import Print from "../../../../common/print/Print";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function AddPatientPathologyBilling() {
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
          <h4>Add Patient Pathology Billing</h4>
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

        <div className="p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0"
              id="prescription_no"
              placeholder="Prescription No"
              name="prescription_no"
              autoComplete="off"
              fdprocessedid="m4vz56"
            />
            <div className="input-group-btn">
              <button
                className="btn btn-default btn-group-custom"
                type="button"
                id="search_prescription"
                fdprocessedid="srwpbe"
              >
                <FaSearch className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <Print />
            </div>
            <Link to="/admin/Bill/Pathology" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="modal-body pb0">
          <input type="hidden" name="pathology_billing_id" defaultValue={0} />
          <input type="hidden" name="transaction_id" defaultValue={0} />
          <div className="row">
            <div className="table-responsive">
              <table
                className="table tableover  table-hover   mb-3"
                id="tableID"
              >
                <thead>
                  <tr className="font13">
                    <th width="15%">
                      Test Name
                      <small className="req" style={{ color: "red" }}>
                        *
                      </small>
                    </th>
                    <th width="10%">Report Days</th>
                    <th width="15%">
                      Report Date
                      <small className="req" style={{ color: "red" }}>
                        *
                      </small>
                    </th>
                    <th width="7%">Tax</th>
                    <th className="text-right" width="10%">
                      Amount ($)
                    </th>
                    <th className="text-right" width="2%" />
                  </tr>
                </thead>
                <tbody>
                  <tr id="row1">
                    <td>
                      <input
                        type="hidden"
                        id
                        name="total_rows[]"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        name="inserted_id_1"
                        defaultValue={0}
                      />
                      <select
                        className="form-control test_name select2 select2-hidden-accessible"
                        style={{ width: "100%" }}
                        onchange="gettestpathodetails(this.value, 1)"
                        name="test_name_1"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value>Select </option>
                        <option value={9}>Appendicitis (Appendicitis) </option>
                        <option value={8}>Chest X-rays (C) </option>
                        <option value={7}>Breast Ultrasound (BU) </option>
                        <option value={6}>Vascular Sonography (VSG) </option>
                        <option value={5}>
                          Signal-averaged electrocardiogram (SAECG){" "}
                        </option>
                        <option value={4}>Cardiac MRI (CMRI) </option>
                        <option value={3}>Liver test (LFT) </option>
                        <option value={2}>Abdomen X-rays (AX) </option>
                        <option value={1}>Chest X-rays (c) </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="reportday_1"
                        id="reportday_1"
                        placeholder
                        className="form-control text-right days"
                        readOnly
                        fdprocessedid="5lmue9"
                      />
                      <span className="text-danger" />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="reportdate_1"
                        id="reportdate_1"
                        placeholder
                        className="form-control text-right report_date"
                        fdprocessedid="6vamzk"
                      />
                      <span className="text-danger" />
                    </td>
                    <td className="text-right">
                      <div className>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control text-right right-border-none taxpercent"
                            name="taxpercent_1"
                            readOnly
                            id="taxpercent_1"
                            autoComplete="off"
                            fdprocessedid="wqxc4r"
                          />
                          <span className="input-group-addon "> %</span>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="taxamount_1"
                        id="taxamount_1"
                        placeholder
                        className="form-control text-right taxamount"
                        readOnly
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="text"
                        name="amount_1"
                        id="amount_1"
                        placeholder
                        className="form-control text-right amount"
                        readOnly
                        fdprocessedid="besnnl"
                      />
                      <span className="text-danger" />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="closebtn delete_rows"
                        data-row-id={1}
                        autoComplete="off"
                        fdprocessedid="0vxiw"
                      >
                        <ImCross className="fa fa-remove" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-2">
                <a
                  className="btn btn-info addplus-xs add-record mb10 "
                  data-added={0}
                >
                  <i className="fa fa-plus" /> Add
                </a>
              </div>
            </div>
            <div className="divider" />
            <div className="">
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <div className>
                      <div className>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="exampleInputFile">
                              Referral Doctor
                            </label>
                            <div>
                              <select
                                name="consultant_doctor"
                                style={{ width: "100%" }}
                                id="consultant_doctor"
                                onchange="get_Docname(this.value)"
                                className="form-control consultant_doctor select2"
                                autoComplete="off"
                                fdprocessedid="ded0k"
                              >
                                <option value>Select</option>
                                <option value={11}>Amit Singh ( 9009 )</option>
                                <option value={12}>Reyan Jain ( 9011 )</option>
                                <option value={4}>Sansa Gomez ( 9008 )</option>
                                <option value={2}>Sonia Bush ( 9002 )</option>
                              </select>
                            </div>
                            <span className="text-danger" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Doctor Name</label>
                            <input
                              name="doctor_name"
                              id="doctname"
                              type="text"
                              className="form-control"
                              autoComplete="off"
                              fdprocessedid="5w5eu5"
                            />
                            <span className="text-danger" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-10 ml-3">
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
                      <div className="col-md-11">
                        <div className="form-group">
                          <label
                            htmlFor="custom_fields[pathology][8]"
                            className="control-label"
                          >
                            Previous Report Value
                          </label>
                          <input
                            type="text"
                            id="custom_fields[pathology][8]"
                            name="custom_fields[pathology][8]"
                            className="form-control"
                            defaultValue
                            fdprocessedid="2h0i5"
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
                            fdprocessedid="ef7upi"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Discount ($)</th>
                        <td className="text-right ipdbilltable">
                          <h4
                            style={{
                              float: "right",
                              fontSize: 12,
                              paddingLeft: 5,
                            }}
                          >
                            %
                          </h4>
                          <input
                            type="text"
                            placeholder="Discount"
                            name="discount_percent"
                            id="discount_percent"
                            onchange="addTotal()"
                            className="form-control discount_percent"
                            style={{
                              width: "70%",
                              float: "right",
                              fontSize: 12,
                            }}
                            fdprocessedid="c3mbkr"
                          />
                        </td>
                        <td className="text-right ipdbilltable">
                          <input
                            type="text"
                            placeholder="Discount"
                            onkeyup="get_percentage(this.value)"
                            defaultValue={0}
                            name="discount"
                            id="discount"
                            style={{ width: "50%", float: "right" }}
                            className="form-control discount"
                            fdprocessedid="fpgzaa"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Tax ($)</th>
                        <td />
                        <td className="pull-right text-right ipdbilltable">
                          <input
                            type="text"
                            placeholder="Tax"
                            name="tax"
                            defaultValue={0}
                            id="tax"
                            style={{ width: "50%", float: "right" }}
                            className="form-control tax"
                            fdprocessedid="7qlidi"
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
                            fdprocessedid="skuyw"
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
                          fdprocessedid="5sd9t"
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
                        <label>Amount ($)</label>
                        <small className="req"> *</small>
                        <input
                          type="text"
                          name="amount"
                          id="payamount"
                          className="form-control text-right"
                          fdprocessedid="rl6e59"
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
                            <div
                              className="dropify-loader"
                              style={{ display: "none" }}
                            />
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
                            <div
                              className="dropify-preview"
                              style={{ display: "none" }}
                            >
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
            </div>
          </div>
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

export default AddPatientPathologyBilling;
