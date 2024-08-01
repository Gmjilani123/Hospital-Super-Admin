function InventoryIssueReportTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Item</th>
            <th>Item-Category</th>
            <th> Issue-Return</th>
            <th> Issue To</th>
            <th>Issued By</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrocardiography machines</td>
            <td></td>
            <td>VK Supplier</td>
            <td> SK Pharma</td>
            <td>12/10/2024</td>
            <td>12/12/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InventoryIssueReportTable;
