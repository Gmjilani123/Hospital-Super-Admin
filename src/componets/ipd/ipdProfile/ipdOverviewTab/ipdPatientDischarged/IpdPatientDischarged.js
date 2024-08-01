import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

function IpdPatientDischarged({ title }) {
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
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="app-ecommerce">
          <div>
            <div className="prescription_header_sec">
              <div>
                <h4>Patient Discharge</h4>
              </div>
              <div>
                <div className="d-flex" style={{ alignItems: "center" }}>
                  <Link
                    to="/admin/IPD-Patient/IPD-patient-Profile"
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
                          md="6"
                          controlId="validationCustom01"
                        >
                          <Form.Label>Discharge Date</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Discharge Date"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid Discharge Date.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="6"
                          controlId="validationCustom03"
                          className=""
                        >
                          <Form.Label>Discharge Status</Form.Label>
                          <select name="" id="" className="form-control">
                            <option value="">select</option>
                            <option value="">Cash</option>
                            <option value="">Online</option>
                          </select>
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid BP.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom09"
                        >
                          <Form.Label>Note</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder=""
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide valid Note.
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
                          <Form.Label>Operation</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder=""
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
                          md="6"
                        >
                          <Form.Label>Diagnosis</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder=""
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide valid Note.
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
                          <Form.Label>Investigation</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder=""
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide valid Investigation.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="validationCustom09"
                          as={Col}
                          md="6"
                        >
                          <Form.Label>Treatment At Home</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder=""
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide valid Treatment At Home.
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
    </div>
  );
}

export default IpdPatientDischarged;
