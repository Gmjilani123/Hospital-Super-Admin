import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function OpdTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th>Patient Id</th>
            <th>Guardian Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th> Consultant</th>

            <th>Last Visit</th>
            <th>Total Recheckup</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin/OPD/PatientProfile">Stuart Wood</Link>
            </td>
            <td>580</td>
            <td> Martin Wood</td>
            <td>Male</td>
            <td>87969078</td>
            <td>Reyan Jain (9011)</td>
            <td>06/30/2024 02:51 PM</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/OPD/PatientProfile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Destan</Link>
            </td>
            <td>1034</td>
            <td></td>
            <td>Male</td>
            <td>3265160153</td>
            <td>Reyan Jain (9011)</td>
            <td>06/30/2024 02:51 PM</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/OPD/PatientProfile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Cristian Messina</Link>
            </td>
            <td>843</td>
            <td>David</td>
            <td>Male</td>
            <td>926055985</td>
            <td>Reyan Jain (9011)</td>
            <td>06/30/2024 01:05 PM</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/OPD/PatientProfile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Charles J. Wagner</Link>
            </td>
            <td>940</td>
            <td> Martin Wood</td>
            <td>Male</td>
            <td>8907567567</td>
            <td>Sansa Gomez (9008)</td>
            <td>06/30/2024 11:11 AM</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/OPD/PatientProfile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Robin Dahlberg</Link>
            </td>
            <td>844</td>
            <td> Robin</td>
            <td>Male</td>
            <td>893559858</td>
            <td>Reyan Jain (9011)</td>
            <td>06/30/2024 02:51 PM</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/OPD/PatientProfile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Stuart Wood</Link>
            </td>
            <td>580</td>
            <td> Martin Wood</td>
            <td>Male</td>
            <td>87969078</td>
            <td>Reyan Jain (9011)</td>
            <td>06/30/2024 02:51 PM</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/OPD/PatientProfile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OpdTable;
