import React, { useState } from "react";
import { Row, Form } from "react-bootstrap";

const ClassTab = () => {
  const [checkedItems, setCheckedItems] = useState({
    apple: false,
    banana: false,
    cherry: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <div>
      <div>
        <h4>Message To</h4>
        <Form>
          <Row className="mb-3">
            <Form.Group controlId="validationTitle" className="mb-3">
              <Form.Control as="select" required>
                <option value="">Select</option>
                <option value="option1">Class 1</option>
                <option value="option2">Class 2</option>
                <option value="option3">Class 3</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please provide a Email Template.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <h5 className="mb-4">Section</h5>
      <div>
        <label>
          <input
            type="checkbox"
            name="apple"
            checked={checkedItems.apple}
            onChange={handleCheckboxChange}
            className="me-2"
          />
          A
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="banana"
            checked={checkedItems.banana}
            onChange={handleCheckboxChange}
            className="me-2"
          />
          B
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cherry"
            checked={checkedItems.cherry}
            onChange={handleCheckboxChange}
            className="me-2"
          />
          C
        </label>
      </div>
    </div>
  );
};

export default ClassTab;
