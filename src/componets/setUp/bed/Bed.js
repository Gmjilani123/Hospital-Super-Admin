import { FiFileText } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

function Bed() {
  return (
    <div className="card" style={{ padding: "10px" }}>
      <h5>Bed</h5>

      <form className="row mb-3 mt-3 ">
        <div className="d-flex ">
          <ul className="report_list outlet_form">
            <li className="report_list_item">
              <NavLink to="BedStatus" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Bed Status</strong>
              </NavLink>
            </li>
            <li className="report_list_item">
              <NavLink to="BedList" className="px-3">
                <FiFileText className="menu-icon mb-1" />
                <strong>Bed</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </form>
      <Outlet></Outlet>
    </div>
  );
}

export default Bed;
