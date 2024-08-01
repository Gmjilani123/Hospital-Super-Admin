import React from "react";

function PatientVisitReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <div className="mb-3">
        <h4 className="ml-2 mb-0">OPD Details</h4>
        <table className="table py-1 px-1">
          <thead className="border-top">
            <tr>
              <th> OPD No</th>
              <th>Case ID</th>
              <th>Date</th>
              <th>OPD Checkup ID</th>
              <th> Doctor Name</th>
              <th>Symptoms</th>
              <th>Findings</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="mb-3">
        <h4 className="ml-2 mb-0">Pharmacy Details</h4>
        <table className="table py-1 px-1">
          <thead className="border-top">
            <tr>
              <th> OPD No</th>
              <th>Case ID</th>
              <th>Date</th>
              <th>OPD Checkup ID</th>
              <th> Doctor Name</th>
              <th>Symptoms</th>
              <th>Findings</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="mb-3">
        <h4 className="ml-2 mb-0">Pathology Details</h4>
        <table className="table py-1 px-1">
          <thead className="border-top">
            <tr>
              <th> OPD No</th>
              <th>Case ID</th>
              <th>Date</th>
              <th>OPD Checkup ID</th>
              <th> Doctor Name</th>
              <th>Symptoms</th>
              <th>Findings</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="mb-3">
        <h4 className="ml-2 mb-0">Radiology Details</h4>
        <table className="table py-1 px-1">
          <thead className="border-top">
            <tr>
              <th> OPD No</th>
              <th>Case ID</th>
              <th>Date</th>
              <th>OPD Checkup ID</th>
              <th> Doctor Name</th>
              <th>Symptoms</th>
              <th>Findings</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientVisitReportTable;
