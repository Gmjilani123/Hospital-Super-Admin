import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";

function CourseCategoryTable() {
  return (
    <table
      className="datatables-users table dataTable no-footer dtr-column"
      id="DataTables_Table_0"
      aria-describedby="DataTables_Table_0_info"
    >
      <thead className="border-top">
        <tr>
          <th>Category Name</th>
          <th></th>
          <th></th>
          <th> Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Personal Development</td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <div className="d-flex">
              <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                >
                  <EditIcon />
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>Health & Fitness Courses </td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <div className="d-flex">
              <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                >
                  <EditIcon />
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>Network & Security Course</td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <div className="d-flex">
              <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                >
                  <EditIcon />
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Lifestyle course</td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <div className="d-flex">
              <div>
                <Link
                  to={`#`}
                  className="btn btn-primary btn-icon btn-circle btn-sm"
                >
                  <EditIcon />
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger btn-icon btn-circle btn-sm ms-1"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseCategoryTable;
