import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function IpdReportForm() {
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
          {/* <Form.Group as={Col} md="4" controlId="validationCustom01">
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
            <Form.Label>Doctor</Form.Label>
            <Form.Select required aria-label="Select Doctor">
              <option value="">Choose...</option>
              <option value="consultation">Amit Singh (9001)</option>
              <option value="follow-up">Reyan Jain (8001)</option>
              <option value="routine">Samsa Gomez (9008)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Doctor.
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
              <option value="follow-up">5</option>
              <option value="follow-up">10</option>
              <option value="follow-up">15</option>
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
              <option value="consultation">5</option>
              <option value="follow-up">10</option>
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
              <option value="consultation">Male</option>
              <option value="follow-up">Female</option>
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
            <Form.Label>Symptoms</Form.Label>
            <Form.Select required aria-label="Select Symptoms">
              <option value="">Choose...</option>
              <option value="consultation">Eating Or Weight Problem</option>
              <option value="follow-up">Emotional Problem</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Symptoms.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Findings</Form.Label>
            <Form.Select required aria-label="Select Findings">
              <option value="">Choose...</option>
              <option value="consultation">Fever</option>
              <option value="follow-up">Skin Problem</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Findings.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default IpdReportForm;
