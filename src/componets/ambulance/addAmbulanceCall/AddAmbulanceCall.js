import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import Print from "../../../common/print/Print";

function AddAmbulanceCall() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Add Ambulance Call</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="me-2">
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
            <div className="col-12 col-lg-12">
              <div className=" mb-4">
                <div className="card-body row">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Driver Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Driver Name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Driver Name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Vehicle Model</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Vehicle Model.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Date.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Charge Category</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Charge Category.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Charge Name</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Charge Name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Standard Charge ($)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Standard Charge"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Standard Charge.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                        md="6"
                      >
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Note"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Note.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <div className="col-sm-8">
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
                                  fdprocessedid="rtniha"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>Tax ($)</th>
                              <td className="text-right ipdbilltable">
                                <h4
                                  style={{
                                    float: "right",
                                    fontSize: 12,
                                    paddingLeft: 5,
                                  }}
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
                                  style={{
                                    width: "70%",
                                    float: "right",
                                    fontSize: 12,
                                  }}
                                  fdprocessedid="wjo3f"
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
                                  fdprocessedid="vvlmdt"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>Net Amount ($)</th>
                              <td
                                colSpan={2}
                                className="text-right ipdbilltable"
                              >
                                <input
                                  type="text"
                                  placeholder="Net Amount"
                                  defaultValue={0}
                                  name="net_amount"
                                  id="net_amount"
                                  style={{ width: "30%", float: "right" }}
                                  className="form-control net_amount"
                                  readOnly
                                  fdprocessedid="4xgmg"
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
                                fdprocessedid="f6n4q1"
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
                                fdprocessedid="dsftuf"
                              />
                              <span className="text-danger" />
                            </div>
                          </div>
                          <div
                            className="cheque_div"
                            style={{ display: "none" }}
                          >
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
                                  <div className="dropify-loader" />
                                  <div className="dropify-errors-container">
                                    <ul />
                                  </div>
                                  <input
                                    type="file"
                                    className="filestyle form-control"
                                    name="document"
                                  />
                                  <button
                                    type="button"
                                    className="dropify-clear"
                                  >
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
                    </Row>

                    <div className="d-flex mt-3">
                      <Button type="submit" className="me-1">
                        Save
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default AddAmbulanceCall;
