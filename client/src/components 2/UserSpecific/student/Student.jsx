import { Route, Routes, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, {useContext} from "react";
import Dashboard from "@/components/common/dashboard/Dashboard";
import Home from "./home/Home";

import styles from "./Student.module.css";
import Registration from "./registration/Registration";
import Grades from "./grades/Grades";
import Certificates from "./certificates/Certificates";
import NewRegistration from "./registration/newRegistration/NewRegistration";
import Profile from "./Profile/Profile";
import { studentDashboardButtons as TextsEn } from '@/locales/en';
import { studentDashboardButtons as TextsGr } from '@/locales/gr';
import {LanguageContext} from "../../../context/LanguageContext.jsx";
export default function Student() {
  const {language} = useContext(LanguageContext);
  const studentDashboardButtons = language === 'en' ? TextsEn : TextsGr;
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
        <h2 >My Studies</h2>
        {["dashboard", "registration", "grades", "certificates", "profile"].map(
            (path, index) => (
                <button
                    key={path}
                    className={selected === path ? styles.selectedButton : ""}
                    onClick={() => handleButtonClick(path)}
                >
                  {studentDashboardButtons[index]}
                </button>
            )
        )}
      </Dashboard>
      <div style={{ padding: "20px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="registration" element={<Registration />}>
            <Route path="new-registration" element={<NewRegistration />} />
          </Route>
          <Route path="grades" element={<Grades />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}