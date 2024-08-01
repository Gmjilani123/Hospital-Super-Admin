import Accordion from "react-bootstrap/Accordion";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PiPencilThin, PiCalendarCheck } from "react-icons/pi";
import { RxCalendar } from "react-icons/rx";
import { BiSolidUser } from "react-icons/bi";

function NoticeBoardAccordion() {
  return (
    <Accordion  className="my_accordion">
      <Accordion.Item eventKey="0" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Dental Health Awareness Camp</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Free Blood Camping</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Staff Notice</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>International Day of Yoga Program..</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Notice !!!!! Health Check-up</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Staff Meeting</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Dental Health Awareness Camp</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Happy New Year...!</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8" className="myaccordion_item">
        <Accordion.Header className="my_accodion_header">
          <div>Republic Day Celebration</div>
          <div className="edit_delete_btn">
            <div className="d-flex">
              <div className="tool_show_parent">
                <Link
                  to="/admin/notification/EditMessage"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-primary share_squar"
                >
                  <PiPencilThin />
                </Link>
              </div>

              <div className="tool_show_parent">
                <Link
                  to="#"
                  className="btn text-white btn-icon btn-circle btn-sm me-1 bg-danger share_squar"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="pt-2">
          <div className="row">
            <div className="col-md-9">
              <p>
                Their dental health awareness should be assessed by their
                dentists. If they are aware of their dental health they will be
                able to know what dental practices should they maintain in order
                to sustain the health of their teeth
                <br />
              </p>
            </div>
            {/* /.col */}
            <div className="col-md-3">
              <div className>
                <div className="box-body">
                  <ul className="nav nav-pills">
                    <li>
                      <PiCalendarCheck className="fa fa-calendar-check-o me-1" />
                      Publish Date : 05/30/2023
                    </li>
                    <li>
                      <RxCalendar className="fa fa-calendar" /> Notice Date :
                      05/26/2023{" "}
                    </li>
                  </ul>
                  <h4 className="text text-primary ptt10"> Message To</h4>
                  <ul className=" nav-stacked">
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Doctor{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pharmacist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Pathologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Radiologist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Super Admin{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Receptionist{" "}
                    </li>
                    <li>
                      <BiSolidUser className="fa fa-user" aria-hidden="true" />
                      Nurse{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default NoticeBoardAccordion;
