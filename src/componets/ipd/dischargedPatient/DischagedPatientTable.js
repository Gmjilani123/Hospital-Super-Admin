import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function DischagedPatientTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th> Patient Id</th>
            <th>Case Id</th>
            <th>Gender</th>
            <th>Phone</th>
            <th> Consultant</th>
            <th>admission Date</th>
            <th>Discharged Date</th>
            <th>Tax ($)</th>
            <th>Net Amount ($)</th>
            <th>Total ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="#">Angela Clark</Link>
            </td>
            <td>876</td>
            <td>4747</td>
            <td>Female</td>
            <td>87969078</td>
            <td>Sonia Bush (9002)</td>
            <td>09/28/2023 01:03 PM</td>
            <td>05/21/2024 04:09 PM</td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Elliot Coates</Link>
            </td>
            <td>8876</td>
            <td>47947</td>
            <td>Female</td>
            <td>07578381362</td>
            <td>Amit Singh (9009)</td>
            <td>09/16/2023 12:10 PM</td>
            <td>05/02/2024 01:46 PM</td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Candey wood</Link>
            </td>
            <td>533</td>
            <td>2283</td>
            <td>Female</td>
            <td>87969078</td>
            <td>Sansa Gomez (9008)</td>
            <td>11/11/2022 06:34 PM</td>
            <td> 03/20/2024 03:28 PM</td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="#">Evander Jonh</Link>
            </td>
            <td>288</td>
            <td>1002</td>
            <td>Male</td>
            <td>632598741</td>
            <td>Amit Singh (9009)</td>
            <td>04/03/2022 01:00 PM</td>
            <td>08/05/2022 10:23 AM</td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="#">Angela Clark</Link>
            </td>
            <td>876</td>
            <td>4747</td>
            <td>Female</td>
            <td>87969078</td>
            <td>Sonia Bush (9002)</td>
            <td>09/28/2023 01:03 PM</td>
            <td>05/21/2024 04:09 PM</td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="#">Angela Clark</Link>
            </td>
            <td>876</td>
            <td>4747</td>
            <td>Female</td>
            <td>87969078</td>
            <td>Sonia Bush (9002)</td>
            <td>09/28/2023 01:03 PM</td>
            <td>05/21/2024 04:09 PM</td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td>0.00 </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
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

export default DischagedPatientTable;
