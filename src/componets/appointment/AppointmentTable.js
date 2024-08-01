import { Link } from "react-router-dom";

function AppointmentTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Patient Name</th>
            <th>Appointment No</th>

            <th>Appointment Date</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Doctor</th>
            <th>Source</th>
            <th>Priority</th>
            <th>Live Consultant</th>
            <th>Alternate Address</th>
            <th>Fees</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin/Appointment/PatientDetails">
                Aadish Mody (1072)
              </Link>
            </td>
            <td>APPNO6332</td>
            <td> 06/29/2024 07:00 AM</td>
            <td>9522545414</td>
            <td>Female</td>
            <td>Amit Singh (9009) </td>
            <td>Online</td>
            <td>Normal</td>
            <td></td>
            <td> 1278, Diwan Hall Road, Lajpat Rai Market</td>
            <td>144.00 </td>

            <td>
              <span className="btn btn-success btn-sm ">Approved</span>
            </td>
          </tr>

          <tr>
            <td>
             <Link to="/admin/Appointment/PatientDetails">
                Aadish Mody (1072)
              </Link>
            </td>
            <td>APPNO6331</td>
            <td>06/24/2024 05:15 PM</td>
            <td>9522545414</td>
            <td>Female</td>
            <td>Amit Singh (9009) </td>
            <td>Online</td>
            <td>Low</td>
            <td></td>
            <td> 7, Kapadia House, Near Rly Station, Virar</td>
            <td>144.00 </td>

            <td>
              <span className="btn btn-success btn-sm ">Approved</span>
            </td>
          </tr>

          <tr>
            <td>
             <Link to="/admin/Appointment/PatientDetails">
                Aadish Mody (1072)
              </Link>
            </td>
            <td>APPNO6330</td>
            <td> 06/29/2024 07:00 AM</td>
            <td>9522545414</td>
            <td>Female</td>
            <td>Amit Singh (9009) </td>
            <td>Online</td>
            <td>Normal</td>
            <td></td>
            <td>D-5, 6, Ansal Chamber 2, Bhikaji Cama Place</td>
            <td>144.00 </td>

            <td>
              <span className="btn btn-success btn-sm ">Approved</span>
            </td>
          </tr>

          <tr>
            <td>
             <Link to="/admin/Appointment/PatientDetails">
                Aadish Mody (1072)
              </Link>
            </td>
            <td> APPNO6329</td>
            <td> 06/29/2024 07:00 AM</td>
            <td>9522545414</td>
            <td>Female</td>
            <td>Amit Singh (9009) </td>
            <td>Online</td>
            <td> Very Urgent</td>
            <td></td>
            <td> 23, Al Ameen Colony, South Ukadam</td>
            <td>144.00 </td>

            <td>
              <span className="btn btn-success btn-sm ">Approved</span>
            </td>
          </tr>

          <tr>
            <td>
             <Link to="/admin/Appointment/PatientDetails">
                Aadish Mody (1072)
              </Link>
            </td>
            <td>APPNO6332</td>
            <td> 06/29/2024 07:00 AM</td>
            <td>9522545414</td>
            <td>Female</td>
            <td>Amit Singh (9009) </td>
            <td>Online</td>
            <td>Normal</td>
            <td></td>
            <td> 1278, Diwan Hall Road, Lajpat Rai Market</td>
            <td>144.00 </td>

            <td>
              <span className="btn btn-success btn-sm ">Approved</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;
