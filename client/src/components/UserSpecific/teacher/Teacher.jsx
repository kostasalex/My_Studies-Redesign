import { Route, Routes, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React from "react";
import Dashboard from "@/components/common/dashboard/Dashboard";
import { TeacherDashboardButtons } from "@/locales/gr";
import Home from "./home/Home";
import Path from "./path/path.module.css";

import styles from "./Teacher.module.css";
import Profile from "./Profile/Profile";
import CurrentSemester from "./currentSemester/CurrentSemester";
import OldSemesters from "./oldSemesters/OldSemesters";
import Statistics from "./statistics/Statistics";

export default function Teacher() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("dashboard"); // default selected state

  const handleButtonClick = (path) => {
    setSelected(path);
    navigate(path);
  };

  //! Fix when redirect to /dashboard , previous selected state (registration) doesnt change to dashboard
  //! Fix when click Registration from new registration doesnt redirected back to the Registration
  return (
    <div style={{ display: "flex" }}>
      <Dashboard>
        {[
          "dashboard",
          "current-semester",
          "old-semesters",
          "statistics",
          "profile",
        ].map((path, index) => (
          <button
            key={path}
            className={selected === path ? styles.selectedButton : ""}
            onClick={() => handleButtonClick(path)}
          >
            {TeacherDashboardButtons[index]}
          </button>
        ))}
      </Dashboard>
      <div style={{ padding: "20px", flex: 1 }}>
        <div className="d-flex flex-column">
          <div
            className="periodos"
            style={{ textAlign: "right", fontSize: 20 }}
          >
            Εξεταστική Περίοδος: Χειμερινό 2023 <br />
            Περίοδος Δηλώσεων : 1/2/2023 εως 28/2/2023
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="current-semester" element={<CurrentSemester />} />
          <Route path="old-semesters" element={<OldSemesters />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
