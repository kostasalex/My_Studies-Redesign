import { useState } from "react";
import StudentGradesChart from "./StudentGradesChart";
import Comments from "./Comments";
import "./Four_Panel.css";
import DonutChart from "./DonutChart";
import { Dropdown } from 'react-bootstrap';
import "./Statistics.css";

const courseData = {
  "Γραμμική Άλγεβρα": {
    "2024": {
      gradeData: { 5: 15, 6: 25, 7: 20, 8: 20, 9: 15, 10: 5 },
      chartData: { passed: 35, failed: 10, notGiven: 5 }
    },
    "2023": {
      gradeData: { 5: 10, 6: 30, 7: 25, 8: 20, 9: 10, 10: 5 },
      chartData: { passed: 30, failed: 15, notGiven: 5 }
    }
  },
  "Θεωρία Αριθμών": {
    "2024": {
      gradeData: { 5: 20, 6: 20, 7: 30, 8: 15, 9: 10, 10: 5 },
      chartData: { passed: 40, failed: 5, notGiven: 5 }
    },
    "2023": {
      gradeData: { 5: 25, 6: 15, 7: 25, 8: 20, 9: 10, 10: 5 },
      chartData: { passed: 35, failed: 10, notGiven: 5 }
    }
  }
};

const subjectsOptions = [
  "Γραμμική Άλγεβρα",
  "Θεωρία Αριθμών",
];

const courseComments = {
  "Γραμμική Άλγεβρα": {
    "2024": [
      { id: 1, user: "Αλέξανδρος", text: "Πολύ καλό μάθημα, ο ανεμιστήρας πήρε φωτιά!" },
      { id: 2, user: "Μαρία", text: "Ενδιαφέρον θέμα, αλλά αρκετά προκλητικό." },
      { id: 3, user: "Δημήτρης", text: "Ο καθηγητής είναι πολύ κατατοπιστικός." },
      { id: 5, user: "Νίκος", text: "Δύσκολο, αλλά πολύ ενδιαφέρον." },
    ],
    "2023": [
      { id: 4, user: "Μαριάννα", text: "Προκλητικό μάθημα αλλά με πολύ καλή προσέγγιση από τον καθηγητή." },
      { id: 5, user: "Δημήτρης", text: "Η εφαρμογή της θεωρίας σε πρακτικά προβλήματα ήταν εξαιρετική." },
      { id: 6, user: "Σοφία", text: "Έμαθα πολλά καινούργια πράγματα που δεν γνώριζα για τη Γραμμική Άλγεβρα." },
    ]
  },
  "Θεωρία Αριθμών": {
    "2024": [
      { id: 7, user: "Νικόλας", text: "Η Θεωρία Αριθμών ήταν πιο ενδιαφέρουσα από όσο περίμενα!" },
      { id: 8, user: "Βασιλική", text: "Πολύ βοηθητικές οι ασκήσεις και οι εξηγήσεις του καθηγητή." },
      { id: 9, user: "Χρήστος", text: "Κάποιες έννοιες ήταν δύσκολες αλλά άξιζε τον κόπο." },
    ],
    "2023": [
      { id: 10, user: "Άννα", text: "Η ανάλυση των αριθμών ήταν μια ενδιαφέρουσα πρόκληση." },
      { id: 11, user: "Κώστας", text: "Ενθουσιάστηκα με τις πρακτικές εφαρμογές της θεωρίας." },
      { id: 12, user: "Ιωάννα", text: "Ο καθηγητής έκανε το μάθημα πολύ ενδιαφέρον." },
    ]
  }
};


const yearsOptions = ["2024", "2023"];

const CustomDropdown = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <Dropdown>
      <div className="ms-2">
        <Dropdown.Toggle style={{ backgroundColor: '#bbbbbb', border: "none" }} variant="secondary" id="dropdown-basic">
          {selectedOption || label}
        </Dropdown.Toggle>
      </div>


      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item key={option} onClick={() => handleSelect(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
const Statistics = () => {

  const [selectedFilters, setSelectedFilters] = useState({
    subject: subjectsOptions[0],
    year: yearsOptions[0],
  });


  const getChartData = () => {
    const selectedSubject = selectedFilters.subject;
    const selectedYear = selectedFilters.year;
    if (courseData[selectedSubject] && courseData[selectedSubject][selectedYear]) {
      return courseData[selectedSubject][selectedYear];
    }
    return { gradeData: {}, chartData: { passed: 0, failed: 0, notGiven: 0 } };
  };

  const { gradeData, chartData } = getChartData();


  const donutChartData = {
    labels: ["Πέρασαν το Μάθημα", "Κόπηκαν στο Μάθημα", "Δεν Έδωσαν το Μάθημα"],
    datasets: [
      {
        data: [chartData.passed, chartData.failed, chartData.notGiven],
        backgroundColor: ["#36A2EB", "#e72e2e", "#ceccd2"],
        hoverBackgroundColor: ["#61b9f5", "#fa4f4f", "#D9D2E9"],
      },
    ],
  };

  const handleFilterSelection = (option, filterType) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: option === `Έτος ↓` ? null : option,
    });
  };

  const getComments = () => {
    const selectedSubject = selectedFilters.subject;
    const selectedYear = selectedFilters.year;
    return courseComments[selectedSubject]?.[selectedYear] || [];
  };

  const commentsForSelectedCourse = getComments();

  return (
    <div>
      <h6>Φίλτρα Αναζήτησης</h6>
      <div className="custom-dropdown-container">
        <CustomDropdown
          label={subjectsOptions[0]}
          options={subjectsOptions}
          onSelect={(option) => handleFilterSelection(option, "subject")}
        />

        <CustomDropdown
          label={yearsOptions[0]}
          options={yearsOptions}
          onSelect={(option) => handleFilterSelection(option, "year")}
        />
      </div>
      <h2 className="text-center m-4">Στατιστικά για {selectedFilters.subject} για το έτος {selectedFilters.year}</h2>
      <div className="four-panels-container">

        <div className="panel">
          <DonutChart data={donutChartData} />
        </div>
        <div className="panel">
          <StudentGradesChart gradeData={gradeData} />
        </div>
        <div className="panel">
          <Comments comments={commentsForSelectedCourse} />
        </div>
      </div>
    </div >
  );
};

export default Statistics;
