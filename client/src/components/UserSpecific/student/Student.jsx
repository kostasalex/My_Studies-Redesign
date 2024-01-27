import React, { useEffect, useContext } from 'react';
import { FaHome, FaRegListAlt, FaGraduationCap, FaCertificate, FaUser } from 'react-icons/fa';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
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
import { invalidPathMsg as invalidPathMsgEn } from '@/locales/en';
import { invalidPathMsg as invalidPathMsgGr } from '@/locales/gr';

import { LanguageContext } from "../../../context/LanguageContext.jsx";
import Breadcrumb from '@/components/common/Breadcrumbs';

const icons = {
  "/": <FaHome />,
  "registration": <FaRegListAlt />,
  "grades": <FaGraduationCap />,
  "certificates": <FaCertificate />,
  "profile": <FaUser />
};

const validPaths = [
  "/", "registration", "grades", "certificates", "profile", "registration/new-registration",
];
export default function Student() {
  const { language } = useContext(LanguageContext);
  const studentDashboardButtons = language === 'en' ? TextsEn : TextsGr;
  const pathErrorMsg = language === 'gr' ? invalidPathMsgGr : invalidPathMsgEn;

  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = React.useState(location.pathname);

  useEffect(() => {
    console.log(language)
    const currentPath = location.pathname.slice(1) || '/';
    if (!validPaths.includes(currentPath)) {
      navigate("/");
      Swal.fire({
        title: 'Oops...',
        text: pathErrorMsg,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    } else {
      setSelected(currentPath);
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
        {["/", "registration", "grades", "certificates", "profile"].map((path, index) => (
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
          <Route path="/" element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="registration/new-registration" element={<NewRegistration />} />
          <Route path="grades" element={<Grades />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
