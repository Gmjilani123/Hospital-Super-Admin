import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

function AddAmbulance() {
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
          <h4>Add Ambulance</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <Link to="/admin/Ambulance/AmbulanceList" className="back_btn">
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
                        <Form.Label>Vehicle Number </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vehicle Number "
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Vehicle Number .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Vehicle Model</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vehicle Model"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Vehicle Model.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Year Made</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Year Made"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Year Made.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

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
                        controlId="validationCustom01"
                      >
                        <Form.Label>Driver License</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Driver License"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Driver License.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Driver Contact</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Driver Contact"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Driver Contact.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vehicle Type"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Vehicle Type.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                        md="8"
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

export default AddAmbulance;
