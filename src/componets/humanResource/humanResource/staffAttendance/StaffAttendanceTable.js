import { LiaSave } from "react-icons/lia";
import Form from "react-bootstrap/Form";
function StaffAttendanceTable() {
  return (
    <div>
      <div className="d-flex align-item-center justify-content-between mt-2">
        <div>
          <h6>Set attendance for all Staff as</h6>
          <div className="d-flex">
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Present"
              className="switch_check mb-3 mr-4"
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Late"
              className="switch_check mb-3  mr-4"
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Absent"
              className="switch_check mb-3  mr-4"
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Half Day"
              className="switch_check mb-3  mr-4"
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Full Day"
              className="switch_check mb-3  mr-4"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary btn_search btn-sm ms-1"
          >
            <LiaSave className="me-1" />
            Save Attendance
          </button>
        </div>
      </div>
      <div style={{ margin: "20px 0", overflow: "auto" }}>
        <table className=" table">
          <thead className="border-top">
            <tr>
              <th># </th>
              <th>Staff ID</th>
              <th>Name</th>

              <th>Role</th>
              <th> Attandance </th>
              <th>Source</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>9002</td>
              <td>Shivam Verma</td>

              <td>Teacher</td>
              <td>
                <div className="">
                  <div className="d-flex">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Present"
                      className="switch_check mb-3 mr-3"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Late"
                      className="switch_check mb-3 "
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Absent"
                      className="switch_check mb-3 mr-2"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Half Day"
                      className="switch_check mb-3 "
                    />
                  </div>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Full Day"
                    className="switch_check mb-3 "
                  />
                </div>
              </td>
              <td>N/A</td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>900002301</td>
              <td>Jason Sharlton</td>

              <td>Teacher</td>
              <td>
                <div className="">
                  <div className="d-flex">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Present"
                      className="switch_check mb-3 mr-3"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Late"
                      className="switch_check mb-3 "
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Absent"
                      className="switch_check mb-3 mr-2"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Half Day"
                      className="switch_check mb-3 "
                    />
                  </div>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Full Day"
                    className="switch_check mb-3 "
                  />
                </div>
              </td>
              <td>N/A</td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>9301</td>
              <td>Albert Thomas</td>

              <td>Teacher</td>
              <td>
                <div className="">
                  <div className="d-flex">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Present"
                      className="switch_check mb-3 mr-3"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Late"
                      className="switch_check mb-3 "
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Absent"
                      className="switch_check mb-3 mr-2"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Half Day"
                      className="switch_check mb-3 "
                    />
                  </div>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Full Day"
                    className="switch_check mb-3 "
                  />
                </div>
              </td>
              <td>N/A</td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffAttendanceTable;
