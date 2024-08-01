import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function DoctorAppointment() {
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
              <h4 className="mb-1 mt-3">Doctor Wise Appointment</h4>
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
                        controlId="validationCustom07"
                      >
                        <Form.Label>Choose Doctor</Form.Label>
                        <Form.Control as="select" required>
                          <option value="">Choose...</option>
                          <option value="drsmith">Dr. Smith</option>
                          <option value="drjohnson">Dr. Johnson</option>
                          <option value="drwilliams">Dr. Williams</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please select a doctor.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Button type="submit">Search</Button>
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

export default DoctorAppointment;
