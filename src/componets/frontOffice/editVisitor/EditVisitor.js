import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function EditVisitor() {
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
          <h4>Edit Visitor</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors" className="back_btn">
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
                        <Form.Label>Purpose</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">Visit</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Purpose.
                        </Form.Control.Feedback>
                      </Form.Group>

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
                        controlId="validationCustom02"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Phone.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Id Card</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a id .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Visit To</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">Visit</option>
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
                        <Form.Label>IPD/OPD/Staff</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">Visit</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Purpose.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Related To</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a id .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Number Of Person</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Number Of Person"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a person .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Date.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>In Time</Form.Label>
                        <Form.Control type="time" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a in Time.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Out Time</Form.Label>
                        <Form.Control type="time" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Out Time.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                      >
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Note"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Note.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                      >
                        <Form.Label>Attach Document</Form.Label>
                        <Form.Control type="file" placeholder="Attach Document" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Attach Document.
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

export default EditVisitor;
