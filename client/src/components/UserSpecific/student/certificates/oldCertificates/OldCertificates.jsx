import {useState, useEffect, useContext} from 'react';
import Table from './Table'; // Adjust the path as necessary
import certificateData from './certificatesData.json';
import styles from './OldCertificates.module.css';
import stylesTable from './Table.module.css';
import CustomTable from "@/components/common/table/TableDesign.jsx";
import CustomSelect from "../../../../common/buttons/CustomSelect.jsx";
import CustomButton from "../../../../common/buttons/CustomButton.jsx";

import { oldCertificatesTexts as TextsEn } from '@/locales/en';
import { oldCertificatesTexts as TextsGr } from '@/locales/gr';
import CustomPagination from "../../../../common/buttons/CustomPagination.jsx";
import {LanguageContext} from "../../../../../context/LanguageContext.jsx";
const OldCertificates = () => {
    const {language} = useContext(LanguageContext);
    const oldCertificatesTexts = language === 'en' ? TextsEn : TextsGr;
    const [certificates, setCertificates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const itemsPerPage = 3;

    useEffect(() => {
        setCertificates(certificateData);
    }, []);


    const filteredCertificates = certificates.filter(certificate => {
        return (selectedType ? certificate.typeId === selectedType : true) &&
            (selectedStatus ? certificate.statusId === selectedStatus : true) &&
            (selectedYear ? new Date(certificate.issuedDate).getFullYear() === selectedYear : true);
    });

    const clearFilters = () => {
        setSelectedType(null);
        setSelectedStatus(null);
        setSelectedYear(null);
        setCurrentPage(1);
    };

    const isFilterApplied = selectedType !== null || selectedStatus !== null || selectedYear !== null;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCertificates.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredCertificates.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderTypeFilter = () => {
        return (
            <CustomSelect onChange={(e) => setSelectedType(parseInt(e.target.value, 10))} value={selectedType || ''}>
                <option value=''>
                    {oldCertificatesTexts.subject}</option>
                {Object.entries(oldCertificatesTexts.types).map(([id, label]) => (
                    <option key={id} value={id}>{label}</option>
                ))}
            </CustomSelect>

        );
    };


    const renderStatusFilter = () => {
        return (
            <CustomSelect onChange={(e) => setSelectedStatus(parseInt(e.target.value, 10))} value={selectedStatus || ''}>
                <option value=''>
                    {oldCertificatesTexts.status}</option>
                {Object.entries(oldCertificatesTexts.statuses).map(([id, label]) => (
                    <option key={id} value={id}>{label}</option>
                ))}</CustomSelect>


        );
    };
    const renderYearFilter = () => {
        const uniqueYears = Array.from(new Set(certificateData.map(c => new Date(c.issuedDate).getFullYear()))).sort();

        return (
            <CustomSelect onChange={(e) => setSelectedYear(parseInt(e.target.value))} value={selectedYear || ''}>

                <option className={stylesTable.btn} value=''>{oldCertificatesTexts.date}</option>
                {uniqueYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </CustomSelect>

        );
    };
    return (
        <div className={styles.tableContainer}>
            {renderTypeFilter()}
            {renderStatusFilter()}
            {renderYearFilter()}


            {isFilterApplied && (
                <CustomButton onClick={clearFilters}>
                    {oldCertificatesTexts.clearfilter}
                </CustomButton>
            )}

            <CustomTable> <Table certificates={currentItems} /></CustomTable>

            
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