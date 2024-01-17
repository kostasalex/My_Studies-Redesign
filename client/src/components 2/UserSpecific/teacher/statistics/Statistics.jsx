import React from "react";
import StudentGradesChart from "./StudentGradesChart";
import Path from "../path/path.module.css";
import "./Four_Panel.css";
import DonutChart from "./DonutChart";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
const Statistics = () => {
  const gradesData = [80, 92, 75, 88]; // Παράδειγμα δεδομένων με βαθμούς
  return (
    <div>
      <div className={Path["pathh"]}>
        <button>• Αρχική /</button>
        <button>Στατιστικά /</button>
      </div>
      <h6>Φίλτρα Αναζήτησης</h6>
      <CustomButton>Μάθημα</CustomButton>
      <CustomButton>Περίοδος</CustomButton>
      <CustomButton>Εξάμηνο</CustomButton>
      <CustomButton>Έτος</CustomButton>
      <div className="four-panels-container">
        <div className="panel">
          <DonutChart> </DonutChart>
        </div>
        <div className="panel">
          {" "}
          <StudentGradesChart gradesData={gradesData} />{" "}
        </div>
        <div className="panel">
          <h5>Μέσος Όρος Προηγούμενων Χρόνων:</h5>
          <div className="previous-averages">
            <h6>Μ.Ο. Μαθητών 2022: 7.97/10</h6>
            <h6>Μ.Ο. Μαθητών 2021: 8.32/10</h6>
            <h6>Μ.Ο. Μαθητών 2020: 8.15/10</h6>
            <h6>Μ.Ο. Μαθητών 2019: 7.88/10</h6>
            <h6>Μ.Ο. Μαθητών 2019: 7.88/10</h6>
            <h6>Μ.Ο. Μαθητών 2019: 7.88/10</h6>
            <h6>Μ.Ο. Μαθητών 2019: 7.88/10</h6>
            <h6>Μ.Ο. Μαθητών 2019: 7.88/10</h6>
            <h6>Μ.Ο. Μαθητών 2019: 7.88/10</h6>
          </div>
        </div>

        <div className="panel">Panel 4</div>
      </div>
    </div>
  );
};

export default Statistics;
