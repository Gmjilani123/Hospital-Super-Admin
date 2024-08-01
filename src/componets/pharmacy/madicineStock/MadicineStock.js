import React from 'react'
import { IoReorderThree } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ExportFile from '../../../common/exportFile/ExportFile';
import MadicineStockTable from './MadicineStockTable';

function MadicineStock() {
  return (
    <div className="content_wrapper_main">
      <div className="card">
        <div className="dataTables_wrapper ">
          <div className="row_wrapper row_wrapper_1">
            <div className="row">
              <div className="col-md-4 ">
                <h5 className="fs-4">Madicine Stock </h5>
              </div>
              <div className="col-md-8">
                <div className="d-flex align-item-center justify-content-end">
                  <Link
                    className="btn btn-secondary add-new btn-primary waves-effect waves-light ml-2"
                    to="/admin/Pharmacy-Bill-list/MadicineStock/MadicinePurchase"
                  >
                    <span>
                      {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}

                      <IoReorderThree className="fs-3 mb-1" />

                      <span className="d-none d-sm-inline-block">Purchase</span>
                    </span>
                  </Link>
                </div>
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
          <MadicineStockTable />
        </div>
      </div>
    </div>
  );
}

export default MadicineStock
