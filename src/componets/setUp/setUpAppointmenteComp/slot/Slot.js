import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

function Slots() {
  const [validated, setValidated] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleSelectChange1 = (option) => {
    setSelectedOption1(option);
    console.log("Selected option 1:", option);
  };

  const handleSelectChange2 = (option) => {
    setSelectedOption2(option);
    console.log("Selected option 2:", option);
  };

  const options1 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const options2 = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
  return (
    <div>
      <h5 className="mb-3">Slots</h5>
      <div className="card-body row">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Doctor</Form.Label>
              <Select
                value={selectedOption1}
                onChange={handleSelectChange1}
                options={options1}
                placeholder="Select Doctor"
                required
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Doctor.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Shift</Form.Label>
              <Select
                value={selectedOption1}
                onChange={handleSelectChange1}
                options={options1}
                placeholder="Select"
                required
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Shift.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Charge Category</Form.Label>
              <input type="number" className="form-control" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Charge Category.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Charge Category</Form.Label>
              <Select
                value={selectedOption1}
                onChange={handleSelectChange1}
                options={options1}
                placeholder="Select Charge Category"
                required
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Charge Category.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Charge</Form.Label>
              <Select
                value={selectedOption1}
                onChange={handleSelectChange1}
                options={options1}
                placeholder="Select"
                required
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Charge.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Slots;
