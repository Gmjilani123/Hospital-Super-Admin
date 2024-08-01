import EditIcon from "@mui/icons-material/Edit";

import { Link } from "react-router-dom";
import { PiEyeSlashLight } from "react-icons/pi";

function StaffListView() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h5>Staff List</h5>
      <div>
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead className="border-top">
            <tr>
              <th>Staff ID</th>
              <th>Staff Name</th>
              <th>Role</th>

              <th>Department</th>
              <th>Designation</th>
              <th>Mobile Number</th>
              <th>Pan Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9000 </td>
              <td>
                <Link to="/admin/Staff-Directory/Staff-Profile">Joe Black</Link>
              </td>
              <td>Super Admin</td>

              <td>Admin</td>
              <td>Technical Head</td>
              <td>6545645645</td>
              <td>ALWPG5809L</td>

              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/admin/Staff-Directory/Edit-staff"
                      className="btn btn-primary btn-icon btn-circle btn-sm"
                    >
                      <EditIcon />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002 </td>
              <td>
                <Link to="/admin/Staff-Directory/Staff-Profile">
                  Shivam Verma
                </Link>
              </td>
              <td>Teacher</td>

              <td>Academic</td>
              <td>Faculty</td>
              <td>9552654564 </td>
              <td>RLWEG5809L </td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/admin/Staff-Directory/Edit-staff"
                      className="btn btn-primary btn-icon btn-circle btn-sm"
                    >
                      <EditIcon />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9006 </td>
              <td>
                <Link to="/admin/Staff-Directory/Staff-Profile">
                  Brandon Heart
                </Link>
              </td>
              <td>Librarian</td>

              <td>Library</td>
              <td>Librarian</td>
              <td>34564654 </td>
              <td> ALWPG5825H</td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/admin/Staff-Directory/Edit-staff"
                      className="btn btn-primary btn-icon btn-circle btn-sm"
                    >
                      <EditIcon />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002 </td>
              <td>
                <a href="">William Abbot</a>
              </td>
              <td>Admin</td>

              <td>Admin</td>
              <td>Principal</td>
              <td> 56465465</td>
              <td> ERTPG5809L</td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/admin/Staff-Directory/Edit-staff"
                      className="btn btn-primary btn-icon btn-circle btn-sm"
                    >
                      <EditIcon />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002 </td>
              <td>
                <a href="">Jason Sharlton</a>
              </td>
              <td>Teacher </td>

              <td>Academic</td>
              <td>Faculty</td>
              <td> 46546654564</td>
              <td> UlYEG5809L</td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/admin/Staff-Directory/Edit-staff"
                      className="btn btn-primary btn-icon btn-circle btn-sm"
                    >
                      <EditIcon />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>9002 </td>
              <td>
                <a href="">James Deckar</a>
              </td>
              <td>Accountant</td>

              <td>Accountant</td>
              <td>Finance</td>
              <td>Manu Deckar</td>
              <td>Jen Deckar</td>
              <td>
                <div className="d-flex">
                  <div className="me-1">
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile"
                      className="btn btn-info btn-icon btn-circle btn-sm"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiEyeSlashLight />
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/admin/vehicle/Edit-vehicle"
                      className="btn btn-primary btn-icon btn-circle btn-sm"
                    >
                      <EditIcon />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffListView;
