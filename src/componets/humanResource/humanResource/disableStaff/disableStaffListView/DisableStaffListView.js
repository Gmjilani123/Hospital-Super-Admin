// import EditIcon from "@mui/icons-material/Edit";
// import { Link } from "react-router-dom";
// import { PiEyeSlashLight } from "react-icons/pi";

function DisableStaffListView() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h5 className="mb-3">Disable Staff List</h5>
      <div>
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead className="border-top">
            <tr>
              <th>Staff ID</th>
              <th> Name</th>
              <th>Role</th>

              <th>Department</th>
              <th>Designation</th>
              <th>Mobile Number</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9000 </td>
              <td>Joe Black</td>
              <td>Super Admin</td>

              <td>Admin</td>
              <td>Technical Head</td>
              <td>6545645645</td>

              <td>
                {/* <div className="d-flex">
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
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisableStaffListView;
