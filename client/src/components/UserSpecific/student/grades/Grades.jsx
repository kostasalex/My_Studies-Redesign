import { useState, useEffect, useContext } from 'react';
import Table from './Table'; // Adjust the path as necessary
import certificateData from './certificatesData.json';
import styles from './Grades.module.css';
import stylesTable from './Table.module.css';
import CustomTable from "@/components/common/table/TableDesign.jsx";
import CustomSelect from "../../../common/buttons/CustomSelect.jsx";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";  // Make sure to adjust the path
import { GradesTexts as TextsEn } from '@/locales/en';
import { GradesTexts as TextsGr } from '@/locales/gr';
const Grades = () => {
    const { language } = useContext(LanguageContext);
    const GradesTexts = language === 'en' ? TextsEn : TextsGr;
    const [certificates, setCertificates] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [selectedPass, setSelectedPass] = useState(null);
    const isFilterSelected = selectedType || selectedSemester || selectedGrade || selectedPass;
    useEffect(() => {
        setCertificates(certificateData);
    }, []);

    const clearFilters = () => {
        setSelectedType(null);
        setSelectedSemester(null);
        setSelectedGrade(null);
        setSelectedPass(null);
    };


    const renderTypeFilter = () => {
        return (
            <CustomSelect
                onChange={(e) => setSelectedType(parseInt(e.target.value, 10))}
                value={selectedType || ''}
            >
                <option value=''>{GradesTexts.subject}</option>
                {Object.entries(GradesTexts.lessons).map(([id, label]) => (
                    <option key={id} value={id}>
                        {label}
                    </option>
                ))}
            </CustomSelect>
        );
    };

    const renderSemesterFilter = () => {
        return (
            <CustomSelect
                onChange={(e) => setSelectedSemester(parseInt(e.target.value, 10))}
                value={selectedSemester || ''}
            >
                <option value=''>{GradesTexts.semester}</option>
                {Object.entries(GradesTexts.semesters).map(([id, label]) => (
                    <option key={id} value={id}>
                        {label}
                    </option>
                ))}
            </CustomSelect>
        );
    };

    const renderGradeFilter = () => {
        const uniqueGrades = Array.from(
            new Set(certificateData.map((c) => Number(c.grade)))
        ).sort();
        return (
            <CustomSelect
                onChange={(e) => setSelectedGrade(parseInt(e.target.value))}
                value={selectedGrade || ''}
            >
                <option className={stylesTable.btn} value=''>
                    {GradesTexts.grade}
                </option>
                {uniqueGrades.map((grade) => (
                    <option key={grade} value={grade}>
                        {grade}
                    </option>
                ))}
            </CustomSelect>
        );
    };


    const renderPassFilter = () => {
        return (
            <CustomSelect
                onChange={(e) => setSelectedPass(parseInt(e.target.value, 10))}
                value={selectedPass || ''}
            >
                <option value=''>{GradesTexts.pass}</option>
                {Object.entries(GradesTexts.passed).map(([id, label]) => (
                    <option key={id} value={id}>
                        {label}
                    </option>
                ))}
            </CustomSelect>
        );
    };

    const renderTables = () => {
        // Group certificates by postid
        const certificatesByPostId = {};
        certificates.forEach((certificate) => {
            const postId = certificate.postid;
            if (!certificatesByPostId[postId]) {
                certificatesByPostId[postId] = [];
            }
            certificatesByPostId[postId].push(certificate);
        });

        return Object.entries(certificatesByPostId).map(([postId, certificatesForPost]) => {
            const filteredCertificatesForPost = certificatesForPost.filter((certificate) => {
                return (
                    (selectedType ? certificate.lessonID === selectedType : true) &&
                    (selectedSemester ? certificate.semester === selectedSemester : true) &&
                    (selectedGrade ? certificate.grade === selectedGrade : true) &&
                    (selectedPass ? certificate.passed === selectedPass : true)
                );
            });

            if (filteredCertificatesForPost.length > 0) {
                return (
                    <div key={postId}>
                        <h1 className={styles.tableh1}>{postId}</h1>
                        <CustomTable>
                            <Table certificates={filteredCertificatesForPost} />
                        </CustomTable>
                    </div>
                );
            } else {

                return null;
            }
        });
    };



    return (
        <div className={styles.tableContainer}>
            {renderTypeFilter()}
            {renderSemesterFilter()}
            {renderGradeFilter()}
            {renderPassFilter()}

            {isFilterSelected && (
                <CustomButton onClick={clearFilters}>
                    {GradesTexts.clearfilter}
                </CustomButton>
            )}
            {<CustomSelect>
                <option value=''>{GradesTexts.download}</option>
                {Object.entries(GradesTexts.downloads).map(([id, label]) => (
                    <option key={id} value={id}>
                        {label}
                    </option>
                ))}
            </CustomSelect>}
            {renderTables()}
        </div>
    );
};

export default Grades;