import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function OpdBalanceReportForm() {
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
            <Form.Label>From Age</Form.Label>
            <Form.Select required aria-label="Select From Age">
              <option value="">Choose...</option>
              <option value="consultation">0</option>
              <option value="follow-up">05</option>
              <option value="routine">10</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an From Age.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>To Age</Form.Label>
            <Form.Select required aria-label="Select To Age">
              <option value="">Choose...</option>
              <option value="consultation">SGS Pharmacy</option>
              <option value="follow-up">Anant Pharmacy</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an To Age.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Gender</Form.Label>
            <Form.Select required aria-label="Select Gender">
              <option value="">Choose...</option>
              <option value="consultation">SGS Pharmacy</option>
              <option value="follow-up">Anant Pharmacy</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Gender.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Discharged</Form.Label>
            <Form.Select required aria-label="Select Discharged">
              <option value="">Choose...</option>
              <option value="consultation">SGS Pharmacy</option>
              <option value="follow-up">Anant Pharmacy</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Discharged.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default OpdBalanceReportForm;
