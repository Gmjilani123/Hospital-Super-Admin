import React, { useState } from "react";
import { FloatingLabel } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Accordian from "./Accordian/Accordian";
function CreateStaff({ title }) {
  const [validated, setValidated] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState("");

  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || selectedHostel === "") {
      event.stopPropagation();
    } else {
      // Handle successful form submission here
      console.log("Selected Hostel:", selectedHostel);
    }

    if (form.checkValidity() === false || gender === "") {
      event.stopPropagation();
    } else {
    }
    setValidated(true);
  };

  const handleHostelChange = (event) => {
    setSelectedHostel(event.target.value);
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="app-ecommerce">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="card mb-4">
                <div className="card-body row">
                  <h5>{title}</h5>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Staff ID</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Staff ID.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                          required
                          value={selectedHostel}
                          onChange={handleHostelChange}
                        >
                          <option value="">Select</option>
                          <option value="1">Admin</option>
                          <option value="2">Teacher</option>
                          <option value="3"> Accountant</option>
                          <option value="4"> Librarian</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a Role.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Designation</Form.Label>
                        <Form.Select>
                          <option value="">Select</option>
                          <option value="1">Faculty</option>
                          <option value="2">Accountant</option>
                          <option value="3"> Admin</option>
                          <option value="4"> Receptionist</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Department</Form.Label>
                        <Form.Select>
                          <option value="">Select</option>
                          <option value="1">Academinc</option>
                          <option value="2">Library</option>
                          <option value="3"> Sport</option>
                          <option value="4"> Science</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Father Name</Form.Label>
                        <Form.Control type="text" placeholder="Father Name" />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control type="text" placeholder="Mother Name" />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Email (Login Username)</Form.Label>
                        <Form.Control
                          required
                          type="Email"
                          placeholder="Email"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please fill Email
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                          required
                          value={selectedHostel}
                          onChange={handleHostelChange}
                        >
                          <option value="">Select</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a Gender.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Date of Birth"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please fill Date of Birth
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Date Of Joining</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Date Of Joining"
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Emergency Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Emergency Contact Number"
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Select>
                          <option value="">Select</option>
                          <option value="1">Single</option>
                          <option value="2">Married</option>
                          <option value="3"> Widow</option>
                          <option value="4"> Seperated</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Address</Form.Label>
                        <FloatingLabel className="mb-3">
                          <Form.Control type="text" placeholder="Address" />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        xl="6"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Permanent Address</Form.Label>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Address"
                          className="mb-3"
                        >
                          <Form.Control type="text" />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xl="3"
                        md="6"
                        sm="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Qualification</Form.Label>
                        <FloatingLabel className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Qualification"
                          />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group as={Col} xl="3" md="6" sm="12">
                        <Form.Label>Work Experience</Form.Label>
                        <FloatingLabel
                          controlId="floatingInput"
                          className="mb-3"
                        >
                          <Form.Control type="text" />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group as={Col} xl="6" md="6" sm="12">
                        <Form.Label>Note </Form.Label>
                        <FloatingLabel
                          controlId="floatingInput"
                          className="mb-3"
                        >
                          <Form.Control type="text" />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Label>Pan Number</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Pan No.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Accordian />

                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
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

export default CreateStaff;
