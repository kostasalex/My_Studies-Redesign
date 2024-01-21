import React, { useEffect, useContext } from 'react';
import { FaHome, FaRegListAlt, FaGraduationCap, FaCertificate, FaUser } from 'react-icons/fa';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
import { LanguageContext } from "../../../context/LanguageContext.jsx";
import Breadcrumb from '@/components/common/Breadcrumbs';

const icons = {
  "dashboard": <FaHome />,
  "registration": <FaRegListAlt />,
  "grades": <FaGraduationCap />,
  "certificates": <FaCertificate />,
  "profile": <FaUser />
};

export default function Student() {
  const { language } = useContext(LanguageContext);
  const studentDashboardButtons = language === 'en' ? TextsEn : TextsGr;
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = React.useState("dashboard");

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop(); // Get the last part of the URL
    if (["dashboard", "registration", "grades", "certificates", "profile"].includes(currentPath)) {
      setSelected(currentPath);
    } else {
      setSelected("dashboard");
      navigate("/student/dashboard");
    }
  }, [location, navigate]);

  const handleButtonClick = (path) => {
    setSelected(path);
    navigate(path);
  };


  return (
    <div className={styles.student}>

      <Dashboard>
        {/* <h2 >My Studies</h2> */}
        {["dashboard", "registration", "grades", "certificates", "profile"].map((path, index) => (
          <button
            key={path}
            className={selected === path ? styles.selectedButton : ""}
            onClick={() => handleButtonClick(path)}
            title={studentDashboardButtons[index]}
          >
            {icons[path]} <span>{studentDashboardButtons[index]}</span>
          </button>
        ))}
      </Dashboard>
      <div className={`container ${styles["student-content"]}`} >
        <Breadcrumb />
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
