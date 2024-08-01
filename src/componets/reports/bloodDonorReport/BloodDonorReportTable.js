import React from 'react'

function BloodDonorReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Blood Group</th>
            <th>Bags</th>
            <th> Donor Name</th>
            <th>Age </th>
            <th>Donate Date</th>
            <th>Apply Charge($)</th>
            <th>Discount Percentage(%)</th>
            <th>Tax Percentage(%)</th>
            <th>Amount($)</th>
            <th>Paid Amount($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B+</td>
            <td>L3 </td>
            <td>Ajit</td>
            <td>34</td>
            <td>12/10/1993</td>
            <td>12.99.00</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BloodDonorReportTable
