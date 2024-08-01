import React from "react";
import { Link } from "react-router-dom";
import NoticeBoardTable from "./NoticeBoardTable";

function NoticeBoard() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Users List Table */}
      <div className="card">
        <div className="card-datatable table-responsive">
          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper dt-bootstrap5 no-footer"
          >
            <div className="row me-2">
              <div className="col-md-2">
                <h4 className="mt-3 mb-0 text-black">Notice Board</h4>
              </div>
              <div className="col-md-10">
                <div className="mt-3" style={{ textAlign: "end" }}>
                  <Link
                    className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                    to={"/admin/NoticeBoard/Add-Notice"}
                  >
                    <span>
                      <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                      <span className="d-none d-sm-inline-block">
                        Post New Message
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <NoticeBoardTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;
