import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '@/components/common/dashboard/Dashboard';
import { studentDashboardButtons } from '@/locales/gr';
import Home from "./home/Home"

export default function Student() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Dashboard>
        <button onClick={() => handleButtonClick('dashboard')}>
          {studentDashboardButtons[0]}
        </button>
        <button onClick={() => handleButtonClick('declarations')}>
          {studentDashboardButtons[1]}
        </button>
        <button onClick={() => handleButtonClick('grades')}>
          {studentDashboardButtons[2]}
        </button>
        <button onClick={() => handleButtonClick('certificates')}>
          {studentDashboardButtons[3]}
        </button>
        {/* <button onClick={() => handleButtonClick('logout')}>
          {studentDashboardButtons[0]}
        </button> */}
      </Dashboard>
      <div style={{ padding: '20px', flex: 1 }}>
        <Routes>
          <Route path="dashboard" element={<Home />} />
          <Route path="declarations" element={<div>Δηλώσεις</div>} />
          <Route path="grades" element={<div>Βαθμολογίες</div>} />
          <Route path="certificates" element={<div>Δηλώσεις</div>} />
          <Route path="profile" element={<div>Προφίλ</div>} />
        </Routes>
      </div>
    </div>
  );
}
