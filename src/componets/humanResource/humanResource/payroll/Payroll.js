import React from "react";
import PayrollCriteria from "./PayrollCriteria";
import PayrollTable from "./PayrollTable";

function Payroll() {
  return (
    <div style={{ margin: "20px" }}>
      <div className="card" style={{ padding: "10px" }}>
        <PayrollCriteria />

        <h5 className="mb-0">Staff List</h5>
        <PayrollTable />
      </div>
    </div>
  );
}

export default Payroll;
