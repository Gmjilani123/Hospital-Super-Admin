import Select from "react-select";
import React, { useState } from "react";

function IndividualTab() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "Student", label: "Student" },
    { value: "Guardians", label: "Guardians" },
    { value: "Admin", label: "Admin" },
    { value: "Teacher", label: "Teacher" },
    { value: "Accountant", label: "Accountant" },
    { value: "Librarian", label: "Librarian" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return (
    <div>
      <h4>Message To</h4>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />

      <input
        type="text"
        className="form-control mt-5"
        placeholder="Search..."
      />
    </div>
  );
}

export default IndividualTab;
