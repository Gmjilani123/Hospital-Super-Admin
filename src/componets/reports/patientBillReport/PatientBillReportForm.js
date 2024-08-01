

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function PatientBillReportForm() {
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
          <div className="d-flex col-md-6">
            <h5>Case Id:-</h5>
            <input
              md="4"
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <Button type="submit" className="ml-2">
              Search
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default PatientBillReportForm;

