

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import Print from "../../../../common/print/Print";

const options = [
  { value: "select1", label: "Select1" },
  { value: "select2", label: "Select2" },
  { value: "select3", label: "Select3" },
];

function OpdAddPatient() {
  const [validated, setValidated] = useState(false);
  const [selectedChargeCategory, setSelectedChargeCategory] = useState(null);
  const [selectedCharge, setSelectedCharge] = useState(null);
  const [selectedTPA, setSelectedTPA] = useState(null);
  const [selectedConsultantDoctor, setSelectedConsultantDoctor] =
    useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (
      form.checkValidity() === false ||
      !selectedChargeCategory ||
      !selectedCharge ||
      !selectedTPA ||
      !selectedConsultantDoctor
    ) {
      event.stopPropagation();
    } else {
      // Form is valid
      console.log({
        selectedChargeCategory,
        selectedCharge,
        selectedTPA,
        selectedConsultantDoctor,
      });
    }

    setValidated(true);
  };

  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Add Patient OPD-Bill</h4>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <Print />
            </div>
            <Link to="/admin/Bill/OPD-bill" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0 pb0">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="mb-4">
                <div className="card-body row">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="appointmentDate"
                        className="mb-3"
                      >
                        <Form.Label>Appointment Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Appointment Date"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Appointment Date.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="case"
                        className="mb-3"
                      >
                        <Form.Label>Case</Form.Label>
                        <Form.Control type="text" placeholder="Case" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Case.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                        className="mb-3"
                      >
                        <Form.Label>Casualty</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Casualty.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                        className="mb-3"
                      >
                        <Form.Label>Old Patient</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Old Patient.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                        className="mb-3"
                      >
                        <Form.Label>TPA</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid TPA.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="reference"
                        className="mb-3"
                      >
                        <Form.Label>Reference</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Reference"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Reference.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="consultantDoctor"
                        className="mb-3"
                      >
                        <Form.Label>Consultant Doctor</Form.Label>
                        <Select
                          options={options}
                          value={selectedConsultantDoctor}
                          onChange={setSelectedConsultantDoctor}
                          className={
                            validated && !selectedConsultantDoctor
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <div className="invalid-feedback">
                          Please provide a valid Consultant Doctor.
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="consultantDoctor"
                        className="mb-3"
                      >
                        <Form.Label>Charge Category</Form.Label>
                        <Select
                          options={options}
                          value={selectedChargeCategory}
                          onChange={setSelectedChargeCategory}
                          className={
                            validated && !selectedChargeCategory
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <div className="invalid-feedback">
                          Please provide a valid Charge Category.
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="consultantDoctor"
                        className="mb-3"
                      >
                        <Form.Label>Charge </Form.Label>
                        <Select
                          options={options}
                          value={selectedCharge}
                          onChange={setSelectedCharge}
                          className={
                            validated && !selectedCharge ? "is-invalid" : ""
                          }
                        />
                        <div className="invalid-feedback">
                          Please provide a valid Charge.
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="case"
                        className="mb-3"
                      >
                        <Form.Label>Tax</Form.Label>
                        <Form.Control type="text" placeholder="Tax" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Tax.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="case"
                        className="mb-3"
                      >
                        <Form.Label>Standard Charge ($)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Standard Charge ($)"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Standard Charge ($).
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="case"
                        className="mb-3"
                      >
                        <Form.Label>Applied Charge ($) </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Applied Charge ($) "
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Applied Charge ($) .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="case"
                        className="mb-3"
                      >
                        <Form.Label>Amount ($)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Amount ($)"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Amount ($).
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                        className="mb-3"
                      >
                        <Form.Label>Payment Mode</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Payment Mode.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="case"
                        className="mb-3"
                      >
                        <Form.Label>Paid Amount ($)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Paid Amount ($)"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Paid Amount ($).
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                        className="mb-3"
                      >
                        <Form.Label>Live Consultation</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select1</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Live Consultation.
                        </Form.Control.Feedback>
                      </Form.Group>
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
      </div>
    </div>
  );
}

export default OpdAddPatient;
