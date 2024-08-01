import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function AccordionForm() {
  return (
    <div>
      <div className="mb-5">
        <h5 className="ac_header">Payroll</h5>
        <div className="payrol_box">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label> EPF No.</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Basic Salary</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Contract Type</Form.Label>
                <Form.Select>
                  <option value="">Select</option>
                  <option value="1">Permanent</option>
                  <option value="2">Probation</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label> Work Shift </Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label> Work Location</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>

      <div className="mb-5">
        <h5 className="ac_header">Leaves</h5>
        <div className="payrol_box">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label> Medical Leave</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Casual Leave</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Maternity Leave</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Sick Leave</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>

      <div className="mb-5">
        <h5 className="ac_header">Bank Account Details</h5>
        <div className="payrol_box">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Account Title</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Bank Account Number</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Bank Branch Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>

      <div className="mb-5">
        <h5 className="ac_header">Upload Documents</h5>
        <div className="payrol_box">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" xl="3" controlId="validationCustom03">
                <Form.Label>Resume</Form.Label>
                <Form.Control type="file" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="6" xl="3" controlId="validationCustom03">
                <Form.Label>Joining Letter</Form.Label>
                <Form.Control type="file" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="6" xl="3" controlId="validationCustom03">
                <Form.Label> Resignation Letter</Form.Label>
                <Form.Control type="file" placeholder="" />
              </Form.Group>
              <Form.Group as={Col} md="6" xl="3" controlId="validationCustom03">
                <Form.Label>Other Documents</Form.Label>
                <Form.Control type="file" placeholder="" />
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AccordionForm;
