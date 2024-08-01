import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ExpiryMadicineReportForm() {
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
            <Form.Label>Medicine Category</Form.Label>
            <Form.Select required aria-label="Select Medicine Category">
              <option value="">Choose...</option>
              <option value="consultation">Syrup</option>
              <option value="follow-up">Capsule</option>
              <option value="routine">injection</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Medicine Category.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Supplier</Form.Label>
            <Form.Select required aria-label="Select Supplier">
              <option value="">Choose...</option>
              <option value="consultation">SGS Pharmacy</option>
              <option value="follow-up">Anant Pharmacy</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an Supplier.
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group
            as={Col}
            md="3"
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
            md="3"
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
          </Form.Group> */}

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

export default ExpiryMadicineReportForm;
