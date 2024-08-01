function PharmacyBillReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th>Bill No</th>
            <th>Date</th>

            <th>Patient Name</th>
            <th>Age </th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Prescription No</th>
            <th>Doctor Name</th>
            <th>Collected By </th>
            <th>Total ($) </th>
            <th>Paid Amount ($) </th>
            <th>Balance Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td colSpan={10}>
              <div>
                No data available in table <br /> <br />
                <img
                  src="https://smart-hospital.in/shappresource/images/addnewitem.svg"
                  width={150}
                />
                <br />
                <br />{" "}
                <span className="text-success bolds">
                  <i className="fa fa-arrow-left" /> Add new record or search
                  with different criteria.
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PharmacyBillReportTable;
