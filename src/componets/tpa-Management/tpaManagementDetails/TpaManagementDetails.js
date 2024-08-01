import { useState } from "react";
import ExportFile from "../../../common/exportFile/ExportFile";
import TpaDetailsTable from "./TpaDetailsTable";

import Select, { components } from "react-select";

const CustomControl = ({ children, ...props }) => (
  <components.Control {...props}>
    {children}
    <button
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        marginLeft: "8px",
      }}
      onClick={() =>
        props.selectProps.onSearchClick(props.selectProps.inputValue)
      }
    >
      Search
    </button>
  </components.Control>
);

function TpaManagementDetails() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSearchClick = (inputValue) => {
    alert(`You searched for: ${inputValue}`);
  };
  return (
    <div className="content_wrapper_main">
      <div className="card">
        <div className="dataTables_wrapper ">
          <div className="row_wrapper">
            <div className="row">
              <div className="col">
                <h4>TPA Management Details</h4>
              </div>
            </div>
          </div>
          <div className="row_wrapper1">
            <div className="row">
              <div className="col">
                <div className="d-flex text_selct">
                  <h5>Charge Type:-</h5>
                  <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    isSearchable
                    placeholder="Select an option..."
                    components={{ Control: CustomControl }}
                    onSearchClick={handleSearchClick}
                  />
                  {/* {selectedOption && (
                    <p>You selected: {selectedOption.label}</p>
                  )} */}
                </div>
              </div>
            </div>
          </div>
          <div className="row me-2">
            <div className="col-md-4">
              <div className="me-3">
                <div className="dataTables_length d-flex">
                  <label>
                    <select className="form-select">
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="mt-3" style={{ textAlign: "end" }}>
                <ExportFile />
              </div>
            </div>
          </div>
          <TpaDetailsTable />
        </div>
      </div>
    </div>
  );
}

export default TpaManagementDetails;
