import StaffProfileRight from "./staffProfileRight/StaffProfileRight";
import StaffProfileLeft from "./staffProfileleft/StaffProfileLeft";

import React from "react";
function StaffProfile() {
  return (
    <div style={{ margin: "20px" }}>
      <div className="card" style={{ padding: "10px" }}>
        <div className="row">
          <div className="col-lg-3">
            <StaffProfileLeft />
          </div>
          <div className="col-lg-9">
            <StaffProfileRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffProfile;
