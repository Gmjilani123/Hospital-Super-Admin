import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LiaBullhornSolid } from "react-icons/lia";
import { FaMoneyBillWave } from "react-icons/fa";

import {
  PiCalendarCheckLight,
  PiFlaskLight,
  PiAmbulanceThin,
  PiMicroscopeThin,
  PiFilesThin,
  PiChartLineUp,
} from "react-icons/pi";

import { CiStethoscope } from "react-icons/ci";
import { LiaProceduresSolid, LiaDungeonSolid } from "react-icons/lia";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import {
  FaLuggageCart,
  FaDownload,
  FaCogs,
  FaSitemap,
  FaTint,
} from "react-icons/fa";
import { BsCameraVideo, BsCake2 } from "react-icons/bs";
import { IoIosUmbrella } from "react-icons/io";
import { GoDeviceDesktop } from "react-icons/go";

function Aside() {
  const [allAside, setAllAside] = useState({
    admin: false,
    career: false,
    setting: false,
    Addmission: false,

    // -----appointment---

    appointment: false,
    opd: false,
    ipd: false,
    pharmacy: false,
    frontOffice: false,
    zoom: false,
    setup: false,
    birthDeath: false,
    // billing: false,
    reports: false,
    humanResource: false,
    finance: false,
  });

  const changeOpen = (val, str) => {
    const clone = { ...allAside };
    for (const iterator in clone) {
      if (iterator == str) {
        clone[str] = val;
      } else {
        clone[iterator] = false;
      }
    }
    setAllAside(clone);
  };

  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
        data-bg-class="bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <img
              width={202}
              src="https://www.abarissoftech.com/assets/img/logo-2.png"
            />
          </a>
          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto"
          >
            <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle" />
            <i className="ti ti-x d-block d-xl-none ti-sm align-middle" />
          </a>
        </div>
        <div className="menu-inner-shadow" style={{ display: "none" }} />
        <ul className="menu-inner py-1 ps ps--active-y">
          {/* <li className={`menu-item ${allAside.admin ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link "
              onClick={() => {
                changeOpen(!allAside.admin, "admin");
              }}
            >
              <i className="menu-icon tf-icons ti ti-smart-home" />
              <div data-i18n="Dashboards">Dashboards</div>
              <div className="badge bg-primary rounded-pill ms-auto">5</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  <div data-i18n="Analytics">All Branches</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="dashboards-crm.html" className="menu-link">
                  <div data-i18n="CRM">Icon School & College</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-ecommerce-dashboard.html" className="menu-link">
                  <div data-i18n="eCommerce">Oxford International</div>
                </a>
              </li>
            </ul>
          </li> */}

          {/* -----DASHBOARD---- */}
          <li className="menu-item  open">
            <NavLink to="dashboard" className="menu-link ">
              <GoDeviceDesktop className="menu-icon " />
              <div data-i18n="Tables">Dashboard</div>
            </NavLink>
          </li>

          {/* ----Billing------ */}
          {/* <li className={`menu-item ${allAside.billing ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link menu-toggle"
              onClick={() => {
                changeOpen(!allAside.billing, "billing");
              }}
            >
              <PiFilesThin className="menu-icon tf-icons ti ti-smart-home" />
              <div data-i18n="Dashboards">Billing</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="#" className="menu-link">
                  <div>OPD Billing</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="#" className="menu-link">
                  <div>Pathology Billing</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="#" className="menu-link">
                  <div>Radiology Billing</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="#" className="menu-link">
                  <div>Blood Issue Billing</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="#" className="menu-link">
                  <div>Blood Components Issue Billing</div>
                </NavLink>
              </li>
            </ul>
          </li> */}
          {/* ---BILLING-- */}
          {/* ---BILLING-- */}

          <li className="menu-item  open">
            <NavLink to="Bill" className="menu-link ">
              <PiFilesThin className="menu-icon " />
              <div data-i18n="Tables">Billing</div>
            </NavLink>
          </li>

          {/* ----R E C E P T I O N---- */}
          <li className={`menu-item ${allAside.appointment ? "open" : ""}`}>
            <NavLink to="Appointment" className="menu-link ">
              <PiCalendarCheckLight className="menu-icon " />
              <div data-i18n="Tables">Appointment</div>
            </NavLink>
          </li>

          {/* ------OPD OUT-Patient */}
          <li className={`menu-item ${allAside.opd ? "open" : ""}`}>
            <NavLink to="OPD" className="menu-link ">
              <CiStethoscope className="menu-icon " />
              <div data-i18n="Tables">OPD-Out Patient</div>
            </NavLink>
          </li>

          {/* ----IPD-In Patient----- */}
          <li className={`menu-item ${allAside.ipd ? "open" : ""}`}>
            <NavLink to="IPD-Patient" className="menu-link ">
              <LiaProceduresSolid className="menu-icon " />
              <div data-i18n="Tables">IPD-In Patient</div>
            </NavLink>
          </li>

          {/* ------Pharmacy---- */}
          <li className={`menu-item ${allAside.pharmacy ? "open" : ""}`}>
            <NavLink to="Pharmacy-Bill-list" className="menu-link ">
              <MdOutlineLocalPharmacy className="menu-icon " />
              <div data-i18n="Tables">Pharmacy</div>
            </NavLink>
          </li>

          {/* --------Pathology--- */}
          <li className={`menu-item ${allAside.pharmacy ? "open" : ""}`}>
            <NavLink to="PathologyBill-List" className="menu-link ">
              <PiFlaskLight className="menu-icon " />
              <div data-i18n="Tables">Pathology</div>
            </NavLink>
          </li>

          {/*------Radiology-------  */}
          <li className={`menu-item ${allAside.pharmacy ? "open" : ""}`}>
            <NavLink to="Radiology" className="menu-link ">
              <PiMicroscopeThin className="menu-icon " />
              <div data-i18n="Tables">Radiology</div>
            </NavLink>
          </li>

          {/*------Blood Bank-------  */}
          {/* <li className={`menu-item ${allAside.pharmacy ? "open" : ""}`}>
            <NavLink to="bloodbankstatus" className="menu-link ">
              <FaTint className="menu-icon " />
              <div data-i18n="Tables">Blood Bank</div>
            </NavLink>
          </li> */}

          {/* -----Ambulance------ */}
          <li className={`menu-item ${allAside.pharmacy ? "open" : ""}`}>
            <NavLink to="Ambulance" className="menu-link">
              <PiAmbulanceThin className="menu-icon " />
              <div data-i18n="Tables">Ambulance</div>
            </NavLink>
          </li>

          {/* front---Office */}
          <li className={`menu-item ${allAside.pharmacy ? "open" : ""}`}>
            <NavLink to="Visitors" className="menu-link ">
              <LiaDungeonSolid className="menu-icon " />
              <div data-i18n="Tables">Front Office</div>
            </NavLink>
          </li>

          {/* ----Birth And Death Record--- */}
          <li className={`menu-item ${allAside.birthDeath ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link menu-toggle"
              onClick={() => {
                changeOpen(!allAside.birthDeath, "birthDeath");
              }}
            >
              <BsCake2 className="menu-icon tf-icons ti ti-smart-home" />
              <div data-i18n="Dashboards">Birth & Death Record</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="BirthRecord" className="menu-link">
                  <div>Birth Record</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="DeathRecord" className="menu-link">
                  <div>Death Record</div>
                </NavLink>
              </li>
            </ul>
          </li>

          {/* ----Human--Resource----- */}
          {/* <li className={`menu-item ${allAside.humanResource ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link menu-toggle"
              onClick={() => {
                changeOpen(!allAside.humanResource, "humanResource");
              }}
            >
              <FaSitemap className="menu-icon " />
              <div data-i18n="Tables">Human Resource</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="Staff-Directory" className="menu-link">
                  <div data-i18n="Basic">Staff Directory </div>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* -----TPA --Management------ */}
          {/* <li className={`menu-item ${allAside.download ? "open" : ""}`}>
            <NavLink to="TpaManagement" className="menu-link">
              <IoIosUmbrella className="menu-icon " />
              <div data-i18n="Tables">TPA Management</div>
            </NavLink>
          </li> */}

          {/* -----Messaging------ */}
          {/* <li className={`menu-item ${allAside.download ? "open" : ""}`}>
            <NavLink to="notification" className="menu-link">
              <LiaBullhornSolid className="menu-icon " />
              <div data-i18n="Tables">Messaging</div>
            </NavLink>
          </li> */}

          {/* -----I N V E N T O R Y------ */}
          {/* <li className={`menu-item ${allAside.inventory ? "open" : ""}`}>
            <NavLink to="Inventory" className="menu-link ">
              <FaLuggageCart className="menu-icon " />
              <div data-i18n="Tables">Inventory</div>
            </NavLink>
          </li> */}

          {/* -----D O W N L O A D  - C E N T E R------ */}
          {/* <li className={`menu-item ${allAside.download ? "open" : ""}`}>
            <NavLink to="Download" className="menu-link ">
              <FaDownload className="menu-icon " />
              <div data-i18n="Tables">Download Center</div>
            </NavLink>
          </li> */}

          {/* ----L I V E -- --C O N S U L T A N T */}
          {/* <li className={`menu-item ${allAside.zoom ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link menu-toggle"
              onClick={() => {
                changeOpen(!allAside.zoom, "zoom");
              }}
            >
              <BsCameraVideo className="menu-icon tf-icons ti ti-smart-home" />
              <div data-i18n="Dashboards">Live Consultant</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="zoom_conference" className="menu-link">
                  <div>Live Meeting</div>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* ----Reports--- */}
          {/* <li className={`menu-item ${allAside.reports ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link menu-toggle"
              onClick={() => {
                changeOpen(!allAside.reports, "reports");
              }}
            >
              <PiChartLineUp className="menu-icon tf-icons ti ti-smart-home" />
              <div data-i18n="Dashboards">Report</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="allTransactionReport" className="menu-link">
                  <div>All Transaction Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="AppointmentReport" className="menu-link">
                  <div>Appointment Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="OPD-Report" className="menu-link">
                  <div>OPD Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="IPD-Report" className="menu-link">
                  <div>IPD Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="OPD-BalanceReport" className="menu-link">
                  <div>OPD Balance Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="IPD-BalanceReport" className="menu-link">
                  <div>IPD Balance Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="OPD-DischargedPatient" className="menu-link">
                  <div>OPD Discharged Patient</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="IPD-DischargedPatient" className="menu-link">
                  <div>IPD Discharged Patient</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="PharmacyBillReport" className="menu-link">
                  <div>Pharmacy Bill Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="ExpiryMadicineReport" className="menu-link">
                  <div>Expiry Madicine Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="pathologyreport" className="menu-link">
                  <div>Pathology Patient Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="radiologyreport" className="menu-link">
                  <div>Radiology Patient Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="OT-Report" className="menu-link">
                  <div>OT Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="BloodDonorReport" className="menu-link">
                  <div>Blood Donor Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="ambulancereport" className="menu-link">
                  <div>Ambulance Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="BirthReport" className="menu-link">
                  <div>Birth Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="DeathReport" className="menu-link">
                  <div>Death Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="StaffReport" className="menu-link">
                  <div>Staff Attendance Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="InventoryStockReport" className="menu-link">
                  <div>Inventory Stock Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="InventoryItemReport" className="menu-link">
                  <div>Inventory Item Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="InventoryIssueReport" className="menu-link">
                  <div>Inventory issue Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="AuditTrailReport" className="menu-link">
                  <div>Audit Trail Report</div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="PatientVisitReport" className="menu-link">
                  <div>Patient Visit Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="PatientBillReport" className="menu-link">
                  <div>Patient Bill Report</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="ReferralReport" className="menu-link">
                  <div>Referral Report</div>
                </NavLink>
              </li>
            </ul>
          </li> */}

          {/* ----SET UP */}
          {/* <li className={`menu-item ${allAside.setup ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link menu-toggle"
              onClick={() => {
                changeOpen(!allAside.setup, "setup");
              }}
            >
              <FaCogs className="menu-icon tf-icons ti ti-smart-home" />
              <div data-i18n="Dashboards">Setup</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="PatientList" className="menu-link">
                  <div>Patient</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="Bed" className="menu-link">
                  <div>Bed</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="setupFrontOffice" className="menu-link">
                  <div>Front Office</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="#" className="menu-link">
                  <div>Blood Bank</div>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="onlineappointment" className="menu-link">
                  <div>Appointment</div>
                </NavLink>
              </li>
            </ul>
          </li> */}


          <li className={`menu-item ${allAside.finance ? "open" : ""}`}>
            <Link
              to="#"
              className="menu-link menu-toggle"
              onClick={() => {
                changeOpen(!allAside.finance, "finance");
              }}
            >
              <FaMoneyBillWave className="menu-icon " />
              <div data-i18n="Tables">Finance</div>
            </Link>
            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="income" className="menu-link">
                  <div data-i18n="Basic">Income </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="#" className="menu-link">
                  <div data-i18n="Basic">Expenses </div>
                </NavLink>
              </li>
            </ul>
          </li>

        </ul>
      </aside>
    </>
  );
}
export default Aside;
