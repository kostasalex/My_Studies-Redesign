import React, { useState } from "react";
import StudentGradesChart from "./StudentGradesChart";
import Comments from "./Comments";
import MesosOrosComponent from "./MesosOrosComponent";
import "./Four_Panel.css";
import DonutChart from "./DonutChart";
import "./Statistics.css";

const CustomDropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <button className="custom-button" onClick={handleButtonClick}>
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {selectedOption && (
        <div className="selected-option">
          Επιλεγμένη Επιλογή: {selectedOption}
        </div>
      )}
    </div>
  );
};

const Statistics = () => {
  const gradesData = [80, 92, 75, 88];

  const subjectsOptions = [
    "Μάθημα ↓",
    "Γραμμική",
    "Άλγεβρα Ι",
    "Μεταγλωτιστές",
    "Προγραμματισμος Ι",
    "Θεωρία Αριθμών",
  ];
  const periodsOptions = ["Περίοδος ↓", "Χειμώνας", "Εαρινό", "Σεμπτέμβριος"];
  const semestersOptions = [
    "Εξάμηνο ↓",
    "1ο",
    "2ο",
    "3ο",
    "4ο",
    "5ο",
    "6ο",
    "7ο",
    "8ο",
  ];
  const yearsOptions = ["Έτος ↓", "2024", "2023", "2022", "2021", "2020"];

  const [selectedFilters, setSelectedFilters] = useState({
    subject: null,
    period: null,
    semester: null,
    year: null,
  });

  const handleFilterSelection = (option, filterType) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: option === `Έτος ↓` ? null : option,
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      subject: null,
      period: null,
      semester: null,
      year: null,
    });
  };

  return (
    <div>
      <h6>Φίλτρα Αναζήτησης</h6>
      <div className="custom-dropdown-container">
        <CustomDropdown
          label={subjectsOptions[0]}
          options={subjectsOptions.slice(1)}
          onSelect={(option) => handleFilterSelection(option, "subject")}
        />
        <CustomDropdown
          label={periodsOptions[0]}
          options={periodsOptions.slice(1)}
          onSelect={(option) => handleFilterSelection(option, "period")}
        />
        <CustomDropdown
          label={semestersOptions[0]}
          options={semestersOptions.slice(1)}
          onSelect={(option) => handleFilterSelection(option, "semester")}
        />
        <CustomDropdown
          label={yearsOptions[0]}
          options={yearsOptions.slice(1)}
          onSelect={(option) => handleFilterSelection(option, "year")}
        />
      </div>
      <div className="four-panels-container">
        <div className="panel">
          <DonutChart> </DonutChart>
        </div>
        <div className="panel">
          <StudentGradesChart gradesData={gradesData} />
        </div>
        <div className="panel">
          {" "}
          <MesosOrosComponent />{" "}
        </div>

        <div className="panel">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
