import "./assets/css/pages/table.module.css";
import "./assets/css/rtl/core.css";
import "./assets/css/rtl/theme-default.css";
import "./assets/css/pages/demo.css";
import "../src/assets/fonts/tabler-icons.css";
import "./assets/css/custom.css";
import "react-quill/dist/quill.snow.css";

import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "./page/admin";

import AppointmentPage from "./page/appointmentPage/index.js";
import DoctorAppointment from "./componets/appointment/doctorAppointment/DoctorAppointment.js";
import Queue from "./componets/appointment/queue/Queue.js";
import PatientDetails from "./componets/appointment/patientDetails/PatientDetails.js";
import OpdPage from "./page/opd/index.js";
import AddPatient from "./componets/opd/addPatient/AddPatient.js";
import AddNewPatient from "./componets/opd/addNewPatient/AddNewPatient.js";
import IpdPage from "./page/ipd/index.js";
import IpdAddPatient from "./componets/ipd/ipdAddPatient/IpdAddPatient.js";
import IpdNewPatient from "./componets/ipd/ipdNewPatient/IpdNewPatient.js";
import DischargedPatient from "./componets/ipd/dischargedPatient/DischargedPatient.js";
import PharmacyPage from "./page/pharmacy/index.js";
import PatientProfile from "./componets/opd/patientProfile/PatientProfile.js";
import PatientProfilePrescription from "./componets/opd/patientProfile/visit/patientProfilePrescription/PatientProfilePrescription.js";
import VisitDetails from "./componets/opd/patientProfile/visit/visitDetails/VisitDetails.js";
import EditVisitDetails from "./componets/opd/patientProfile/visit/visitDetails/editVisitDetails/EditVisitDetails.js";
import NewVisitPatient from "./componets/opd/patientProfile/visit/NewVisitPatient/NewVisitPatient.js";
import PatientToIpd from "./componets/opd/patientProfile/visit/PatientToIpd/PatientToIpd.js";
import VisitDetailsOverview from "./componets/opd/patientProfile/visit/VisitDetailsOverview/VisitDetailsOverview.js";
import AddPaymnet from "./componets/opd/patientProfile/visit/VisitDetailsOverview/paymentTab/addPayment/AddPayment.js";
import NewCheckups from "./componets/opd/patientProfile/visit/VisitDetailsOverview/visitCheckups/newCheckups/NewCheckups.js";
import IpdProfile from "./componets/ipd/ipdProfile/IpdProfile.js";
import IpdOperationDetails from "./componets/ipd/ipdProfile/ipdOperationTab/IpdOperationDetails.js";
import AddPaymentIpd from "./componets/ipd/ipdProfile/ipdPaymentsTab/AddPaymentIpd.js";
import IpdPatientDetails from "./componets/ipd/ipdProfile/ipdPatientDetails/IpdPatientDetails.js";
import EditPatientOverview from "./componets/ipd/ipdProfile/ipdOverviewTab/editPatientOverview/EditPatientOverview.js";
import IpdPatientDischarged from "./componets/ipd/ipdProfile/ipdOverviewTab/ipdPatientDischarged/IpdPatientDischarged.js";
import VisitDetailsOverviewEdit from "./componets/opd/patientProfile/visit/VisitDetailsOverview/visitoverview/visitDetailsOverviewEdit/VisitDetailsOverviewEdit.js";
import AddCharges from "./componets/opd/patientProfile/visit/VisitDetailsOverview/charges/addCharges/AddCharges.js";
import MadicineStock from "./componets/pharmacy/madicineStock/MadicineStock.js";
import MadicinePurchaseList from "./componets/pharmacy/madicineStock/madicinePurchaseList/MadicinePurchaseList.js";
import PurchaseDetails from "./componets/pharmacy/madicineStock/madicinePurchaseList/purchaseDetails/PurchaseDetails.js";
import MadicineDetails from "./componets/pharmacy/madicineStock/madicineDetails/MadicineDetails.js";
import BillDetails from "./componets/pharmacy/billDetails/BillDetails.js";
import PathologyPage from "./page/pathology/index.js";
import PathologyBillDetails from "./componets/pathology/pathologyBillDetails/PathologyBillDetails.js";
import PathologyTest from "./componets/pathology/pathologyTest/PathologyTest.js";
import TestDetails from "./componets/pathology/pathologyTest/testDetails/TestDetails.js";
import RadiologyPage from "./page/radiology/index.js";
import RadiologyBillDetails from "./componets/radiology/radiologyBillDetails/RadiologyBillDetails.js";
import RadiologyTest from "./componets/radiology/radiologyTest/RadiologyTest.js";
import RadiologyTestDetails from "./componets/radiology/radiologyTest/radiologyTestDetails/RadiologyTestDetails.js";
import AmbulancePage from "./page/ambulance/index.js";
import AmbulancePayment from "./componets/ambulance/ambulancePayment/AmbulancePayment.js";
import AmbulanceList from "./componets/ambulance/AmbulanceList/AmbulanceList.js";
import AddAmbulance from "./componets/ambulance/AmbulanceList/addAmbulance/AddAmbulance.js";
import AmbulanceBillDetails from "./componets/ambulance/ambulanceBillDetails/AmbulanceBillDetails.js";
import AddAmbulanceCall from "./componets/ambulance/addAmbulanceCall/AddAmbulanceCall.js";
import InventoryPage from "./page/inventory/index.js";
import IssueItem from "./componets/inventory/issueItem/IssueItem.js";
import DownloadPage from "./page/download/Download.js";
import UploadContent from "./componets/download/uploadContent/UploadContent.js";
import ZoomMeetingPage from "./page/liveConsultant/zoomMeeting/index.js";
import FrontOfficePage from "./page/frontOffice/index.js";
import EditVisitor from "./componets/frontOffice/editVisitor/EditVisitor.js";
import VisitorDetails from "./componets/frontOffice/visitorDetails/VisitorDetails.js";
import AddVisitor from "./componets/frontOffice/addVisitor/AddVisitor.js";
import PhoneCallLog from "./componets/frontOffice/phoneCallLog/PhoneCallLog.js";
import AddCall from "./componets/frontOffice/phoneCallLog/addCall/AddCall.js";
import PhoneCallDetails from "./componets/frontOffice/phoneCallLog/phoneCallDetails/PhoneCallDetails.js";
import Complain from "./componets/frontOffice/complain/Complain.js";
import AddComplain from "./componets/frontOffice/complain/addComplain/AddComplain.js";
import ComplainDetails from "./componets/frontOffice/complain/complainDetails/ComplainDetails.js";
import PostalReceive from "./componets/frontOffice/postalRecieve/PostalReceive.js";
import AddReceive from "./componets/frontOffice/postalRecieve/addReceive/AddReceive.js";
import PostalReceiveDetails from "./componets/frontOffice/postalRecieve/postalReceiveDetails/PostalReceiveDetails.js";
import PostalDispatch from "./componets/frontOffice/postalDispatch/PostalDispatch.js";
import AddDispatch from "./componets/frontOffice/postalDispatch/addDispatch/AddDispatch.js";
import EditDispatch from "./componets/frontOffice/postalDispatch/editPostalDispatch/EditPostalDispatch.js";
import TpaManagementPage from "./page/tpaManagement/index.js";
import TpaManagementDetails from "./componets/tpa-Management/tpaManagementDetails/TpaManagementDetails.js";
import PatientPage from "./page/setupPage/patient/index.js";
import NewPatientAdd from "./componets/setUp/patient/newPatientAdd/NewPatientAdd.js";
import PatientDetail from "./componets/setUp/patient/patientDetail/PatientDetail.js";
import SetUpAppointmente from "./page/setupPage/setupAppointmente/index.js";
import AddShift from "./componets/setUp/setUpAppointmenteComp/shift/addShift/AddShift.js";
import FrontOfficePages from "./page/setupPage/frontOffice/index.js";
import Slots from "./componets/setUp/setUpAppointmenteComp/slot/Slot.js";
import Shift from "./componets/setUp/setUpAppointmenteComp/shift/Shift.js";
import DoctorShift from "./componets/setUp/setUpAppointmenteComp/doctorShift/DoctorShift.js";
import VisitorPurpose from "./componets/setUp/frontOffice/visitorPurpose/VisitorPurpose.js";
import AddPurpose from "./componets/setUp/frontOffice/visitorPurpose/addPurpose/AddPurpose.js";
import ComplainType from "./componets/setUp/frontOffice/complainType/ComplainType.js";
import AddComplainType from "./componets/setUp/frontOffice/complainType/addComplainType/AddComplainType.js";
import Source from "./componets/setUp/frontOffice/source/Source.js";
import AddSource from "./componets/setUp/frontOffice/source/addSource/AddSource.js";
import AppointmentPriority from "./componets/setUp/frontOffice/appointmentPriority/AppointmentPriority.js";
import AddPriority from "./componets/setUp/frontOffice/appointmentPriority/addPriority/AddPriority.js";
import BedPage from "./page/setupPage/bed/index.js";
import BedStatus from "./componets/setUp/bed/bedStatus/BedStatus.js";
import BedList from "./componets/setUp/bed/bedList/BedList.js";
import AddBed from "./componets/setUp/bed/bedList/addBed/AddBed.js";
import BirthRecordPage from "./page/birth&DeathPage/birthRecord/index.js";
import BirthRecordDetails from "./componets/birth&Death/birthRecord/birthRecordDetails/BirthRecordDetails.js";
import DeathRecordPage from "./page/birth&DeathPage/deathRecord/index.js";
import DeathRecordDetails from "./componets/birth&Death/deathRecord/deathRecordDetails/DeathRecordDetails.js";
import AppointmentReportPage from "./page/reportsPage/appointmentReport/index.js";
import OpdReportPage from "./page/reportsPage/opdReport/index.js";
import IpdReportPage from "./page/reportsPage/ipdReport/index.js";
import OpdDischargedPatientPage from "./page/reportsPage/opdDischargedPatient/index.js";
import IpdDischargedPatientPage from "./page/reportsPage/ipdDischargedPatient/index.js";
import ExpiryMadicineReportPage from "./page/reportsPage/expiryMadicineReport/index.js";
import PathologyPatientReportPage from "./page/reportsPage/pathologyPatientReport/index.js";
import RadiologyPatientReportPage from "./page/reportsPage/radiologyPatientReport/index.js";
import OtReportPage from "./page/reportsPage/otReport/index.js";
import BloodDonorReportPage from "./page/reportsPage/bloodDonorReport/index.js";
import AmbulanceReportPage from "./page/reportsPage/ambulanceReport/index.js";
import BirthReportPage from "./page/reportsPage/birthReport/index.js";
import DeathReportPage from "./page/reportsPage/deathReport/index.js";
import StaffAttendanceReportPage from "./page/reportsPage/staffAttendanceReport/index.js";
import InventoryStockReportPage from "./page/reportsPage/inventoryStockReport/index.js";
import InventoryItemReportPage from "./page/reportsPage/inventoryItemReport/index.js";
import InventoryIssueReportPage from "./page/reportsPage/inventoryIssueReport/index.js";
import AuditTrailReportPage from "./page/reportsPage/auditReport/index.js";
import PatientVisitReportPage from "./page/reportsPage/patientVisitReport/index.js";
import PatientBillReportPage from "./page/reportsPage/patientBillReport/index.js";
import ReferralReportPage from "./page/reportsPage/referralReport/index.js";
import AllTransactionReportPage from "./page/reportsPage/allTransactionReport/index.js";
import OpdBalanceReportPage from "./page/reportsPage/opdBalanceReport/index.js";
import IpdBalanceReportPage from "./page/reportsPage/ipdBalanceReport/index.js";
import PharmacyBillReportPage from "./page/reportsPage/pharmacyBillReport/index.js";
import BillingPage from "./page/billingPage/index.js";
import OpdBilling from "./componets/billing/opdBilling/OpdBilling.js";
import OpdAddPatient from "./componets/billing/opdBilling/opdAddPatient/OpdAddPatient.js";
import OpdBillingPatientProfile from "./componets/billing/opdBilling/opdBillingPatientProfile/OpdBillingPatientProfile.js";
import VisitDetail from "./componets/billing/opdBilling/opdBillingPatientProfile/visits/visitDetail/VisitDetail.js";
import EditVisitDetail from "./componets/billing/opdBilling/opdBillingPatientProfile/visits/visitDetail/editVisitDetail/EditVisitDetail.js";
import VisitId from "./componets/billing/opdBilling/opdBillingPatientProfile/visits/visitId/VisitId.js";
import PathologyBilling from "./componets/billing/pathologyBilling/PathologyBilling.js";
import AddPatientPathologyBilling from "./componets/billing/pathologyBilling/addPatientPathologyBilling/AddPatientPathologyBilling.js";
import PathologyBillDetailss from "./componets/billing/pathologyBilling/pathologyBillDetails/PathologyBillDetails.js";
import RadiologyBilling from "./componets/billing/radiologyBilling/RadiologyBilling.js";
import AddPatientRadiologyBilling from "./componets/billing/radiologyBilling/addPatientRadiologyBilling/AddPatientRadiologyBilling.js";
import RadiologyBillingDetail from "./componets/billing/radiologyBilling/radiologyBillingDetail/RadiologyBillingDetail.js";
import BloodIssueBilling from "./componets/billing/bloodIssueBilling/BloodIssueBilling.js";
import BloodIssue from "./componets/billing/bloodIssueBilling/issueBlood/BloodIssue.js";
import BloodIssueDetails from "./componets/billing/bloodIssueBilling/bloodIssueDetails/BloodIssueDetails.js";
import PaymentBlood from "./componets/billing/bloodIssueBilling/paymentBlood/PaymentBlood.js";
import BloodComponent from "./componets/billing/bloodComponent/BloodComponent.js";
import BloodComponentIssueDetails from "./componets/billing/bloodComponent/BloodComponentIssueDetails/BloodComponentIssueDetails.js";
import IssueComponent from "./componets/billing/bloodComponent/IssueComponent/IssueComponent.js";
// -----human-resource--
import StaffDirectoryPage from "./page/staffDirectory/staffDirectory/index.js";
import CardView from "./componets/humanResource/humanResource/staffDirectory/cardView/CardView.js";
import StaffListView from "./componets/humanResource/humanResource/staffDirectory/staffListView/StaffListView.js";
import CreateStaff from "./componets/humanResource/humanResource/staffDirectory/createStaff/CreateStaff.js";
import EditStaffListView from "./componets/humanResource/humanResource/staffDirectory/staffListView/editStaffListView/EditStaffListView.js";
import StaffProfile from "./componets/humanResource/humanResource/staffDirectory/staffProfile/StaffProfile.js";
import ViewPayslip from "./componets/humanResource/humanResource/staffDirectory/staffProfile/staffProfileRight/tabPayroll/viewPayslip/ViewPayslip.js";
import LeaveDetails from "./componets/humanResource/humanResource/staffDirectory/staffProfile/staffProfileRight/tabLeaves/leavesDetails/LeaveDetails.js";
import MyLeave from "./componets/humanResource/humanResource/myLeave/MyLeave.js";
import NoticeBoardPage from "./page/noticeBoard/index.js";
import EditMessage from "./componets/noticeBoard/editMessage/EditMessage.js";
import PostNewMessage from "./componets/noticeBoard/postNewMessage/PostNewMessage.js";
import SendSms from "./componets/noticeBoard/sendSms/SendSms.js";
import SendEmail from "./componets/noticeBoard/sendEmail/SendEmail.js";
import DashboardPage from "./page/dashboard/index.js";
import BloodBankPage from "./page/bloodBank/index.js";
import AppointmentBilling from "./componets/billing/appointmentBilling/AppointmentBilling.js";
import AddAppointmentPage from "./page/addAppointmentPage/index.js";
import IncomeListPage from "./page/incomeListPage/index.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />

        <Route path="/admin" element={<AdminPage />}>
          {/* ----daud---route--start-- Hospital----*/}
          {/* junaid work */}

          {/* ---dashboard--- */}
          <Route path="dashboard" element={<DashboardPage />} />
          {/* -------Appointment---- */}
          <Route path="Appointment" element={<AppointmentPage />} />
          <Route
            path="Appointment/DoctorAppointment"
            element={<DoctorAppointment />}
          />
          <Route path="Appointment/Queue" element={<Queue />} />
          <Route
            path="Appointment/PatientDetails"
            element={<PatientDetails />}
          />

          {/* ---OPD-Out Patient---- */}
          {/* ---OPD-Out Patient---- */}

          <Route path="OPD" element={<OpdPage />} />
          <Route path="OPD/Add-Patient" element={<AddPatient />} />
          <Route path="OPD/Add-NewPatient" element={<AddNewPatient />} />
          <Route path="OPD/PatientProfile" element={<PatientProfile />} />
          <Route
            path="OPD/PatientProfile/prescription"
            element={<PatientProfilePrescription />}
          />
          <Route
            path="OPD/PatientProfile/VisitDetails"
            element={<VisitDetails />}
          />
          <Route
            path="OPD/PatientProfile/VisitDetails/EditVisitDetails"
            element={<EditVisitDetails />}
          />
          <Route
            path="OPD/PatientProfile/NewVisitPatient"
            element={<NewVisitPatient title="New Visit Patient Details" />}
          />
          <Route
            path="OPD/PatientProfile/MovePatient-To-IPD"
            element={<PatientToIpd />}
          />
          {/* ---visit--details--over-view--- */}
          <Route
            path="OPD/PatientProfile/VisitDetails-overview"
            element={<VisitDetailsOverview />}
          />
          <Route
            path="OPD/PatientProfile/VisitDetails-overview/Edit-V.D-Overview"
            element={<VisitDetailsOverviewEdit />}
          />
          <Route
            path="OPD/PatientProfile/VisitDetails-overview/AddPayment"
            element={<AddPaymnet title="Add Payment" />}
          />
          <Route
            path="OPD/PatientProfile/VisitDetails-overview/NewCheckups"
            element={<NewCheckups />}
          />

          <Route
            path="OPD/PatientProfile/VisitDetails-overview/AddCharges"
            element={<AddCharges />}
          />
          {/* ---OPD-Out Patient----end--- */}

          {/* ---IPD-In Patient--- */}
          <Route path="IPD-Patient" element={<IpdPage />} />
          <Route path="IPD-Patient/AddPatient" element={<IpdAddPatient />} />
          <Route path="IPD-Patient/AddNewPatient" element={<IpdNewPatient />} />
          <Route
            path="IPD-Patient/discharged"
            element={<DischargedPatient />}
          />
          {/* --ipd-profile-TAB */}
          <Route
            path="IPD-Patient/IPD-patient-Profile"
            element={<IpdProfile />}
          />
          <Route
            path="IPD-Patient/IPD-patient-Profile/OperationDetails"
            element={<IpdOperationDetails />}
          />
          <Route
            path="IPD-Patient/IPD-patient-Profile/AddPaymentIPD"
            element={<AddPaymentIpd />}
          />
          <Route
            path="IPD-Patient/IPD-patient-Profile/IPD-PatientDetails"
            element={<IpdPatientDetails />}
          />
          <Route
            path="IPD-Patient/IPD-patient-Profile/EditPatient-Overview"
            element={<EditPatientOverview />}
          />
          <Route
            path="IPD-Patient/IPD-patient-Profile/IPD-PatientDischarged"
            element={<IpdPatientDischarged />}
          />

          {/* ----PHARMACY--- */}
          <Route path="Pharmacy-Bill-list" element={<PharmacyPage />} />
          <Route
            path="Pharmacy-Bill-list/Bill-Detail"
            element={<BillDetails />}
          />

          <Route
            path="Pharmacy-Bill-list/MadicineStock"
            element={<MadicineStock />}
          />
          <Route
            path="Pharmacy-Bill-list/MadicineStock/MadicineDetails"
            element={<MadicineDetails />}
          />
          <Route
            path="Pharmacy-Bill-list/MadicineStock/MadicinePurchase"
            element={<MadicinePurchaseList />}
          />
          <Route
            path="Pharmacy-Bill-list/MadicineStock/MadicinePurchase/PurchaseDetails"
            element={<PurchaseDetails />}
          />
          {/* ------P A T H O L O G Y------ */}
          <Route path="PathologyBill-List" element={<PathologyPage />} />
          <Route
            path="PathologyBill-List/BillDetails"
            element={<PathologyBillDetails />}
          />
          <Route
            path="PathologyBill-List/PathologyTest"
            element={<PathologyTest />}
          />
          <Route
            path="PathologyBill-List/PathologyTest/TestDetails"
            element={<TestDetails />}
          />

          {/* ----R A D I O L O G Y---- */}
          <Route path="Radiology" element={<RadiologyPage />} />
          <Route
            path="Radiology/BillDetails"
            element={<RadiologyBillDetails />}
          />
          <Route path="Radiology/RadiologyTest" element={<RadiologyTest />} />
          <Route
            path="Radiology/RadiologyTest/testDetails"
            element={<RadiologyTestDetails />}
          />

          {/* -----A M B U L A N C E------ */}
          <Route path="Ambulance" element={<AmbulancePage />} />
          <Route
            path="Ambulance//getcallambulance"
            element={<AddAmbulanceCall />}
          />

          <Route path="Ambulance/Payment" element={<AmbulancePayment />} />
          <Route
            path="Ambulance/AmbulanceBillDetails"
            element={<AmbulanceBillDetails />}
          />
          <Route path="Ambulance/AmbulanceList" element={<AmbulanceList />} />
          <Route
            path="Ambulance/AmbulanceList/addAmbulance"
            element={<AddAmbulance />}
          />

          {/* ----front--office--Start---- */}
          <Route path="Visitors" element={<FrontOfficePage />} />
          <Route path="Visitors/AddVisitor" element={<AddVisitor />} />
          <Route path="Visitors/EditVisitor" element={<EditVisitor />} />
          <Route path="Visitors/visitorDetails" element={<VisitorDetails />} />
          <Route path="Visitors/PhoneCallLog" element={<PhoneCallLog />} />
          <Route path="Visitors/PhoneCallLog/AddCall" element={<AddCall />} />
          <Route
            path="Visitors/PhoneCallLog/CallDetails"
            element={<PhoneCallDetails />}
          />
          <Route path="Visitors/Complain" element={<Complain />} />
          <Route
            path="Visitors/Complain/details"
            element={<ComplainDetails />}
          />
          <Route
            path="Visitors/Complain/AddComplain"
            element={<AddComplain />}
          />
          <Route path="Visitors/PostalRecieve" element={<PostalReceive />} />
          <Route
            path="Visitors/PostalRecieve/AddReceive"
            element={<AddReceive />}
          />
          <Route
            path="Visitors/PostalRecieve/PostalReceiveDetails"
            element={<PostalReceiveDetails />}
          />
          {/* --postal-dispatch-- */}
          <Route path="Visitors/PostalDispatch" element={<PostalDispatch />} />
          <Route
            path="Visitors/PostalDispatch/Add-Dispatch"
            element={<AddDispatch />}
          />
          <Route
            path="Visitors/PostalDispatch/EditDispatch"
            element={<EditDispatch />}
          />
          {/* ----front--office--End---- */}

          {/* TPA--MANAGEMENT--- */}
          <Route path="TpaManagement" element={<TpaManagementPage />} />
          <Route
            path="TpaManagement/Details"
            element={<TpaManagementDetails />}
          />

          {/* ----I N V E N T O R Y---- */}
          <Route path="Inventory" element={<InventoryPage />} />
          <Route path="Inventory/IssueItem" element={<IssueItem />} />

          {/* ----D O W N L O A D --  C E N T E R----- */}
          <Route path="Download" element={<DownloadPage />} />
          <Route path="Download/Upload" element={<UploadContent />} />

          {/* -----SETUP--- ---------*/}
          {/* -----SETUP--- ---------*/}
          {/* -----SETUP--- ---------*/}
          {/* patient */}
          <Route path="PatientList" element={<PatientPage />} />
          <Route path="PatientList/newPatientAdd" element={<NewPatientAdd />} />
          <Route path="PatientList/PatientDetail" element={<PatientDetail />} />
          {/* appointment */}
          <Route path="onlineappointment" element={<SetUpAppointmente />}>
            <Route path="Slots" element={<Slots />} />
            <Route path="DoctorShift" element={<DoctorShift />} />
            <Route path="Shift" element={<Shift />} />
          </Route>
          <Route path="setupAppointment/AddShift" element={<AddShift />} />
          {/* front-office- */}
          <Route path="setupFrontOffice" element={<FrontOfficePages />}>
            <Route path="VisitorPurpose" element={<VisitorPurpose />} />
            <Route path="complainttype" element={<ComplainType />} />
            <Route path="Source" element={<Source />} />
            <Route
              path="AppointmentPriority"
              element={<AppointmentPriority />}
            />
          </Route>
          <Route
            path="setupFrontOffice/VisitorPurpose/AddPurpose"
            element={<AddPurpose />}
          />
          <Route
            path="setupFrontOffice/complainttype/AddComplainType"
            element={<AddComplainType />}
          />
          <Route
            path="setupFrontOffice/Source/AddSource"
            element={<AddSource />}
          />
          <Route
            path="setupFrontOffice/AppointmentPriority/AddPriority"
            element={<AddPriority />}
          />
          {/* --Bed-- */}
          <Route path="Bed" element={<BedPage />}>
            <Route path="BedStatus" element={<BedStatus />} />
            <Route path="BedList" element={<BedList />} />
          </Route>
          <Route path="Bed/BedList/AddBed" element={<AddBed />} />
          {/* blood-bank */}

          {/* -------Zoom-meeting---- */}
          <Route path="zoom_conference" element={<ZoomMeetingPage />} />

          {/* -----B I R T H -- & -- D E A T H ----R E C O R D--- */}
          <Route path="BirthRecord" element={<BirthRecordPage />} />
          <Route
            path="BirthRecord/birthrecordDetails"
            element={<BirthRecordDetails />}
          />
          <Route path="DeathRecord" element={<DeathRecordPage />} />
          <Route
            path="DeathRecord/deathrecordDetails"
            element={<DeathRecordDetails />}
          />

          {/* -----REPORTS--- */}
          {/* -----REPORTS--- */}
          {/* -----REPORTS--- */}
          {/* --Appointment report--------- */}
          <Route path="AppointmentReport" element={<AppointmentReportPage />} />
          <Route path="OPD-Report" element={<OpdReportPage />} />
          <Route path="IPD-Report" element={<IpdReportPage />} />
          <Route
            path="OPD-DischargedPatient"
            element={<OpdDischargedPatientPage />}
          />
          <Route
            path="IPD-DischargedPatient"
            element={<IpdDischargedPatientPage />}
          />

          <Route
            path="ExpiryMadicineReport"
            element={<ExpiryMadicineReportPage />}
          />
          <Route
            path="pathologyreport"
            element={<PathologyPatientReportPage />}
          />
          <Route
            path="radiologyreport"
            element={<RadiologyPatientReportPage />}
          />
          <Route path="OT-Report" element={<OtReportPage />} />
          <Route path="BloodDonorReport" element={<BloodDonorReportPage />} />
          <Route path="ambulancereport" element={<AmbulanceReportPage />} />
          <Route path="BirthReport" element={<BirthReportPage />} />
          <Route path="DeathReport" element={<DeathReportPage />} />
          <Route path="StaffReport" element={<StaffAttendanceReportPage />} />
          <Route
            path="InventoryStockReport"
            element={<InventoryStockReportPage />}
          />
          <Route
            path="InventoryItemReport"
            element={<InventoryItemReportPage />}
          />
          <Route
            path="InventoryIssueReport"
            element={<InventoryIssueReportPage />}
          />

          <Route path="AuditTrailReport" element={<AuditTrailReportPage />} />
          <Route
            path="PatientVisitReport"
            element={<PatientVisitReportPage />}
          />
          <Route path="PatientBillReport" element={<PatientBillReportPage />} />
          <Route path="ReferralReport" element={<ReferralReportPage />} />
          <Route
            path="allTransactionReport"
            element={<AllTransactionReportPage />}
          />
          <Route path="OPD-BalanceReport" element={<OpdBalanceReportPage />} />
          <Route path="IPD-BalanceReport" element={<IpdBalanceReportPage />} />
          <Route
            path="PharmacyBillReport"
            element={<PharmacyBillReportPage />}
          />
          {/* -----REPORTS---END */}

          {/* -----Billing--- */}

          <Route path="Bill" element={<BillingPage />} />
          {/* Appointment-billing---- */}
          <Route path="Bill/appointment-bill" element={<AppointmentBilling />} />
          <Route path="appointment/add" element={<AddAppointmentPage />} />
          <Route path="newPatient/add" element={<AddNewPatient />} />
          {/* opd-billing---- */}
          <Route path="Bill/OPD-bill" element={<OpdBilling />} />
          <Route
            path="Bill/OPD-bill/opdAddPatient"
            element={<OpdAddPatient />}
          />
          <Route
            path="Bill/OPD-bill/patient-profile-1081"
            element={<OpdBillingPatientProfile />}
          />
          <Route
            path="Bill/OPD-bill/patient-profile-1081/detail"
            element={<VisitDetail />}
          />
          <Route
            path="Bill/OPD-bill/patient-profile-1081/detail/Edit"
            element={<EditVisitDetail />}
          />
          <Route
            path="Bill/OPD-bill/patient-profile-1081/ID"
            element={<VisitId />}
          />

          {/* ---pathology-billing--- */}
          <Route path="Bill/Pathology" element={<PathologyBilling />} />
          <Route
            path="Bill/Pathology/addPatientpathology"
            element={<AddPatientPathologyBilling />}
          />
          <Route
            path="Bill/Pathology/pathologyBillDetails"
            element={<PathologyBillDetailss />}
          />
          {/* -Radiology-billing-- */}
          <Route path="Bill/Radiology" element={<RadiologyBilling />} />
          <Route
            path="Bill/Radiology/addPatientRadiology"
            element={<AddPatientRadiologyBilling />}
          />
          <Route
            path="Bill/Radiology/radiologyBillDetails"
            element={<RadiologyBillingDetail />}
          />

          {/* --blood-issue---billing-- */}
          <Route path="Bill/bloodIssue" element={<BloodIssueBilling />} />
          <Route
            path="Bill/bloodIssue/addIssueBlood"
            element={<BloodIssue />}
          />
          <Route
            path="Bill/bloodIssue/BloodIssueDetails"
            element={<BloodIssueDetails />}
          />
          <Route
            path="Bill/bloodIssue/PaymentBlood"
            element={<PaymentBlood />}
          />
          {/* ----blood-component---- */}
          <Route path="Bill/BloodComponent" element={<BloodComponent />} />
          <Route
            path="Bill/BloodComponent/Issuecomponent"
            element={<IssueComponent />}
          />
          <Route
            path="Bill/BloodComponent/BloodCompoIssueDetails"
            element={<BloodComponentIssueDetails />}
          />

          {/* ----H U M A N ---R E S O U R C E----- */}

          {/* -------staff-directory----- */}
          <Route path="Staff-Directory" element={<StaffDirectoryPage />}>
            <Route path="Staff-cardView" element={<CardView />} />
            <Route path="Staff-ListView" element={<StaffListView />} />
          </Route>

          <Route path="Staff-Directory/MyLeave" element={<MyLeave />} />
          <Route
            path="Staff-Directory/create-staff"
            element={<CreateStaff title={"Basic Information"} />}
          />

          <Route
            path="Staff-Directory/Edit-staff"
            element={<EditStaffListView title={"Edit Baasic Information"} />}
          />
          <Route
            path="Staff-Directory/Staff-Profile"
            element={<StaffProfile />}
          />

          <Route
            path="Staff-Directory/Staff-Profile/Payroll-Payslip"
            element={<ViewPayslip />}
          />
          <Route
            path="Staff-Directory/Staff-Profile/leaves-details"
            element={<LeaveDetails />}
          />

          {/* ----NOTICE--BOARD--- */}
          <Route path="notification" element={<NoticeBoardPage />} />
          <Route path="notification/EditMessage" element={<EditMessage />} />
          <Route path="notification/PostMessage" element={<PostNewMessage />} />
          <Route path="notification/mailsms" element={<SendSms />} />
          <Route path="notification/composemail" element={<SendEmail />} />

          {/* -----Blood--Bank--- */}
          <Route path="bloodbankstatus" element={<BloodBankPage />} />

          {/* -----Income--- */}
          <Route path="income" element={<IncomeListPage />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
