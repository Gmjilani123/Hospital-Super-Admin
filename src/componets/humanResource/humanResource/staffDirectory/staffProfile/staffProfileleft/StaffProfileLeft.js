
import React from 'react'

function StaffProfileLeft() {
  return (
    <div className="box_primary">
      <div className="box_profile">
        <div>
          <img
            src="https://demo.smart-school.in/uploads/staff_images/1704266933-42176155365950cb5d254f!1683100897-1103622616645214e13939f!1 (1).jpg?1717661444"
            alt=""
          />
          <h5 className="mt-1">Joe Black</h5>
        </div>

        <ul className="list-group-unbordered">
          <li className="listnoback">
            <b>Staff ID</b>
            <a href="">9000</a>
          </li>

          <li className="listnoback">
            <b>Role</b>
            <a href="">Super Admin</a>
          </li>

          <li className="listnoback">
            <b>Designation</b>
            <a href="">Technical Head</a>
          </li>

          <li className="listnoback">
            <b>Department</b>
            <a href="">Admin</a>
          </li>

          <li className="listnoback">
            <b>EPF No.</b>
            <a href="">564564564</a>
          </li>

          <li className="listnoback">
            <b>Contract Type</b>
            <a href="">Permanent</a>
          </li>

          <li className="listnoback">
            <b>Work Shift</b>
            <a href="">Morning</a>
          </li>

          <li className="listnoback">
            <b>Work Location</b>
            <a href="">Ground Floor</a>
          </li>

          <li className="listnoback">
            <b>Date Of Joining</b>
            <a href="">03/11/2010</a>
          </li>

          <li className="listnoback">
            <b>Barcode</b>
            <img
              src="https://demo.smart-school.in/uploads/staff_id_card/barcodes/9000.png?1717764762"
              alt=""
            />
          </li>

          <li className="listnoback">
            <b>QR Code</b>
            <img
              src="https://demo.smart-school.in/uploads/staff_id_card/qrcode/9000.png?1717764762"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StaffProfileLeft
