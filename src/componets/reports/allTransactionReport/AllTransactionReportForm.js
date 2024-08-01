


import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AllTransactionReportForm() {
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
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Time Duration </Form.Label>
            <Form.Select required aria-label="Select Time Duration  ">
              <option value="">Choose...</option>
              <option value="consultation">Surya Lalwani</option>
              <option value="follow-up">Apolline</option>
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
            <Form.Label>Collected By</Form.Label>
            <Form.Select required aria-label="Select Collected By">
              <option value="">Choose...</option>
              <option value="consultation">Syrup</option>
              <option value="follow-up">Capsule</option>
              <option value="routine">injection</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Collected By.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Collected By</Form.Label>
            <Form.Select required aria-label="Select Collected By">
              <option value="">Choose...</option>
              <option value="consultation">SGS Pharmacy</option>
              <option value="follow-up">Anant Pharmacy</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Collected By.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default AllTransactionReportForm;
