import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function IncomeListTable() {
    return (
        <div className="" style={{ overflow: "auto" }}>
            <table className="table py-1 px-1">
                <thead className="border-top">
                    <tr>
                        <th>Name</th>
                        <th>Invoice Number</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Income Head</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="#">
                                Free Medical Camp
                            </Link>
                        </td>
                        <td>890569</td>
                        <td>06/01/2024</td>
                        <td>Special Camping forms an integral part of National Service Scheme.</td>
                        <td>Special campaign</td>
                        <td>250.00</td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="#"
                                        className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                                    >
                                        <FaEye />
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Link to="#">
                                Free Medical Camp
                            </Link>
                        </td>
                        <td>890569</td>
                        <td>06/01/2024</td>
                        <td>Special Camping forms an integral part of National Service Scheme.</td>
                        <td>Special campaign</td>
                        <td>250.00</td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="#"
                                        className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                                    >
                                        <FaEye />
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Link to="#">
                                Free Medical Camp
                            </Link>
                        </td>
                        <td>890569</td>
                        <td>06/01/2024</td>
                        <td>Special Camping forms an integral part of National Service Scheme.</td>
                        <td>Special campaign</td>
                        <td>250.00</td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="#"
                                        className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                                    >
                                        <FaEye />
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Link to="#">
                                Free Medical Camp
                            </Link>
                        </td>
                        <td>890569</td>
                        <td>06/01/2024</td>
                        <td>Special Camping forms an integral part of National Service Scheme.</td>
                        <td>Special campaign</td>
                        <td>250.00</td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="#"
                                        className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                                    >
                                        <FaEye />
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Link to="#">
                                Free Medical Camp
                            </Link>
                        </td>
                        <td>890569</td>
                        <td>06/01/2024</td>
                        <td>Special Camping forms an integral part of National Service Scheme.</td>
                        <td>Special campaign</td>
                        <td>250.00</td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="#"
                                        className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                                    >
                                        <FaEye />
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default IncomeListTable