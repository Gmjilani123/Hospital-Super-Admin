import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Print from "../../../common/print/Print";
import { Link } from "react-router-dom";

function AddBed() {
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
          <h4>Add Bed</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            {/* <div className="mr-2">
              <Print />
            </div> */}
            <Link to="/admin/Bed/BedList" className="back_btn">
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
                        md="12"
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
                        md="12"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Bed Type</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">Standard</option>
                          <option value="">Vip</option>
                          <option value="">Normal</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Bed Type.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        className="mb-3"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Bed Group</Form.Label>
                        <select name="" id="" className="form-select">
                          <option value="">select</option>
                          <option value="">VIP Ward- Ground Floor</option>
                          <option value="">Private ward 3rd Floor</option>
                          <option value="">General Ward male 3rd-floor</option>
                          <option value="">Icu-2nd-floor</option>
                        </select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Purpose.
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

export default AddBed;
