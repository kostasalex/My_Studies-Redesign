import { useState, useEffect } from 'react';
import Table from './Table'; // Adjust the path as necessary
import certificateData from './certificatesData.json';
import styles from './OldCertificates.module.css';
import stylesTable from './Table.module.css';
import { oldCertificatesTexts } from '@/locales/gr';
const OldCertificates = () => {
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
            <select className={stylesTable.btnblue} onChange={(e) => setSelectedType(parseInt(e.target.value, 10))} value={selectedType || ''}>
                <option value=''>{oldCertificatesTexts.subject}</option>
                {Object.entries(oldCertificatesTexts.types).map(([id, label]) => (
                    <option key={id} value={id}>{label}</option>
                ))}
            </select>
        );
    };


    const renderStatusFilter = () => {
        return (
            <select className={stylesTable.btnblue} onChange={(e) => setSelectedStatus(parseInt(e.target.value, 10))} value={selectedStatus || ''}>
                <option value=''>{oldCertificatesTexts.status}</option>
                {Object.entries(oldCertificatesTexts.statuses).map(([id, label]) => (
                    <option key={id} value={id}>{label}</option>
                ))}
            </select>
        );
    };
    const renderYearFilter = () => {
        const uniqueYears = Array.from(new Set(certificateData.map(c => new Date(c.issuedDate).getFullYear()))).sort();

        return (
            <select className={stylesTable.btnblue} onChange={(e) => setSelectedYear(parseInt(e.target.value))} value={selectedYear || ''}>
                <option className={stylesTable.btn} value=''>{oldCertificatesTexts.date}</option>
                {uniqueYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        );
    };
    return (
        <div className={styles.tableContainer}>
            {renderTypeFilter()}
            {renderStatusFilter()}
            {renderYearFilter()}


            {isFilterApplied && (
                <button className={stylesTable.btnblue} onClick={clearFilters}>
                    {oldCertificatesTexts.clearfilter}
                </button>
            )}

            <Table certificates={currentItems} />

            {/* Pagination */}
            <nav className={styles.pagination}>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <a onClick={() => paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default OldCertificates;