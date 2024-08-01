import React from 'react'
import { IoReorderThree } from "react-icons/io5";

import StaffDirectoryCriteria from "../../../componets/humanResource/humanResource/staffDirectory/StaffDirectoryCriteria";
import StaffDirectory from "../../../componets/humanResource/humanResource/staffDirectory/StaffDirectory";
import { Link } from "react-router-dom";

function HumanResource() {
  return (
    <div className="card" style={{ padding: "10px" }}>
      <div>
        <div className="criteria_sec">
          <div>
            <h5>Staff Directory</h5>
          </div>
          <div>
            <Link
              class="btn btn-secondary add-new btn-primary waves-effect waves-light"
              to="/admin/Staff-Directory/MyLeave"
            >
              <span>
                <IoReorderThree class="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                <span class="d-none d-sm-inline-block">Leaves</span>
              </span>
            </Link>
          </div>
        </div>

        <StaffDirectoryCriteria />
        <StaffDirectory />
      </div>
    </div>
  );
}

export default HumanResource
