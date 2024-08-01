import { Link } from "react-router-dom";
import Print from "../../../../common/print/Print";

function BirthRecordDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Birth Record Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link to="/admin/BirthRecord" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body pb0 pt0">
          <div className="table-responsive">
            <table className="">
              <tbody>
                <tr>
                  <th>Child Name</th>
                  <th>Mother Name</th>
                  <th>Father Name</th>
                </tr>
                <tr>
                  <td>
                    <span id="vchild_name">Aston Marsh</span>
                  </td>
                  <td>
                    <span id="vmother_name">Carolyn Wright (827)</span>
                  </td>
                  <td>
                    <span id="vfather_name" />
                  </td>
                </tr>
                <tr>
                  <td className>
                    <div className="childimg">
                      <img
                        className="b_record_img"
                        src="https://demo.smart-hospital.in/uploads/patient_images/no_image.png?1720616511"
                        id="image"
                        alt="User profile picture"
                      />
                    </div>
                  </td>
                  <td className>
                    <div className="childimg">
                      <img
                        className="b_record_img"
                        src="https://demo.smart-hospital.in/uploads/patient_images/no_image.png?1720616511"
                        id="imagem"
                        alt="User profile picture"
                      />
                    </div>
                  </td>
                  <td className>
                    <div className="childimg">
                      <img
                        className="b_record_img"
                        src="https://demo.smart-hospital.in/uploads/patient_images/no_image.png?1720616511"
                        id="imagef"
                        alt="User profile picture"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Case ID</th>
                  <td>
                    <span id="vcase_id">4468</span>
                  </td>
                  <th>Birth Date</th>
                  <td>
                    <span id="vbirth_date">07/15/2024 12:52 PM</span>
                  </td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>
                    <span id="vweight">2KG</span>
                  </td>
                  <th>Gender</th>
                  <td>
                    <span id="vgender">Male</span>
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <span id="vcontact">80956757</span>
                  </td>
                  <th>Address</th>
                  <td>
                    <span id="vaddress" />
                  </td>
                </tr>
                <tr>
                  <th>Document</th>
                  <td>
                    <span id="download_document" />{" "}
                  </td>
                  <th>Report</th>
                  <td>
                    <span id="vreport" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="field_data" />
          </div>
          <div id="tabledata" />
        </div>

        {/* <MadicineDetailsTab /> */}
      </div>
    </div>
  );
}

export default BirthRecordDetails;
