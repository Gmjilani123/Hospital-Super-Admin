import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import { PiNewspaperClippingLight } from "react-icons/pi";

import { MdOutlineFormatListBulleted } from "react-icons/md";

function StaffDirectory() {
  return (
    <div className="mt-3">
      <h5 className="mb-3">Staff</h5>

      <form className="row mb-5">
        <div className="d-flex col-12">
          <ul className="report_list ">
            <li className="report_list_item">
              <NavLink to="Staff-cardView" className="px-2">
                <PiNewspaperClippingLight className="menu-icon mb-1" />
                <strong>View Card</strong>
              </NavLink>
            </li>
            <li className="report_list_item ">
              <NavLink to="Staff-ListView" className="px-2">
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

export default StaffDirectory;
