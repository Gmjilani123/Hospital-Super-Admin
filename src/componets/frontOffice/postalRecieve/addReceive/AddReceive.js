import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function AddReceive() {
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
          <h4>Add Receive</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Visitors/PostalRecieve" className="back_btn">
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
                        <Form.Label>Form Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Form Title"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Form Title.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Reference No</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Reference No"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Reference No.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a id date.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>To Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="To Title"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a id Title .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Attach Document</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Attach Document"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Document .
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="validationCustom09"
                        as={Col}
                      >
                        <Form.Label>Attach Document</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Attach Document"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Attach Document.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        md="6"
                        controlId="validationCustom09"
                        as={Col}
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Address"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide valid Address.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        md="6"
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

export default AddReceive;
