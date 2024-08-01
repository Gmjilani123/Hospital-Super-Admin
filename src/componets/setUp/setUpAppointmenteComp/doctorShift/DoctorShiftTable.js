import React from "react";

function DoctorShiftTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Doctor Name</th>
            <th> Morning</th>
            <th> Evening</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">Sonia Bush (9000)</a>
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="#">Sonia Bush (9000)</a>
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>
              <a href="#">Sonia Bush (9000)</a>
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DoctorShiftTable;
