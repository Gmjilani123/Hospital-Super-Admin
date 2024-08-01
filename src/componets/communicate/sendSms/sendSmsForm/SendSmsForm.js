import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function SendSmsForm() {
  const [validated, setValidated] = useState(false);
  const [content, setContent] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      form.checkValidity() === false ||
      content.trim() === "" ||
      selectedOptions.length === 0
    ) {
      event.stopPropagation();
    } else {
      // Handle successful form submission here
      console.log("Form submitted successfully.");
      console.log("Content:", content);
      console.log("Selected Options:", selectedOptions);
      // Reset form and content state if needed
    }
    setValidated(true);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

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
    <div className="content-wrapper">
      <div className="app-ecommerce">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="card mb-4">
              <div className="card-body row">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group controlId="validationTitle" className="mb-3">
                      <Form.Label>Email Template</Form.Label>
                      <Form.Control as="select" required>
                        <option value="">Select</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please provide a Email Template.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationTitle" className="mb-3">
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder="" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a Title.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <div className="d-flex align-items-center mt-2 mb-2">
                        <label htmlFor="" className="me-4">
                          <strong>Send Through:-</strong>
                        </label>
                        <label className="me-4">
                          <input
                            type="checkbox"
                            name="apple"
                            checked={checkedItems.apple}
                            onChange={handleCheckboxChange}
                            className="me-2"
                          />
                          SMS
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="banana"
                            checked={checkedItems.banana}
                            onChange={handleCheckboxChange}
                            className="me-2"
                          />
                          Mobile App
                        </label>
                      </div>
                    </Form.Group>

                    <Form.Group
                      controlId="validationAttachment"
                      className="mb-3"
                    >
                      <Form.Label>Template ID:- </Form.Label>
                      (This field is reqiured Only For Indian SMS Gateway)
                      <Form.Control type="text" placeholder="" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a Template ID .
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      controlId="validationAttachment"
                      className="mb-3"
                    >
                      <Form.Label>Message </Form.Label>

                      <textarea
                        className="form-control"
                        id="exampleTextarea"
                        rows="4"
                      ></textarea>
                      <Form.Control.Feedback type="invalid">
                        Please provide a Template ID .
                      </Form.Control.Feedback>
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
                  <Button type="submit">Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendSmsForm;
