import { IoMdCheckboxOutline } from "react-icons/io";
function TabAttendance() {
  return (
    <div className="card-datatable table-responsive">
      <div
        id="DataTables_Table_0_wrapper"
        className="dataTables_wrapper dt-bootstrap5 no-footer"
      >
        <div className="row">
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Present</h5>
                <h4>40</h4>
              </div>
              <div className="icon_money_box">
                <IoMdCheckboxOutline className="money_icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Late</h5>
                <h4>2</h4>
              </div>
              <div className="icon_money_box">
                <IoMdCheckboxOutline className="money_icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Absent</h5>
                <h4>3</h4>
              </div>
              <div className="icon_money_box">
                <IoMdCheckboxOutline className="money_icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Half Day</h5>
                <h4>5</h4>
              </div>
              <div className="icon_money_box">
                <IoMdCheckboxOutline className="money_icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Holiday</h5>
                <h4>1</h4>
              </div>
              <div className="icon_money_box">
                <IoMdCheckboxOutline className="money_icon" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row me-2">
            <div className="col-md-2">
              <div className="me-3">
                <div
                  className="dataTables_length"
                  id="DataTables_Table_0_length"
                >
                  <label>
                    <strong>Year</strong>
                    <select
                      name="DataTables_Table_0_length"
                      aria-controls="DataTables_Table_0"
                      className="form-select"
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="mt-3" style={{ textAlign: "end" }}>
                <div>
                  <ul className="denot_item">
                    <li>
                      <b>
                        Present:-<b className="text text-success">P</b>
                      </b>
                    </li>

                    <li>
                      <b>
                        Late:-<b className="text text-warning">L</b>
                      </b>
                    </li>

                    <li>
                      <b>
                        Absent:-<b className="text text-danger">A</b>
                      </b>
                    </li>

                    <li>
                      <b>
                        Holiday:-<b className="text ">H</b>
                      </b>
                    </li>

                    <li>
                      <b>
                        Half Day:-<b className="text text-secondary">F</b>
                      </b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <table
            className="table  scrol_table"
            id="DataTables_Table_0"
            aria-describedby="DataTables_Table_0_info"
          >
            <thead className="border-top">
              <tr>
                <th>Date | Month </th>
                <th>January</th>
                <th>February</th>
                <th> March </th>
                <th> April</th>
                <th>May</th>
                <th> June</th>
                <th>July</th>
                <th>August </th>
                <th>September </th>
                <th>October </th>
                <th>November </th>
                <th>December</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>01</th>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td>0</td>
                <td>
                  <b>
                    <b className="text text-secondary">F</b>
                  </b>
                </td>
                <td>
                  <b>
                    <b className="text text-warning">L</b>
                  </b>
                </td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <th>01</th>
                <td></td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td>
                  <b className="text text-warning">P</b>
                </td>
                <td>0</td>
                <td>
                  <b>
                    <b className="text text-secondary">F</b>
                  </b>
                </td>
                <td>
                  <b>
                    <b className="text text-warning">L</b>
                  </b>
                </td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <th>03</th>
                <td>
                  <b className="text ">H</b>
                </td>
                <td></td>
                <td></td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td>
                  <b className="text text-warning">P</b>
                </td>
                <td>0</td>
                <td>
                  <b>
                    <b className="text text-secondary">F</b>
                  </b>
                </td>
                <td>
                  <b>
                    <b className="text text-warning">L</b>
                  </b>
                </td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <th>01</th>
                <td></td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td>
                  <b className="text text-warning">P</b>
                </td>
                <td>0</td>
                <td>
                  <b>
                    <b className="text text-secondary">F</b>
                  </b>
                </td>
                <td>
                  <b>
                    <b className="text text-warning">L</b>
                  </b>
                </td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <th>01</th>
                <td></td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td>
                  <b className="text text-warning">P</b>
                </td>
                <td>0</td>
                <td>
                  <b>
                    <b className="text text-secondary">F</b>
                  </b>
                </td>
                <td>
                  <b>
                    <b className="text text-warning">L</b>
                  </b>
                </td>
                <td>
                  <b className="text text-success">P</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabAttendance;
