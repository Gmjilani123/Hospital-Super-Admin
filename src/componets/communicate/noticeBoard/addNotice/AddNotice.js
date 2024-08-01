import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddNotice({ title, btn }) {
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
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="app-ecommerce">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="card mb-4">
                <div className="card-body row">
                  <div className="mb-3">
                    <h5>{title}</h5>
                  </div>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="12"
                        md="12"
                        controlId="validationTitle"
                        className="mb-3"
                      >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Title.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        controlId="validationNoticeDate"
                        className="mb-3"
                      >
                        <Form.Label>Notice Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Notice Date"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Date.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        controlId="validationPublishedOn"
                        className="mb-3"
                      >
                        <Form.Label>Published On</Form.Label>
                        <Form.Control type="date" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a date.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="12"
                        md="12"
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
                        controlId="validationCheckboxGroup"
                        className="mb-3"
                      >
                        <Form.Label> Message To</Form.Label>
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
                    <Button type="submit">{btn}</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNotice;
