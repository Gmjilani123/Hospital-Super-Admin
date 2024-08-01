import React from "react";
import { ImPlus } from "react-icons/im";
function HospitalAdd() {
  return (
    <div>
      <div className="hospital_address_body_sec">
        <div>
          <div>
            <span className="centra">
              <ImPlus className="tex"/> Central Hospital
            </span>
          </div>
          <h1 className="mb-0">Central Hospital & Research Center</h1>
        </div>
        <div>
          <ul className="hospital_add_list">
            <li>
              <b>Address</b>:NFC Uttam Nagar
            </li>
            <li>
              <b>Phone No</b>:9843965484
            </li>

            <li>
              <b>Email</b>:centralHospital12@gmail.com
            </li>

            <li>
              <b>Website</b>:www.centralHospitl.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white bg-dark text-center">
        <b>Ambulance</b>
      </div>
    </div>
  );
}

export default HospitalAdd;
