
import React from 'react'
import ExpiryMadicineReportForm from './ExpiryMadicineReportForm';
import ExpiryMadicineReportTable from './ExpiryMadicineReportTable';
import ExportFile from '../../../common/exportFile/ExportFile';

function ExpiryMadicineReport() {
  return (
    <div className="card app_wrap">
      <div className="dataTables_wrapper ">
        <div className="row_wrapper app_heading">
          <div className="row">
            <div className="col">
              <h4>Expiry Medicine Report</h4>
            </div>
          </div>
        </div>
        <ExpiryMadicineReportForm />

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
        <ExpiryMadicineReportTable />
      </div>
    </div>
  );
}

export default ExpiryMadicineReport
