import { FiFileText } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

function FrontOfficeComp() {
  return (
    <div className="card" style={{ padding: "10px" }}>
      <h5>Front Office</h5>

      <form className="row mb-3 mt-3 ">
        <div className="d-flex ">
          <ul className="report_list outlet_form">
            <li className="report_list_item">
              <NavLink to="VisitorPurpose" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Purpose</strong>
              </NavLink>
            </li>
            <li className="report_list_item">
              <NavLink to="complainttype" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong> Complain Type</strong>
              </NavLink>
            </li>
            <li className="report_list_item">
              <NavLink to="Source" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Source</strong>
              </NavLink>
            </li>

            <li className="report_list_item">
              <NavLink to="AppointmentPriority" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Appointment Priority</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </form>
      <Outlet></Outlet>
    </div>
  );
}

export default FrontOfficeComp;
