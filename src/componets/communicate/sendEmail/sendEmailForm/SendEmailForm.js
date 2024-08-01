import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReactQuill from "react-quill";


function SendEmailForm() {
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

                    <Form.Group
                      controlId="validationAttachment"
                      className="mb-3"
                    >
                      <Form.Label>Attachment</Form.Label>
                      <Form.Control type="file" placeholder="" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a file.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      xl="12"
                      md="12"
                      controlId="validationMessage"
                      className="mb-3"
                    >
                      <Form.Label>Message</Form.Label>
                      <ReactQuill
                        value={content}
                        onChange={handleContentChange}
                        placeholder="Start typing..."
                        theme="snow"
                      />
                      {validated && content.trim() === "" && (
                        <div className="invalid-feedback d-block">
                          Please provide a message.
                        </div>
                      )}
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

export default SendEmailForm;
