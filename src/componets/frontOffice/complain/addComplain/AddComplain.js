import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function AddComplain() {
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
          <h4>Add Complain</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors/Complain" className="back_btn">
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
                        <Form.Label>Complain Type</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Complain Type.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Source</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">select</option>
                          <option value="">select</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Source.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Complain By</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Complain By"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Complain By.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Phone No.
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
                          Please provide a Date .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Action Taken</Form.Label>
                        <Form.Control type="text" placeholder="Upload" />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Assigned</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Assigned .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Attached Document</Form.Label>
                        <Form.Control type="file" placeholder="" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a document .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                        md="6"
                      >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Description"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Description.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                        md="6"
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

export default AddComplain;
