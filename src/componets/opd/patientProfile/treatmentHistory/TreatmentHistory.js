import React from "react";
import ExportFile from "../../../../common/exportFile/ExportFile";

function TreatmentHistory() {
  return (
    <div className="dataTables_wrapper ">
      <div className="row_wrapper">
        <div className="row">
          <div className="col-md-4 ">
            <h4>Treatment History</h4>
          </div>
        </div>
      </div>
      <div className="row me-2">
        <div className="col-md-4">
          <div className="me-3">
            <div className="dataTables_length d-flex">
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
              <th>OPD No</th>
              <th>Case Id</th>
              <th>Appointment Date</th>
              <th>Symptoms</th>
              <th> Consultant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td colSpan={6}>
                <div className="no_data_box">
                  No data available in table <br /> <br />
                  <img
                    src="https://smart-hospital.in/shappresource/images/addnewitem.svg"
                    width={150}
                  />
                  <br />
                  <br />{" "}
                  <span className="text-success bolds">
                    <i className="fa fa-arrow-left" /> Add new record or search
                    with different criteria.
                  </span>
                  <div />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TreatmentHistory;
