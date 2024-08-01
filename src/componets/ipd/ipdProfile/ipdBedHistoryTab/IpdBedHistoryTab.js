import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { PiPrinterDuotone } from "react-icons/pi";
import { TfiPencil } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function IpdBedHistoryTab() {
  const handlePrint = () => {
    console.log("Printing...");
    window.print();
  };
  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper">
        <div className="row">
          <div className="col-md-4 ">
            <h4>Bed History </h4>
          </div>
        </div>
      </div>
      <div className="row me-2">
        <div className="col-md-4">
          <div className="me-3">
            <div className="dataTables_length d-flex">
              <label>
                <select className="form-select">
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="mt-3" style={{ textAlign: "end" }}>
            <ExportFile />
          </div>
        </div>
      </div>
      <div className="" style={{ overflow: "auto" }}>
        <table className="table py-1 px-1">
          <thead className="border-top">
            <tr>
              <th>Bed Group </th>
              <th>Bed</th>
              <th> From Date</th>
              <th> To Date </th>
              <th> Active Bed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AC (Normal)</td>

              <td>FF - 117</td>
              <td>06/15/2024 02:51 PM</td>
              <td> </td>
              <td>Yes </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IpdBedHistoryTab;
