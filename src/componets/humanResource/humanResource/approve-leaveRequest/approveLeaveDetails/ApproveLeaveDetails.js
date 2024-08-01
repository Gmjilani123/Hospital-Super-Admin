import React from "react";

function ApproveLeaveDetails() {
  return (
    <div style={{ margin: "20px" }}>
      <div className="card" style={{ padding: "10px" }}>
        <h5 className="mb-0">Approve Leave Request Details</h5>
        <div style={{ margin: "20px 0", overflow: "auto" }}>
          <table className=" table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>Joe Black</td>
                <th>Staff ID</th>
                <td>9000</td>
              </tr>
              <tr>
                <th>Submitted By</th>
                <td>Joe Black (9000)</td>
                <th>Leave Type</th>
                <td>Casual Leave</td>
              </tr>
              <tr>
                <th>Leave</th>
                <td>06/15/2024 - 06/18/2024 (4 Days)</td>
                <th>Apply Date</th>
                <td>06/10/2024</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <div className="d-flex">
                    <div className="form-check mx-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Pending
                      </label>
                    </div>
                    <div className="form-check mx-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Approved
                      </label>
                    </div>
                    <div className="form-check mx-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Disapproved
                      </label>
                    </div>
                  </div>
                </td>
                <th> Reason</th>
                <td></td>
              </tr>
              <tr>
                <th>Note</th>
              </tr>
              <tr></tr>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea">Comments</label>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApproveLeaveDetails;
