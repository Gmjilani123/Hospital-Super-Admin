import { Link } from "react-router-dom";
import Print from "../../../../common/print/Print";

function IpdOperationDetails() {
  return (
    <div style={{ margin: "20px" }}>
      <div
        className="fees_statement_user-box px-1 py-3 mb-3"
        style={{ border: "1px solid  rgb(214 214 214)" }}
      >
        <div className="pateint_header_container pb-3 px-3">
          <h5>Operation Details</h5>

          <div className="d-flex">
            <Print />

            <div className="ml-2">
              <Link
                to="/admin/IPD-Patient/IPD-patient-Profile"
                className="btn btn-primary btn-small"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
        <div className="py-3 px-3">
          <table className="details_table" style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td className="bolds">Reference No</td>
                <td>OTREF215</td>
                <td className="bolds">Operation Name </td>
                <td>Facelift Surgery</td>
              </tr>
              <tr>
                <td className="bolds">Date </td>
                <td>06/22/2024 09:30 PM</td>
                <td className="bolds">Operation Category </td>
                <td>Facelift Surgery</td>
              </tr>
              <tr>
                <td className="bolds">Consultant Doctor </td>
                <td>Sansa Gomez (9008)</td>
                <td className="bolds">Assistant Consultant 1 </td>
                <td>Dr.Shah</td>
              </tr>

              <tr>
                <td className="bolds"> Assistant Consultant 2</td>
                <td>Dr.Singh</td>
                <td className="bolds">Anesthetist </td>
                <td>Anesthetist</td>
              </tr>
              <tr>
                <td className="bolds">Anaethesia Type </td>
                <td>Anesthesia Type 1</td>
                <td className="bolds">OT Technician </td>
                <td>Vinesh</td>
              </tr>

              <tr>
                <td className="bolds">OT Assistant </td>
                <td>Mahesh</td>
                <td className="bolds">Remark </td>
                <td>Left Hand Mark</td>
              </tr>

              <tr>
                <td className="bolds">Result </td>
                <td></td>
                <td className="bolds"> </td>
                <td> </td>
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
              </tr>

              <tr>
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

export default IpdOperationDetails;
