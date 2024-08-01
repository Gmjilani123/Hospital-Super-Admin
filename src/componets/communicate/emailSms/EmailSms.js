import { Link } from "react-router-dom";
import EmailSmsTable from "./EmailSmsTable";
function EmailSms() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Users List Table */}
      <div className="card">
        <div className="card-datatable">
          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper dt-bootstrap5 no-footer"
          >
            <div className="row me-2 py-1 mb-2 mt-1">
              <div className="col-md-2">
                <div className="me-3">
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="col-md-10"></div>
            </div>
            <EmailSmsTable />

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
      </div>
    </div>
  );
}

export default EmailSms;
