import React from 'react';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function OnlineStudentListComp() {

    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card">
                <div className="card-datatable table-responsive">
                    <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                        <div className="row me-2">
                            <div className="col-md-3">
                                <div className="me-3">
                                    <div className="dataTables_length" id="DataTables_Table_0_length">
                                        <label>
                                            <select
                                                name="DataTables_Table_0_length"
                                                aria-controls="DataTables_Table_0"
                                                className="form-select"
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                        <label>
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search.."
                                                aria-controls="DataTables_Table_0"
                                            />
                                        </label>
                                    </div>
                                    <div className="dt-buttons btn-group flex-wrap">
                                        {" "}
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-secondary buttons-collection dropdown-toggle btn-label-secondary mx-3 waves-effect waves-light"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                            >
                                                <span>
                                                    <i className="ti ti-screen-share me-1 ti-xs" />
                                                    Export
                                                </span>
                                            </button>
                                        </div>{" "}
                                        {/* <Link
                                        className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                                        to={'/admin/add-visitor-book'}
                                    >
                                        <span>
                                            <i className="ti ti-plus me-0 me-sm-1 ti-xs" />
                                            <span className="d-none d-sm-inline-block">Add Visitor Book</span>
                                        </span>
                                    </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='tbl-wraper' style={{ overflow: 'auto' }}>
                            <table
                                className="datatables-users table dataTable no-footer dtr-column"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"

                            >
                                <thead className="border-top">
                                    <tr>
                                        <th>#</th>
                                        <th>Reference No</th>
                                        <th>Student Name</th>
                                        <th>Class</th>
                                        <th>Father Name</th>
                                        <th>DOB</th>
                                        <th>Gender</th>
                                        <th>Category</th>
                                        <th>Mobile No</th>
                                        <th>Form Status</th>
                                        <th>Payment Status</th>
                                        <th>Enrolled</th>
                                        <th>Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>965841</td>
                                        <td>Emma Thomas</td>
                                        <td>Class 2(B)</td>
                                        <td>Olivier Thomas</td>
                                        <td>07/14/2016</td>
                                        <td>Female</td>
                                        <td>General</td>
                                        <td>6881016512</td>
                                        <td>
                                            <span>Not Submitted</span>
                                        </td>
                                        <td>
                                            <span style={{ display: 'inline-block', width: '90px', textAlign: 'center', padding: '5px 10px', backgroundColor: 'red', color: 'white', borderRadius: '5px' }}>Unpaid</span>
                                        </td>
                                        <td>-</td>
                                        <td>05/04/2024</td>
                                        <td style={{ display: 'flex', border: '0' }} >
                                            <Link to={`#`} className="btn btn-primary btn-icon btn-circle btn-sm">
                                                <EditIcon />
                                            </Link>
                                            <button type="button" className="btn btn-danger btn-icon btn-circle btn-sm ms-1">
                                                <DeleteIcon />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>965841</td>
                                        <td>Emma Thomas</td>
                                        <td>Class 2(B)</td>
                                        <td>Olivier Thomas</td>
                                        <td>07/14/2016</td>
                                        <td>Female</td>
                                        <td>General</td>
                                        <td>6881016512</td>
                                        <td>Not Submitted</td>
                                        <td>
                                            <span style={{ display: 'inline-block', width: '90px', textAlign: 'center', padding: '5px 10px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}>Paid</span>
                                        </td>
                                        <td>-</td>
                                        <td>05/04/2024</td>
                                        <td >
                                            <Link to={`#`} className="btn btn-primary btn-icon btn-circle btn-sm">
                                                <EditIcon />
                                            </Link>
                                            <button type="button" className="btn btn-danger btn-icon btn-circle btn-sm ms-1">
                                                <DeleteIcon />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>965841</td>
                                        <td>Emma Thomas</td>
                                        <td>Class 2(B)</td>
                                        <td>Olivier Thomas</td>
                                        <td>07/14/2016</td>
                                        <td>Female</td>
                                        <td>General</td>
                                        <td>6881016512</td>
                                        <td>Not Submitted</td>
                                        <td>
                                            <span style={{ display: 'inline-block', width: '90px', textAlign: 'center', padding: '5px 10px', backgroundColor: 'red', color: 'white', borderRadius: '5px' }}>Unpaid</span>
                                        </td>
                                        <td>-</td>
                                        <td>05/04/2024</td>
                                        <td >
                                            <Link to={`#`} className="btn btn-primary btn-icon btn-circle btn-sm">
                                                <EditIcon />
                                            </Link>
                                            <button type="button" className="btn btn-danger btn-icon btn-circle btn-sm ms-1">
                                                <DeleteIcon />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>965841</td>
                                        <td>Emma Thomas</td>
                                        <td>Class 2(B)</td>
                                        <td>Olivier Thomas</td>
                                        <td>07/14/2016</td>
                                        <td>Female</td>
                                        <td>General</td>
                                        <td>6881016512</td>
                                        <td>Not Submitted</td>
                                        <td>
                                            <span style={{ display: 'inline-block', width: '90px', textAlign: 'center', padding: '5px 10px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}>Paid</span>
                                        </td>
                                        <td>-</td>
                                        <td>05/04/2024</td>
                                        <td >
                                            <Link to={`#`} className="btn btn-primary btn-icon btn-circle btn-sm">
                                                <EditIcon />
                                            </Link>
                                            <button type="button" className="btn btn-danger btn-icon btn-circle btn-sm ms-1">
                                                <DeleteIcon />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row mx-2">
                            <div className="col-sm-12 col-md-6">
                                <div
                                    className="dataTables_info"
                                    id="DataTables_Table_0_info"
                                    role="status"
                                    aria-live="polite"
                                >
                                    Showing 0 to 0 of 0 entries
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="DataTables_Table_0_paginate"
                                >
                                    <ul className="pagination">
                                        <li
                                            className="paginate_button page-item previous disabled"
                                            id="DataTables_Table_0_previous"
                                        >
                                            <a
                                                aria-controls="DataTables_Table_0"
                                                aria-disabled="true"
                                                role="link"
                                                data-dt-idx="previous"
                                                tabIndex={-1}
                                                className="page-link"
                                            >
                                                Previous
                                            </a>
                                        </li>
                                        <li
                                            className="paginate_button page-item previous disabled"
                                            id="DataTables_Table_0_previous"
                                        >
                                            <a
                                                aria-controls="DataTables_Table_0"
                                                aria-disabled="true"
                                                role="link"
                                                data-dt-idx="previous"
                                                tabIndex={-1}
                                                className="page-link"
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li
                                            className="paginate_button page-item next disabled"
                                            id="DataTables_Table_0_next"
                                        >
                                            <a
                                                aria-controls="DataTables_Table_0"
                                                aria-disabled="true"
                                                role="link"
                                                data-dt-idx="next"
                                                tabIndex={-1}
                                                className="page-link"
                                            >
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
}

export default OnlineStudentListComp