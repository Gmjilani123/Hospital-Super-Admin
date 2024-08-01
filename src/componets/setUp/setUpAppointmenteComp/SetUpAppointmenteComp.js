import { FiFileText } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

function SetUpAppointmenteComp() {
  return (
    <div className="card" style={{ padding: "10px" }}>
      <h5>Appointment</h5>

      <form className="row mb-3 mt-3 ">
        <div className="d-flex ">
          <ul className="report_list outlet_form">
            <li className="report_list_item">
              <NavLink to="Slots" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Slots</strong>
              </NavLink>
            </li>
            <li className="report_list_item">
              <NavLink to="DoctorShift" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Doctor Shift</strong>
              </NavLink>
            </li>
            <li className="report_list_item">
              <NavLink to="Shift" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Shift</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </form>
      <Outlet></Outlet>
    </div>
  );
}

export default SetUpAppointmenteComp;
