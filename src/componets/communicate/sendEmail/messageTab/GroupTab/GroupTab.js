import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

function GroupTab() {
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); // State for selected checkboxes

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (selectedOptions.length === 0) {
      event.stopPropagation();
    } else {
      // Handle successful form submission here
      console.log("Form submitted successfully.");
      console.log("Selected Options:", selectedOptions);
      // Reset form and selected options state if needed
    }
    setValidated(true);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  const checkboxOptions = [
    "Student",
    "Parent",
    "Admin",
    "Teacher",
    "Accountant",
    "Librarian",
    "Receptionist",
  ];

  return (
    <div className="card-body row">
      <div className="mb-3">
        <h5>Message To</h5>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            xl="12"
            md="12"
            controlId="validationCheckboxGroup"
            className="mb-3"
          >
            <Form.Label>Message To</Form.Label>
            {checkboxOptions.map((option, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                id={`checkbox-${index}`}
                label={option}
                value={option}
                onChange={handleCheckboxChange}
                checked={selectedOptions.includes(option)}
                required
              />
            ))}
            {validated && selectedOptions.length === 0 && (
              <div className="invalid-feedback d-block">
                Please select at least one option.
              </div>
            )}
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default GroupTab;
