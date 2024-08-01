import React from "react";

function TabProfile() {
  return (
    <div>
      <div className="table_profile">
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
        >
          <tbody>
            <tr>
              <td>Phone</td>
              <td>6545645645</td>
            </tr>

            <tr>
              <td>Emergency Contact Number</td>
              <td>54654644</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>superadmin@gmail.com</td>
            </tr>

            <tr>
              <td>Gender</td>
              <td>Male</td>
            </tr>

            <tr>
              <td>Date of Birth</td>
              <td>01/01/1988</td>
            </tr>

            <tr>
              <td>Marital Status</td>
              <td>Married</td>
            </tr>

            <tr>
              <td>Father Name</td>
              <td>Will Black</td>
            </tr>

            <tr>
              <td>Mother Name</td>
              <td>Mini Black</td>
            </tr>

            <tr>
              <td>Qualification</td>
              <td>MS</td>
            </tr>

            <tr>
              <td>Work Experience</td>
              <td>15 Yrs</td>
            </tr>

            <tr>
              <td>Note</td>
              <td></td>
            </tr>

            <tr>
              <td>PAN Number</td>
              <td>ALWPG5809L</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-3">
        <h5 className="ac_header">Address Details</h5>
        <div className="payrol_box">
          <table
            className="datatables-users table dataTable no-footer dtr-column"
            id="DataTables_Table_0"
            aria-describedby="DataTables_Table_0_info"
          >
            <tbody>
              <tr>
                <td>Current Address</td>
                <td>9837 Temple Apartment</td>
              </tr>

              <tr>
                <td>Permanent Address</td>
                <td>9837 Temple Apartment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-3">
        <h5 className="ac_header"> Bank Account Details</h5>
        <div className="payrol_box">
          <table
            className="datatables-users table dataTable no-footer dtr-column"
            id="DataTables_Table_0"
            aria-describedby="DataTables_Table_0_info"
          >
            <tbody>
              <tr>
                <td>Account Title</td>
              </tr>

              <tr>
                <td>Bank Name</td>
              </tr>

              <tr>
                <td>Bank Branch Name</td>
              </tr>

              <tr>
                <td>Bank Account Number</td>
              </tr>

              <tr>
                <td>IFSC Code</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-3">
        <h5 className="ac_header">Social Media Link</h5>
        <div className="payrol_box">
          <table
            className="datatables-users table dataTable no-footer dtr-column"
            id="DataTables_Table_0"
            aria-describedby="DataTables_Table_0_info"
          >
            <tbody>
              <tr>
                <td>Facebook URL</td>
              </tr>

              <tr>
                <td>Twitter URL</td>
              </tr>

              <tr>
                <td>Linkedin URL</td>
              </tr>

              <tr>
                <td>Instagram URL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabProfile;
