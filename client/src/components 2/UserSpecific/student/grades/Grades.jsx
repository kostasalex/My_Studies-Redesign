import React, { useState, useEffect, useContext } from 'react';

import styles from './Grades.module.css';
import Table from "./table/Table.jsx";
import CustomTable from "@/components/common/table/TableDesign.jsx";
import CustomSelect from "../../../common/buttons/CustomSelect.jsx";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
import CustomPagination from "../../../common/buttons/CustomPagination.jsx";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import { oldCertificatesTexts as TextsEn } from '@/locales/en';
import { oldCertificatesTexts as TextsGr } from '@/locales/gr';
const OldCertificates = () => {
    const { language } = useContext(LanguageContext);
    const texts = language === 'en' ? TextsEn : TextsGr;
    const [certificates, setCertificates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCode, setSelectedCode] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');
    const itemsPerPage = 3;

    useEffect(() => {
        // Set certificates data (replace with your data fetching logic)
        setCertificates([
            { "code": "K15", "subject": "Γραμμική Άλγεβρα", "semester": "1ο", "grade": 4.9 },
            { "code": "K16", "subject": "Διακριτά Μαθηματικά", "semester": "1ο", "grade": 9 },
            { "code": "K21", "subject": "Μεταγλωτιστές", "semester": "5ο", "grade": 10 },
            { "code": "K22", "subject": "Αρχές Λειτουργικών Συστημάτων", "semester": "4ο", "grade": 8.5 },
            { "code": "K30", "subject": "Αλγόριθμοι και Πολυπλοκότητα", "semester": "3ο", "grade": 7.2 }
        ]);
    }, []);

    const filteredCertificates = certificates.filter(certificate => {
        return (selectedCode ? certificate.code.includes(selectedCode) : true) &&
            (selectedSubject ? certificate.subject.includes(selectedSubject) : true) &&
            (selectedSemester ? certificate.semester.includes(selectedSemester) : true) &&
            (selectedGrade ? certificate.grade.toString().includes(selectedGrade) : true);
    });

    const clearFilters = () => {
        setSelectedCode('');
        setSelectedSubject('');
        setSelectedSemester('');
        setSelectedGrade('');
        setCurrentPage(1);
    };

    const isFilterApplied = selectedCode || selectedSubject || selectedSemester || selectedGrade;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCertificates.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredCertificates.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderCodeFilter = () => (
        <CustomSelect onChange={(e) => setSelectedCode(e.target.value)} value={selectedCode}>
            <option value=''>{texts.code}</option>
            {/* Add options based on your data */}
        </CustomSelect>
    );

    const renderSubjectFilter = () => (
        <CustomSelect onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject}>
            <option value=''>{texts.subject}</option>
            {/* Add options based on your data */}
        </CustomSelect>
    );

    const renderSemesterFilter = () => (
        <CustomSelect onChange={(e) => setSelectedSemester(e.target.value)} value={selectedSemester}>
            <option value=''>{texts.semester}</option>
            {/* Add options based on your data */}
        </CustomSelect>
    );

    const renderGradeFilter = () => (
        <CustomSelect onChange={(e) => setSelectedGrade(e.target.value)} value={selectedGrade}>
            <option value=''>{texts.grade}</option>
            {/* Add options based on your data */}
        </CustomSelect>
    );

    return (
        <div className={styles.tableContainer}>
            {renderCodeFilter()}
            {renderSubjectFilter()}
            {renderSemesterFilter()}
            {renderGradeFilter()}

            {isFilterApplied && (
                <CustomButton onClick={clearFilters}>
                    {texts.clearfilter}
                </CustomButton>
            )}

            <CustomTable>
                <Table certificates={currentItems} />
            </CustomTable>

            <CustomPagination>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </CustomPagination>
        </div>
    );
};

export default OldCertificates;
