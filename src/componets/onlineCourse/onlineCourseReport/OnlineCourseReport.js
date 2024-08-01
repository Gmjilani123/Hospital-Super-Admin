import { NavLink, Outlet } from "react-router-dom";
import { FiFileText } from "react-icons/fi";

function OnlineCourseReport() {
  return (
    <div className="card" style={{ padding: "10px" }}>
      <h5>Online Course Report</h5>

      <form className="row mb-5">
        <div className="d-flex">
          <ul className="report_list">
            <li className="report_list_item col-lg-4 col-md-4 col-sm-6">
              <NavLink to="studentCoures">
                <FiFileText className="menu-icon mb-1" />
                <strong>Student Course Purchase Report</strong>
              </NavLink>
            </li>
            <li className="report_list_item col-lg-4 col-md-4 col-sm-6">
              <NavLink to="course-rating-report">
                <FiFileText className="menu-icon mb-1" />
                <strong>Course Rating Report</strong>
              </NavLink>
            </li>
            <li className="report_list_item col-lg-4 col-md-4 col-sm-6">
              <NavLink to="guest-report">
                <FiFileText className="menu-icon mb-1" />
                <strong>Guest Report</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </form>
      <Outlet></Outlet>
    </div>
  );
}

export default OnlineCourseReport;
