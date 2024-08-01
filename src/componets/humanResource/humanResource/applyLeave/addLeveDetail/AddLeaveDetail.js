import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FloatingLabel } from "react-bootstrap";

function AddLeaveDetail() {
  const [validated, setValidated] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState("");

  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || selectedHostel === "") {
      event.stopPropagation();
    } else {
      // Handle successful form submission here
      console.log("Selected Hostel:", selectedHostel);
    }

    if (form.checkValidity() === false || gender === "") {
      event.stopPropagation();
    } else {
    }
    setValidated(true);
  };

  const handleHostelChange = (event) => {
    setSelectedHostel(event.target.value);
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="app-ecommerce">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="card mb-4">
                <div className="card-body row">
                  <div className="mb-3">
                    <h5>Add Leave Detail</h5>
                  </div>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Apply Date</Form.Label>
                        <Form.Control type="date" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Staff ID.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Available Leave </Form.Label>
                        <Form.Select
                          required
                          value={selectedHostel}
                          onChange={handleHostelChange}
                        >
                          <option value="">Select</option>
                          <option value="1">Madical Leave (9)</option>
                          <option value="2">Casual Leave (7)</option>
                          <option value="3"> Maternity Leave (2)</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a Role.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Leave From Date</Form.Label>
                        <Form.Control type="date" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a date.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Leave to Date</Form.Label>
                        <Form.Control type="date" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a date.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="12"
                        md="12"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Reason</Form.Label>
                        <FloatingLabel className="mb-3">
                          <Form.Control type="text" placeholder="Reason" />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Label>Attached Document</Form.Label>
                        <Form.Control type="file" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a document.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
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

export default AddLeaveDetail;
