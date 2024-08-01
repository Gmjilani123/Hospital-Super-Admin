import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function TabPayroll() {
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
                <h5>Total Net Salary Paid</h5>
                <h4>$4,49,480.00</h4>
              </div>
              <div className="icon_money_box">
                <FaRegMoneyBillAlt className="money_icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Gross Salary</h5>
                <h4>$4,49,480.00</h4>
              </div>
              <div className="icon_money_box">
                <FaRegMoneyBillAlt className="money_icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Earning</h5>
                <h4>$4,49,480.00</h4>
              </div>
              <div className="icon_money_box">
                <FaRegMoneyBillAlt className="money_icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Total Deduction</h5>
                <h4>$4,49,480.00</h4>
              </div>
              <div className="icon_money_box">
                <FaRegMoneyBillAlt className="money_icon" />
              </div>
            </div>
          </div>
        </div>
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead className="border-top">
            <tr>
              <th> payslip </th>
              <th> Month Year</th>
              <th> Date </th>
              <th>Mode</th>
              <th>Status</th>
              <th>Net Salary ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 </td>
              <td>February - 2021 </td>
              <td>03/05/2021</td>
              <td>Cash</td>

              <td>
                <span className="btn btn-success  btn-sm ">Paid</span>
              </td>
              <td>45,000.00</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="/admin/Staff-Directory/Staff-Profile/Payroll-Payslip"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View PaySlip
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>7 </td>
              <td>March - 2021 </td>
              <td>04/21/2021</td>
              <td>Cash</td>

              <td>
                <span className="btn btn-success  btn-sm ">Paid</span>
              </td>
              <td>45,000.00</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="https://meet.google.com/"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View PaySlip
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>13</td>
              <td>April - 2021 </td>
              <td>05/03/2021</td>
              <td>Cheque</td>

              <td>
                <span className="btn btn-success  btn-sm ">Paid</span>
              </td>
              <td>45,000.00</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="https://meet.google.com/"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View PaySlip
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>41</td>
              <td>February - 2021 </td>
              <td>03/05/2021</td>
              <td>Cash</td>

              <td>
                <span className="btn btn-warning  btn-sm ">Generated</span>
              </td>
              <td>45,000.00</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="https://meet.google.com/"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View PaySlip
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>1 </td>
              <td>February - 2021 </td>
              <td>03/05/2021</td>
              <td>Cash</td>

              <td>
                <span className="btn btn-success  btn-sm ">Paid</span>
              </td>
              <td>45,000.00</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="https://meet.google.com/"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View PaySlip
                    </Link>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>41</td>
              <td>February - 2021 </td>
              <td>03/05/2021</td>
              <td>Cash</td>

              <td>
                <span className="btn btn-warning  btn-sm ">Generated</span>
              </td>
              <td>45,000.00</td>
              <td>
                <div className="d-flex">
                  <div>
                    <Link
                      to="https://meet.google.com/"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View PaySlip
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row mx-2">
          <div className="col-sm-12 col-md-6">
            <div
              className="dataTables_info"
              id="DataTables_Table_0_info"
              role="status"
              aria-live="polite"
            >
              Showing 0 to 0 of 0 entries
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="DataTables_Table_0_paginate"
            >
              <ul className="pagination">
                <li
                  className="paginate_button page-item previous disabled"
                  id="DataTables_Table_0_previous"
                >
                  <a
                    aria-controls="DataTables_Table_0"
                    aria-disabled="true"
                    role="link"
                    data-dt-idx="previous"
                    tabIndex={-1}
                    className="page-link"
                  >
                    Previous
                  </a>
                </li>
                <li
                  className="paginate_button page-item previous disabled"
                  id="DataTables_Table_0_previous"
                >
                  <a
                    aria-controls="DataTables_Table_0"
                    aria-disabled="true"
                    role="link"
                    data-dt-idx="previous"
                    tabIndex={-1}
                    className="page-link"
                  >
                    1
                  </a>
                </li>
                <li
                  className="paginate_button page-item next disabled"
                  id="DataTables_Table_0_next"
                >
                  <a
                    aria-controls="DataTables_Table_0"
                    aria-disabled="true"
                    role="link"
                    data-dt-idx="next"
                    tabIndex={-1}
                    className="page-link"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabPayroll;
