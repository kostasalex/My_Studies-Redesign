import React, { useEffect, useContext } from 'react';
import { FaHome, FaRegListAlt, FaGraduationCap, FaCertificate, FaUser } from 'react-icons/fa';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

import Home from "./home/Home";
import UserLayout from '../UserLayout.jsx';

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
    <UserLayout
      selected={selected}
      handleButtonClick={handleButtonClick}
      dashboardButtons={studentDashboardButtons}
      icons={icons}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="registration/new-registration" element={<NewRegistration />} />
        <Route path="grades" element={<Grades />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </UserLayout>
  );
}
