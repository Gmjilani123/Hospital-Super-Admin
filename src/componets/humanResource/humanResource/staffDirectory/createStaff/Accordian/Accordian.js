import Accordion from "react-bootstrap/Accordion";

import AccordionForm from "../accodion-form/AccordionForm";
function Accordian() {
  return (
    <>
      <Accordion defaultActiveKey="0" className="accor mb-3">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Add More Details</Accordion.Header>
          <Accordion.Body className="accor_body">
            <AccordionForm />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Accordian;
