import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function IpdNewPatient() {
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
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
            <div className="d-flex flex-column justify-content-center">
              <h4 className="mb-1 mt-3">IPD Add-New Patient</h4>
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Guardian Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Guardian Name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Guardian Name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom07"
                      >
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" required>
                          <option value="">Select</option>
                          <option value="No">Male</option>
                          <option value="Yes">Female</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please select a Gender.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Date of Birth.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom07"
                      >
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control as="select" required>
                          <option>Select</option>
                          <option>B+</option>
                          <option>A+</option>
                          <option>AB+</option>
                          <option>AB-</option>
                          <option>O-</option>
                          <option>A-</option>
                          <option>B-</option>
                          <option>O-</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please select a Valid Blood Group.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom07"
                      >
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control as="select" required>
                          <option>Select</option>
                          <option>Single</option>
                          <option>Married</option>
                          <option>Separated</option>
                          <option>Widowed</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please select a Valid Blood Group.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Patient Photo</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Patient Photo"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Patient Photo.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Phone"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Phone.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Email.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Address.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>TPA ID</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid TPA ID.
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

                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                        md="6"
                      >
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Remarks"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Remarks.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>TPA Validity</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="TPA Validity"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a TPA Validity.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>National Identification Number</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid National Identification Number.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Alternate Number</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Alternate Number.
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

export default IpdNewPatient;
