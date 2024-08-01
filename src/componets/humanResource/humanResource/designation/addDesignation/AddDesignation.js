import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FloatingLabel } from "react-bootstrap";

function AddDesignation({ title }) {
  const [validated, setValidated] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || selectedHostel === "") {
      event.stopPropagation();
    } else {
      // Handle successful form submission here
      console.log("Selected Hostel:", selectedHostel);
    }
    setValidated(true);
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
                    <h5>{title}</h5>
                  </div>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Name.
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
                        <Form.Label>Note</Form.Label>
                        <FloatingLabel className="mb-3">
                          <Form.Control type="text" placeholder="Note" />
                        </FloatingLabel>
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

export default AddDesignation;
