import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { FaHome, FaBook, FaHistory, FaChartBar, FaUser } from 'react-icons/fa';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Dashboard from "@/components/common/dashboard/Dashboard";
import { LanguageContext } from "@/context/LanguageContext";
import Home from "./home/Home";
import { TeacherDashboardButtons as TeacherDashboardButtonsEn } from '@/locales/en';
import { TeacherDashboardButtons as TeacherDashboardButtonsGr } from '@/locales/gr';
import { ExamPeriodTexts as ExamPeriodTextsEn } from '@/locales/en';
import { ExamPeriodTexts as ExamPeriodTextsGr } from '@/locales/gr';
import { invalidPathMsg as invalidPathMsgEn } from '@/locales/en';
import { invalidPathMsg as invalidPathMsgGr } from '@/locales/gr';
import styles from "./Teacher.module.css";
import Profile from "./Profile/Profile";
import CurrentSemester from "./currentSemester/CurrentSemester";
import OldSemesters from "./oldSemesters/OldSemesters";
import Statistics from "./statistics/Statistics";
import Breadcrumb from '@/components/common/Breadcrumbs';

const icons = {
  "/": <FaHome />,
  "current-semester": <FaBook />,
  "old-semesters": <FaHistory />,
  "statistics": <FaChartBar />,
  "profile": <FaUser />
};

const validPaths = [
  "/", "current-semester", "old-semesters", "statistics", "profile"
];


export default function Teacher() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname.slice(1) || '/');
  const { language } = useContext(LanguageContext);


  const TeacherDashboardButtons = language === 'en'
    ? TeacherDashboardButtonsEn
    : TeacherDashboardButtonsGr;
  const pathErrorMsg = language === 'gr' ? invalidPathMsgGr : invalidPathMsgEn;


  useEffect(() => {
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

  const ExamPeriodTexts = language === 'en' ? ExamPeriodTextsEn : ExamPeriodTextsGr;

  const handleButtonClick = (path) => {
    setSelected(path);
    navigate(path);
  };

  return (
    <div className={styles.teacher}>

      <Dashboard>
        {[
          "/",
          "current-semester",
          "old-semesters",
          "statistics",
          "profile",
        ].map((path, index) => (
          <button
            key={path}
            className={selected === path ? styles.selectedButton : ""}
            onClick={() => handleButtonClick(path)}
            title={TeacherDashboardButtons[index]}
          >
            {icons[path]} <span>{TeacherDashboardButtons[index]}</span>
          </button>
        ))}
      </Dashboard>
      <div className={`container ${styles["teacher-content"]}`} style={{ padding: "20px", flex: 1 }}>
        <Breadcrumb />
        <div className="d-flex flex-column">
          <div
            className="periodos"
            style={{ textAlign: "right", fontSize: 20, marginTop: -60, marginBottom: -40 }}
          >
            {ExamPeriodTexts.examPeriod} <br />
            {ExamPeriodTexts.gradingPeriod}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="current-semester" element={<CurrentSemester />} />
          <Route path="old-semesters" element={<OldSemesters />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
