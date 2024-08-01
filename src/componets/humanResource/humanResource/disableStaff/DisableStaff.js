import React from "react";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";

function DisableStaff() {
  return (
    <div className="mt-3">
      <h4 className="mb-3">Disable Staff</h4>

      <form className="row mb-5">
        <div className="d-flex col-12">
          <ul className="report_list ">
            <li className="report_list_item">
              <NavLink to="disableStaff-CardView" className="px-2">
                <PiNewspaperClippingLight className="menu-icon mb-1" />
                <strong>View Card</strong>
              </NavLink>
            </li>
            <li className="report_list_item ">
              <NavLink to="Disable-Staff-ListView" className="px-2">
                <MdOutlineFormatListBulleted className="menu-icon mb-1" />
                <strong>List View</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </form>
      <Outlet></Outlet>
    </div>
  );
}

export default DisableStaff;
