import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function IpdTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> IPD No</th>
            <th>Case Id</th>
            <th> Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th> Consultant</th>
            <th> Bed</th>

            <th>Previous Medical Issue</th>
            <th>Credit Limit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin/IPD-Patient/IPD-patient-Profile">IPDN61</Link>
            </td>
            <td>2876</td>
            <td>varun mahajan (629)</td>
            <td>Male</td>
            <td>87969078</td>
            <td>Sansa Gomez (9008)</td>
            <td>TF - 142-General Ward Male-3rd Floor</td>
            <td></td>
            <td>20000.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/IPD-Patient/IPD-patient-Profile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/admin/IPD-Patient/IPD-patient-Profile">IPDN92</Link>
            </td>
            <td>5827</td>
            <td>MAIREENA GOMAZ (1005)</td>
            <td>Male</td>
            <td> 9807567456</td>
            <td> Sonia Bush (9002)</td>
            <td>SF - 135-NICU-2nd Floor</td>
            <td> NA</td>
            <td>20000.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/IPD-Patient/IPD-patient-Profile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/IPD-Patient/IPD-patient-Profile">IPDN31</Link>
            </td>
            <td>2876</td>
            <td>Tanzim(8629)</td>
            <td>Male</td>
            <td>87969078</td>
            <td>Gomez salada(9008)</td>
            <td>TF - 142-General Ward Male-3rd Floor</td>
            <td></td>
            <td>20000.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/IPD-Patient/IPD-patient-Profile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/IPD-Patient/IPD-patient-Profile">IPDN61</Link>
            </td>
            <td>2876</td>
            <td>varun mahajan (629)</td>
            <td>Male</td>
            <td>87969078</td>
            <td>Sansa Gomez (9008)</td>
            <td>TF - 142-General Ward Male-3rd Floor</td>
            <td></td>
            <td>20000.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/IPD-Patient/IPD-patient-Profile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/IPD-Patient/IPD-patient-Profile">IPDN61</Link>
            </td>
            <td>2876</td>
            <td>varun mahajan (629)</td>
            <td>Male</td>
            <td>87969078</td>
            <td>Sansa Gomez (9008)</td>
            <td>TF - 142-General Ward Male-3rd Floor</td>
            <td></td>
            <td>20000.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/IPD-Patient/IPD-patient-Profile"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <FaEye />
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/IPD-Patient/IPD-patient-Profile">IPDN61</Link>
            </td>
            <td>2876</td>
            <td>varun mahajan (629)</td>
            <td>Male</td>
            <td>87969078</td>
            <td>Sansa Gomez (9008)</td>
            <td>TF - 142-General Ward Male-3rd Floor</td>
            <td></td>
            <td>20000.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="/admin/IPD-Patient/IPD-patient-Profile"
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

export default IpdTable;
