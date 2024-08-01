import React from "react";
import Print from "../../../common/print/Print";

function PatientDetails() {
  return (
    <div style={{ margin: "20px" }}>
      <div
        className="fees_statement_user-box px-1 py-3 mb-3"
        style={{ border: "1px solid  rgb(214 214 214)" }}
      >
        <div className="pateint_header_container pb-3 px-3">
          <h5>Patient Appointment Details</h5>

          <Print />
        </div>
        <div className="py-3 px-3">
          <table className="details_table" style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Patient Name</th>
                <td> Qadim Shetty (1080)</td>
                <th> Appointment No</th>
                <td>APPNO6422</td>
              </tr>
              <tr>
                <th>Age</th>
                <td></td>
                <th> Appointment S.No.</th>
                <td></td>
              </tr>
              <tr>
                <th>Email</th>
                <td>Qadim@gmail.com</td>
                <th>Appointment Date</th>
                <td>06/30/2024 06:05 PM</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>9552254125</td>
                <th>Appointment Priority</th>
                <td>Very Urgent</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>Male</td>
                <th> Shift</th>
                <td>Evening </td>
              </tr>
              <tr>
                <th>Doctor</th>
                <td> Reyan Jain (9011)</td>
                <th>Slot</th>
                <td>05:35 PM - 06:35 PM</td>
              </tr>

              <tr>
                <th>Department</th>
                <td>Doctor</td>
                <th> Amount</th>
                <td>$144.00</td>
              </tr>
              <tr>
                <th>Live Consultation</th>
                <td>Yes</td>
                <th> Status</th>
                <td>
                  <span className="btn btn-success btn-sm ">Approved</span>
                </td>
              </tr>
              <tr>
                <th>Payment Note</th>
                <td>
                  Payment deposit through Stripe TXN ID:
                  ch_3PNX4QGufJyZiUEp0hT9jKTg
                </td>
                <th> Payment Mode</th>
                <td>Online</td>
              </tr>
              <tr>
                <th>Message</th>
                <td>Very Urgent</td>
                <th> Transaction ID</th>
                <td>TRANID9251</td>
              </tr>
              <tr>
                <th>Source</th>
                <td>Online</td>
                <th> Alternate Address</th>
                <td>
                  A/1, Prathamesh, Off M C Road, Nr Punam Nagar, Andheri (e)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
