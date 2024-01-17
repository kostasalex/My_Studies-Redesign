import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Dashboard from "@/components/common/dashboard/Dashboard";
import { TeacherDashboardButtons } from "@/locales/gr";
import Home from "./home/Home";

import styles from "./Teacher.module.css";
import Profile from "./Profile/Profile";
import CurrentSemester from "./currentSemester/CurrentSemester";
import OldSemesters from "./oldSemesters/OldSemesters";
import Statistics from "./statistics/Statistics";

export default function Teacher() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState("dashboard");

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPath = pathSegments[1] || 'dashboard'; // Assuming 'teacher' is the first segment
    if (["dashboard", "current-semester", "old-semesters", "statistics", "profile"].includes(currentPath)) {
      setSelected(currentPath);
    } else {
      navigate("/dashboard");
    }
  }, [location, navigate]);

  const handleButtonClick = (path) => {
    setSelected(path);
    navigate(path);
  };


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
      <div className="container" style={{ padding: "20px", flex: 1 }}>
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
