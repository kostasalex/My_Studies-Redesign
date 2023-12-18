import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React from 'react';
import Dashboard from '@/components/common/dashboard/Dashboard';
import { studentDashboardButtons } from '@/locales/gr';
import Home from "./home/Home"

import styles from './Student.module.css';


export default function Student() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState('dashboard'); // default selected state

  const handleButtonClick = (path) => {
    setSelected(path);
    navigate(path);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Dashboard>
      {['dashboard', 'declarations', 'grades', 'certificates'].map((path, index) => (
          <button
            key={path}
            className={selected === path ? styles.selectedButton : ''}
            onClick={() => handleButtonClick(path)}
          >
            {studentDashboardButtons[index]}
          </button>
        ))}
      </Dashboard>
      <div style={{ padding: '20px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="declarations" element={<div>Δηλώσεις</div>} />
          <Route path="grades" element={<div>Βαθμολογίες</div>} />
          <Route path="certificates" element={<div>Πιστοποιητικά</div>} />
          <Route path="profile" element={<div>Προφίλ</div>} />
        </Routes>
      </div>
    </div>
  );
}
