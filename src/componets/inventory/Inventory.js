import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ExportFile from "../../common/exportFile/ExportFile";
import InventoryTable from "./InventoryTable";

function Inventory() {
  return (
    <div className="card">
      <div className="dataTables_wrapper ">
        <div className="row_wrapper">
          <div className="row">
            <div className="col">
              <h4>Item Stock List</h4>
            </div>
            <div className="col">
              <div className="d-flex align-item-center justify-content-end">
                <Link
                  className="btn btn-secondary add-new btn-primary ml-2"
                  to={"/admin/Inventory/IssueItem"}
                >
                  <span>
                    <HiBars3 className="fs-4 me-1" />
                    <span className="d-none d-sm-inline-block">Issue Item</span>
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
        <InventoryTable />
      </div>
    </div>
  );
}

export default Inventory;
