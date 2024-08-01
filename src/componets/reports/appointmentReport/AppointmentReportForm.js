import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AppointmentReportForm() {
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
            <Form.Label>Shift</Form.Label>
            <Form.Select required aria-label="Select Shift">
              <option value="">Choose...</option>
              <option value="consultation">Morning</option>
              <option value="follow-up">Evening</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Shift.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Shift</Form.Label>
            <Form.Select required aria-label="Select Shift">
              <option value="">Choose...</option>
              <option value="consultation">Morning</option>
              <option value="follow-up">Evening</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Shift.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Appointment Priority</Form.Label>
            <Form.Select required aria-label="Select Appointment Priority">
              <option value="">Choose...</option>
              <option value="consultation">Normal</option>
              <option value="follow-up">Urgent</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Appointment Priority.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Source</Form.Label>
            <Form.Select required aria-label="Select Source">
              <option value="">Choose...</option>
              <option value="consultation">Online</option>
              <option value="follow-up">Offline</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Source.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default AppointmentReportForm;
