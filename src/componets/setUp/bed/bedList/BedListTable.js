import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { IoMdCheckboxOutline } from "react-icons/io";

function BedListTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table
        className="table table-hover table-striped table-bordered example dataTable no-footer"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead>
          <tr role="row">
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Name: activate to sort column ascending"
              style={{ width: 102 }}
            >
              Name
            </th>
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Bed Type: activate to sort column ascending"
              style={{ width: 139 }}
            >
              Bed Type
            </th>
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Bed Group: activate to sort column ascending"
              style={{ width: 341 }}
            >
              Bed Group
            </th>
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Used: activate to sort column ascending"
              style={{ width: 93 }}
            >
              Used
            </th>
            <th
              className="text-right noExport sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              aria-label="Action: activate to sort column ascending"
              style={{ width: 109 }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" className="odd">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                GF - 101
              </a>
            </td>
            <td>Standard</td>
            <td>VIP Ward - Ground Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="even">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                TF - 102
              </a>
            </td>
            <td>VIP</td>
            <td>Private Ward - 3rd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>

            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="odd">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                TF - 103
              </a>
            </td>
            <td>Normal</td>
            <td>Private Ward - 3rd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="even">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                TF - 104
              </a>
            </td>
            <td>Standard</td>
            <td>Private Ward - 3rd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="odd">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                SF - 105
              </a>
            </td>
            <td>Standard</td>
            <td>ICU - 2nd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="even">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                TF - 106
              </a>
            </td>
            <td>VIP</td>
            <td>General Ward Male - 3rd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="odd">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                TF - 107
              </a>
            </td>
            <td>VIP</td>
            <td>Private Ward - 3rd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="even">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                GF - 108
              </a>
            </td>
            <td>Standard</td>
            <td>VIP Ward - Ground Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="odd">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                GF - 109
              </a>
            </td>
            <td>VIP</td>
            <td>VIP Ward - Ground Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="even">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                TF - 110
              </a>
            </td>
            <td>Normal</td>
            <td>General Ward Male - 3rd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="odd">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                FF - 111
              </a>
            </td>
            <td>Normal</td>
            <td>AC (Normal) - 1st Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
          <tr role="row" className="even">
            <td className="mailbox-name">
              <a href="#" data-toggle="popover" className="detail_popover">
                SF - 112
              </a>
            </td>
            <td>Normal</td>
            <td>NICU - 2nd Floor</td>
            <td>
              <IoMdCheckboxOutline className="fa fa-check-square-o" />
            </td>
            <td className="mailbox-date pull-right">
              <a
                href="#"
                onclick="getRecord('2')"
                className="btn btn-default btn-xs"
              >
                <BsFillPencilFill className="fa fa-pencil fs-4" />
              </a>
              <a
                className="btn btn-default btn-xs"
                data-toggle="tooltip"
                title
                onclick="delete_recordByIdReload('admin/setup/bed/delete/2', '')"
                data-original-title="Delete"
              >
                <AiOutlineDelete className="fa fa-trash fs-4" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BedListTable;
