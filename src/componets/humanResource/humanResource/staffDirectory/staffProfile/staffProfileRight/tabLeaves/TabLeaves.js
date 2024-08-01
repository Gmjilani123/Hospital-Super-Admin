import { Link } from "react-router-dom";

import { FaPlane } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";

function TabLeaves() {
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
                <h5>Medical Leave (20)</h5>
                <p>Used: 15</p>
                <p>Available: 5</p>
              </div>
              <div className="icon_money_box">
                <FaPlane className="money_icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Casual Leave (25)</h5>
                <p>Used: 11</p>
                <p>Available: 14</p>
              </div>
              <div className="icon_money_box">
                <FaPlane className="money_icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="staffprofile">
              <div className="staff_salry">
                <h5>Maternity Leave (25)</h5>
                <p>Used: 15</p>
                <p>Available: 5</p>
              </div>
              <div className="icon_money_box">
                <FaPlane className="money_icon" />
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
              <th> </th>
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
                      to="/admin/Staff-Directory/Staff-Profile/leaves-details"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View
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
                      to="/admin/Staff-Directory/Staff-Profile/leaves-details"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View
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
                      to="/admin/Staff-Directory/Staff-Profile/leaves-details"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View
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
                      to="/admin/Staff-Directory/Staff-Profile/leaves-details"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View
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
                      to="/admin/Staff-Directory/Staff-Profile/leaves-details"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View
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
                      to="/admin/Staff-Directory/Staff-Profile/leaves-details"
                      className="btn btn-secondary  btn-circle btn-sm"
                    >
                      View
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

export default TabLeaves;
