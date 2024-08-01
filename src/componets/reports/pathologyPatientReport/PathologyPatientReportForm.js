// import React from 'react'

// function PathologyPatientReportForm() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default PathologyPatientReportForm

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function PathologyPatientReportForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Form is valid
      event.preventDefault(); // Prevent default form submission behavior
      // Handle form data here
      console.log("Form submitted successfully");
    }

    setValidated(true);
  };
  return (
    <div className="form_container_reports">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* <Form.Group as={Col}md="3" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Time Duration </Form.Label>
            <Form.Select required aria-label="Select Time Duration ">
              <option value="">Choose...</option>
              <option value="consultation">Today</option>
              <option value="follow-up">This Week</option>
              <option value="routine">Last Week</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Time Duration .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Sample Collected Person Name</Form.Label>
            <Form.Select
              required
              aria-label="Select Sample Collected Person Name"
            >
              <option value="">Choose...</option>
              <option value="consultation">Belina Tuner (9005)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Sample Collected Person Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Category Name</Form.Label>
            <Form.Select required aria-label="Select Category Name">
              <option value="">Choose...</option>
              <option value="consultation">Clinical Microbiology</option>
              <option value="follow-up">Hamotology</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Category Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Test Name</Form.Label>
            <Form.Select required aria-label="Select Test Name">
              <option value="">Choose...</option>
              <option value="consultation">Chest X-ray(C)</option>
              <option value="follow-up">Breast UltraSound(BU)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Test Name.
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group
            as={Col}
           md="3"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Symptoms</Form.Label>
            <Form.Select required aria-label="Select Symptoms">
              <option value="">Choose...</option>
              <option value="consultation">Eating Or Weight Problem</option>
              <option value="follow-up">Emotional Problem</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Symptoms.
            </Form.Control.Feedback>
          </Form.Group> */}

          {/* <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Discharge Status</Form.Label>
            <Form.Select required aria-label="Select Discharge Status">
              <option value="">Choose...</option>
              <option value="consultation">Death</option>
              <option value="follow-up"> Refferal</option>
              <option value="follow-up">Normal</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Discharge Status.
            </Form.Control.Feedback>
          </Form.Group> */}
        </Row>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default PathologyPatientReportForm;
