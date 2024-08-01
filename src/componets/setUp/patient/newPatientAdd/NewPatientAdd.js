import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function NewPatientAdd() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Add Patient</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/PatientList" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pt0 pb0">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className=" mb-4">
                <div className="card-body row">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Guardian Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Guardian Name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Guardian Name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Gender</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">Male</option>
                          <option value="">Female</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Gender.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        className="mb-3"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Date Of Birth"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Date Of Birth.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        className="mb-3"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Age (yy-mm-dd)</Form.Label>
                        <Form.Control type="date" placeholder="Age" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Age.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Blood Group</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">B+</option>
                          <option value="">A+</option>
                          <option value="">AB+</option>
                          <option value="">AB-</option>
                          <option value="">O-</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Purpose.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a id Phone.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a id Email.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a id Address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                      >
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Remarks"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Remarks.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                      >
                        <Form.Label>Any Known Allergies</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Any Known Allergies"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Any Known Allergies.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>TPA ID</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="TPA ID"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid TPA ID.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>TPA Validity</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="TPA Validity"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid TPA Validity.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>National Identification Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="National Identification Number"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid National Identification Number.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Alternate Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Alternate Number"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Alternate Number.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <div className="d-flex mt-3">
                      <Button type="submit" className="me-1">
                        Save
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default NewPatientAdd;
