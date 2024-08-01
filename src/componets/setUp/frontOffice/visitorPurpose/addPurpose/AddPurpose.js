import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function AddPurpose() {
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
          <h4>Add Purpose</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link
              to="/admin/setupFrontOffice/VisitorPurpose"
              className="back_btn"
            >
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
                        <Form.Control
                          type="text"
                          placeholder="Purpose"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Purpose.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Time From</Form.Label>
                        <textarea name="" rows={3} id="" className="form-control"></textarea>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Time From.
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

export default AddPurpose;
