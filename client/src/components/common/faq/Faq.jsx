
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript

import {useContext, useEffect, useState} from 'react';
import styles from './Faq.module.css';
import { faqTexts as faqTextsTextsEn } from '@/locales/en';
import { faqTexts as faqTextsTextsGr } from '@/locales/gr';
import { faqPage as faqPageTextsEn } from '@/locales/en';
import { faqPage as faqPageTextsGr } from '@/locales/gr';
import {LanguageContext} from "../../../context/LanguageContext.jsx";
const Faq = () => {
    const {language} = useContext(LanguageContext);
    const faqTexts = language === 'en' ? faqTextsTextsEn : faqTextsTextsGr;
    const faqPage = language === 'en' ? faqPageTextsEn : faqPageTextsGr;
    const [openItemId, setOpenItemId] = useState(faqTexts.items[0]?.id);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredItems = searchTerm
        ? faqTexts.items.filter(item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : faqTexts.items;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.accordionContainer}>
            <h2 className={styles.header}>{faqPage.pageTitle}</h2>
            <div className={styles.searchBarContainer}>
                <input
                    type="text"
                    placeholder={faqPage.searchPlaceholder}
                    className={styles.searchBar}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className={styles.accordionWrapper}>
                {currentItems.map((item) => (
                    <div key={item.id} className={styles.accordionItem}>
                        <button
                            className={styles.accordionButton}
                            onClick={() => setOpenItemId(openItemId === item.id ? null : item.id)}
                        >
                            {item.question}
                        </button>
                        <div
                            className={`${styles.accordionContent} ${
                                openItemId === item.id ? styles.active : ''
                            }`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            {filteredItems.length > itemsPerPage && (
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
            )}
        </div>
    );
};

export default Faq;