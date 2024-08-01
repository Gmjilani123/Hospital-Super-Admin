

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

import { Link } from "react-router-dom";
import Print from "../../../../../../../common/print/Print";

function EditVisitDetail() {
  const [validated, setValidated] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleSelectChange1 = (option) => {
    setSelectedOption1(option);
    console.log("Selected option 1:", option);
  };

  const handleSelectChange2 = (option) => {
    setSelectedOption2(option);
    console.log("Selected option 2:", option);
  };

  const options1 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const options2 = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="app-ecommerce">
          <div>
            <div className="prescription_header_sec">
              <div>
                <h4>Edit Visit Detail</h4>
              </div>
              <div>
                <div className="d-flex" style={{ alignItems: "center" }}>
                  <Link
                    to="/admin/Bill/OPD-bill/patient-profile-1081/detail"
                    className="back_btn"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="card mb-4">
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
                          controlId="validationCustom01"
                        >
                          <Form.Label>Height</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Height"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Height.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom02"
                        >
                          <Form.Label>Weight</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Weight"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Weight.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom03"
                        >
                          <Form.Label>BP</Form.Label>
                          <Form.Control type="text" placeholder="BP" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid BP.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom04"
                        >
                          <Form.Label>Pulse</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Pulse"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Pulse.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom05"
                        >
                          <Form.Label>Temperature</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Temperature"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Temperature.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom05"
                        >
                          <Form.Label>Respiration</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Respiration"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Respiration.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom06"
                        >
                          <Form.Label>Symptoms Type</Form.Label>
                          <Select
                            value={selectedOption1}
                            onChange={handleSelectChange1}
                            options={options1}
                            placeholder="Select Symptoms Type"
                            required
                            className="react-select-container"
                            classNamePrefix="react-select"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Symptoms Type.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom06"
                        >
                          <Form.Label>Symptoms Title</Form.Label>
                          <Select
                            value={selectedOption1}
                            onChange={handleSelectChange1}
                            options={options1}
                            placeholder="Select"
                            required
                            className="react-select-container"
                            classNamePrefix="react-select"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Symptoms title.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row className="mb-1">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom09"
                          as={Col}
                          md="4"
                        >
                          <Form.Label>Symptoms Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder="Symptoms Description"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide valid Symptoms Description.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom09"
                          as={Col}
                          md="4"
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

                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom09"
                          as={Col}
                          md="4"
                        >
                          <Form.Label>Any Known Allergies</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder="Any Known Allergies"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide valid Any Known Allergies.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom09"
                        >
                          <Form.Label>Previous Medical Issue</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder=""
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide valid Previous Medical Issue.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <div
                        className="p-3"
                        style={{ backgroundColor: "#f3f3f3" }}
                      >
                        <Row className="mb-3">
                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom01"
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
                            controlId="validationCustom02"
                          >
                            <Form.Label>Case</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Case"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Case.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom07"
                          >
                            <Form.Label>Casualty</Form.Label>
                            <Form.Control as="select" required>
                              <option value="">Select</option>
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please select a Casualty.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom07"
                          >
                            <Form.Label>Old Patient</Form.Label>
                            <Form.Control as="select" required>
                              <option value="">Select</option>
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please select a Casualty.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>

                        <Row className="mb-3">
                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom07"
                          >
                            <Form.Label>TPA</Form.Label>
                            <Form.Control as="select" required>
                              <option value="">Select</option>
                              <option value="No">Health Life insuarance</option>
                              <option value="Yes">
                                Star Health insuarance
                              </option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please select a Casualty.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom01"
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
                            controlId="validationCustom06"
                          >
                            <Form.Label>Consultant Doctor </Form.Label>
                            <Select
                              value={selectedOption1}
                              onChange={handleSelectChange1}
                              options={options1}
                              placeholder="Select Consultant Doctor "
                              required
                              className="react-select-container"
                              classNamePrefix="react-select"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a Consultant Doctor .
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom06"
                          >
                            <Form.Label>Charge Category</Form.Label>
                            <Select
                              value={selectedOption1}
                              onChange={handleSelectChange1}
                              options={options1}
                              placeholder="SelectCharge Category "
                              required
                              className="react-select-container"
                              classNamePrefix="react-select"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a Charge Category .
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>

                        <Row className="mb-3">
                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom07"
                          >
                            <Form.Label>TPA</Form.Label>
                            <Form.Control as="select" required>
                              <option value="">Select</option>
                              <option value="No">Health Life insuarance</option>
                              <option value="Yes">
                                Star Health insuarance
                              </option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please select a Casualty.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom01"
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
                            controlId="validationCustom06"
                          >
                            <Form.Label>Consultant Doctor </Form.Label>
                            <Select
                              value={selectedOption1}
                              onChange={handleSelectChange1}
                              options={options1}
                              placeholder="Select Consultant Doctor "
                              required
                              className="react-select-container"
                              classNamePrefix="react-select"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a Consultant Doctor .
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom06"
                          >
                            <Form.Label>Charge Category</Form.Label>
                            <Select
                              value={selectedOption1}
                              onChange={handleSelectChange1}
                              options={options1}
                              placeholder="SelectCharge Category "
                              required
                              className="react-select-container"
                              classNamePrefix="react-select"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a Charge Category .
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                      </div>

                      <div className="d-flex mt-3">
                        <Button type="submit" className="me-1">
                          Save
                        </Button>
                        <Print />
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVisitDetail;
