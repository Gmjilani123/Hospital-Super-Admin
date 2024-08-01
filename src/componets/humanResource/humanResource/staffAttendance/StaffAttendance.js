import React from "react";
import StaffAttendanceCriteria from "./StaffAttendanceCriteria";
import StaffAttendanceTable from "./StaffAttendanceTable";

function StaffAttendance() {
  return (
    <div style={{ margin: "20px" }}>
      <div className="card" style={{ padding: "10px" }}>
        <StaffAttendanceCriteria />

        <h5 className="mb-0">Staff List</h5>
        <StaffAttendanceTable />
      </div>
    </div>
  );
}

export default StaffAttendance;
