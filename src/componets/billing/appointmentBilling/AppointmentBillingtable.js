import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function AppointmentBillingtable() {
    return (
        <div className="" style={{ overflow: "auto" }}>
            <table className="table py-1 px-1">
                <thead className="border-top">
                    <tr>
                        <th>Patient Name</th>
                        <th>Appointment Number</th>
                        <th>Appointment Date</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Doctor</th>
                        <th>Source</th>
                        <th>Priority</th>
                        <th>Live Consultant</th>
                        <th>Alternate Address</th>
                        <th>Fees</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                                Baber Devan
                            </Link>
                        </td>
                        <td>APPNO6488</td>
                        <td>07/31/2024 05:19 PM</td>
                        <td>9552554252</td>
                        <td>Male</td>
                        <td>Reyan Jain</td>
                        <td>Offline</td>
                        <td>Urgent</td>
                        <td>Yes</td>
                        <td>Uttam Nagar, New Delhi</td>
                        <td>300.00</td>
                        <td>
                            <span className='status-approved'>Approved</span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="/admin/Bill/OPD-bill/patient-profile-1081"
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
                            <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                                Stephen Jackson
                            </Link>
                        </td>
                        <td>APPNO6488</td>
                        <td>07/31/2024 05:19 PM</td>
                        <td>9552554252</td>
                        <td>Male</td>
                        <td>Reyan Jain</td>
                        <td>Offline</td>
                        <td>Urgent</td>
                        <td>Yes</td>
                        <td>Uttam Nagar, New Delhi</td>
                        <td>300.00</td>
                        <td>
                            <span className='status-pending'>Pending</span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="/admin/Bill/OPD-bill/patient-profile-1081"
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
                            <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                                Lincoln Yeo
                            </Link>
                        </td>
                        <td>APPNO6488</td>
                        <td>07/31/2024 05:19 PM</td>
                        <td>9552554252</td>
                        <td>Male</td>
                        <td>Reyan Jain</td>
                        <td>Offline</td>
                        <td>Urgent</td>
                        <td>Yes</td>
                        <td>Uttam Nagar, New Delhi</td>
                        <td>300.00</td>
                        <td>
                            <span className='status-rejected'>Rejected</span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="/admin/Bill/OPD-bill/patient-profile-1081"
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
                            <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                                Wesley Barresi
                            </Link>
                        </td>
                        <td>APPNO6488</td>
                        <td>07/31/2024 05:19 PM</td>
                        <td>9552554252</td>
                        <td>Male</td>
                        <td>Reyan Jain</td>
                        <td>Offline</td>
                        <td>Urgent</td>
                        <td>Yes</td>
                        <td>Uttam Nagar, New Delhi</td>
                        <td>300.00</td>
                        <td>
                            <span className='status-approved'>Approved</span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="/admin/Bill/OPD-bill/patient-profile-1081"
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
                            <Link to="/admin/Bill/OPD-bill/patient-profile-1081">
                                Baber Devan
                            </Link>
                        </td>
                        <td>APPNO6488</td>
                        <td>07/31/2024 05:19 PM</td>
                        <td>9552554252</td>
                        <td>Male</td>
                        <td>Reyan Jain</td>
                        <td>Offline</td>
                        <td>Urgent</td>
                        <td>Yes</td>
                        <td>Uttam Nagar, New Delhi</td>
                        <td>300.00</td>
                        <td>
                            <span className='status-approved'>Approved</span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <Link
                                        to="/admin/Bill/OPD-bill/patient-profile-1081"
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

export default AppointmentBillingtable