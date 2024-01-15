import Pagination from "@/components/common/Pagination";
import Table from "./table/Table";
import styles from "./Grades.module.css";
import Path from "../path/path.module.css";
import React, { useContext } from 'react';
import {LanguageContext} from "../../../../context/LanguageContext.jsx";
import { gradesTexts as gradesTextsEn } from '@/locales/en';
import { gradesTexts as gradesTextsGr } from '@/locales/gr';


const Grades = () => {
    const { language } = useContext(LanguageContext);
    const texts = language === 'en' ? gradesTextsEn : gradesTextsGr;

    return (
        <div>
            <div className={Path["pathh"]}>
                <button>{texts.homeButton}</button>
                <button>{texts.gradesButton}</button>
            </div>
            <div>
                <div className="btn-group m-5">
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {texts.periodButton}
                    </button>
                </div>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {texts.yearButton}
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <h4>{texts.semesterWinter}</h4>
                <button className="btn btn-primary">{texts.downloadButton}</button>
            </div>
            <Table />
            <div className="d-flex justify-content-between mb-3 mt-5">
                <h4>{texts.semesterSpring}</h4>
            </div>
            <Table />
            <div className="d-flex justify-content-center mt-5">
                <Pagination />
            </div>
        </div>
    );
};

export default Grades;
