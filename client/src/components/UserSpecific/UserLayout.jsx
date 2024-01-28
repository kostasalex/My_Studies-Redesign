import Dashboard from "@/components/common/dashboard/Dashboard";
import Breadcrumb from '@/components/common/Breadcrumbs';
import styles from "./UserLayout.module.css";
import { ExamPeriodTexts as ExamPeriodTextsEn } from '@/locales/en';
import { ExamPeriodTexts as ExamPeriodTextsGr } from '@/locales/gr';
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from 'react'

const UserLayout = ({ children, selected, handleButtonClick, dashboardButtons, icons }) => {
    const { language } = useContext(LanguageContext);
    const ExamPeriodTexts = language === 'en' ? ExamPeriodTextsEn : ExamPeriodTextsGr;

    return (
        <div className={styles.userLayout}>
            <Dashboard>
                {Object.keys(icons).map((path, index) => (
                    <button
                        key={path}
                        className={selected === path ? styles.selectedButton : ""}
                        onClick={() => handleButtonClick(path)}
                        title={dashboardButtons[index]}
                    >
                        {icons[path]} <span>{dashboardButtons[index]}</span>
                    </button>
                ))}
            </Dashboard>
            <div className={`container ${styles.content}`}>
                <Breadcrumb />
                <div className="d-flex flex-column">
                    <div
                        className="periodos"
                        style={{ textAlign: "right", fontSize: 20 }}
                    >
                        {ExamPeriodTexts.examPeriod} <br />
                        {ExamPeriodTexts.gradingPeriod}
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default UserLayout;
