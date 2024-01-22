import React, { useState, useContext } from 'react';
import styles from "./OldRegistrationsSection.module.css";
import CustomPagination from "../../../common/buttons/CustomPagination.jsx";
import CustomSelect from "../../../common/buttons/CustomSelect";
import CustomButton from "../../../common/buttons/CustomButton";
import { oldRegistrationsTexts as TextsEn } from '@/locales/en';
import { oldRegistrationsTexts as TextsGr } from '@/locales/gr';
import { LanguageContext } from "../../../../context/LanguageContext.jsx";

// Λίστα παλαιότερων δηλώσεων ανά εξάμηνο
const oldRegistrationsData = [
  {
    semester: "Εαρινό 2022",
    sem: "Εαρινό",
    year: "2022",
    courses: [
      {
        code: "Κ15",
        title: "Γραμμική Άλγεβρα",
        semester: "1ο",
        professor: "Ράπτης",
        mandatory: "Ναι",
        specialization: "S1",
      },
      {
        code: "Κ18",
        title: "Ανάλυση Πολυπλοκότητας",
        semester: "3ο",
        professor: "Παπαδόπουλος",
        mandatory: "Όχι",
        specialization: "S2",
      },
      {
        code: "K23",
        title: "Τεχνητή Νοημοσύνη",
        semester: "6ο",
        professor: "Κωστόπουλος",
        mandatory: "Ναι",
        specialization: "S3",
      },
      {
        code: "K30",
        title: "Προηγμένες Βάσεις Δεδομένων",
        semester: "5ο",
        professor: "Βλαχάβας",
        mandatory: "Όχι",
        specialization: "S2",
      },
      {
        code: "K35",
        title: "Σύγχρονα Θέματα Πληροφορικής",
        semester: "8ο",
        professor: "Παναγιωτόπουλος",
        mandatory: "Ναι",
        specialization: "S4",
      },
    ],
  },
  {
    semester: "Χειμερινό 2022",
    sem: "Χειμερινό",
    year: "2022",
    courses: [
      {
        code: "Κ15",
        title: "Γραμμική Άλγεβρα",
        semester: "1ο",
        professor: "Ράπτης",
        mandatory: "Ναι",
        specialization: "S1",
      },
      {
        code: "Κ18",
        title: "Ανάλυση Πολυπλοκότητας",
        semester: "3ο",
        professor: "Παπαδόπουλος",
        mandatory: "Όχι",
        specialization: "S2",
      },

      {
        code: "K35",
        title: "Σύγχρονα Θέματα Πληροφορικής",
        semester: "8ο",
        professor: "Παναγιωτόπουλος",
        mandatory: "Ναι",
        specialization: "S4",
      },
    ],
  },
  {
    semester: "Σεμπέμβριος 2021",
    sem: "Σεμπέμβριος",
    year: "2021",
    courses: [

      {
        code: "K23",
        title: "Τεχνητή Νοημοσύνη",
        semester: "6ο",
        professor: "Κωστόπουλος",
        mandatory: "Ναι",
        specialization: "S3",
      },
      {
        code: "K27",
        title: "Προγραμματισμός Διαδικτύου",
        semester: "4ο",
        professor: "Σταμάτης",
        mandatory: "Ναι",
        specialization: "S1",
      },
      {
        code: "K30",
        title: "Προηγμένες Βάσεις Δεδομένων",
        semester: "5ο",
        professor: "Βλαχάβας",
        mandatory: "Όχι",
        specialization: "S2",
      },
      {
        code: "K35",
        title: "Σύγχρονα Θέματα Πληροφορικής",
        semester: "8ο",
        professor: "Παναγιωτόπουλος",
        mandatory: "Ναι",
        specialization: "S4",
      },
    ],
  },
];


const OldRegistrations = () => {
  const {language} = useContext(LanguageContext);
  const oldRegistrationsTexts = language === 'en' ? TextsEn : TextsGr;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);  // Max 2 semesters per page

  // Add state for filters
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const isAnyFilterApplied = selectedType !== null || selectedSem !== null || selectedYear || selectedProfessor !== null;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Clear Filters Function
  const clearFilters = () => {
    setSelectedType(null);
    setSelectedSem(null);
    setSelectedYear(null);
    setSelectedProfessor(null);
    setCurrentPage(1); // Reset to the first page
  };


  // Filter rendering functions
  const renderTypeFilter = () => {
    const uniqueTypes = Array.from(new Set(oldRegistrationsData.map(semester => semester.courses.map(course => course.title)).flat())).sort();
    return (
        <CustomSelect onChange={(e) => setSelectedType(e.target.value)} value={selectedType || ''}>
          <option value=''>{oldRegistrationsTexts.course}</option>
          {uniqueTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
          ))}
        </CustomSelect>
    );
  };


  const renderSemesterFilter = () => {
    const uniqueSems = Array.from(new Set(oldRegistrationsData.map(semester => semester.sem))).sort();
    return (
        <CustomSelect onChange={(e) => setSelectedSem(e.target.value)} value={selectedSem || ''}>
          <option value=''>{oldRegistrationsTexts.semes}</option>
          {uniqueSems.map((sem, index) => (
              <option key={index} value={sem}>
                {sem}
              </option>
          ))}
        </CustomSelect>
    );
  };


  const renderProfessorFilter = () => {
    // Get a list of unique professors from the data
    const uniqueProfessors = Array.from(new Set(oldRegistrationsData.map(semester => semester.courses.map(course => course.professor)).flat())).sort();

    return (
        <CustomSelect onChange={(e) => setSelectedProfessor(e.target.value)} value={selectedProfessor || ''}>
          <option value=''>{oldRegistrationsTexts.selectProfessor}</option>
          {uniqueProfessors.map((professor, index) => (
              <option key={index} value={professor}>
                {professor}
              </option>
          ))}
        </CustomSelect>
    );
  };

  // Apply filters to the data
  const filteredSemesters = oldRegistrationsData.filter(semester =>
      (!selectedSem || semester.sem === selectedSem) &&
      (!selectedYear || semester.year === selectedYear) &&
      semester.courses.some(course =>
          (!selectedType || course.title === selectedType) &&
          (!selectedProfessor || course.professor === selectedProfessor) // New filter condition
      )
  );


  // Calculate the total number of pages after filtering
  const totalItems = filteredSemesters.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderYearFilter = () => {
    const uniqueYears = Array.from(new Set(oldRegistrationsData.map(semester => semester.year))).sort();
    return (
        <CustomSelect onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear || ''}>
          <option value=''>{oldRegistrationsTexts.year}</option>
          {uniqueYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
          ))}
        </CustomSelect>
    );
  };


  // Apply pagination after filtering
  const indexOfLastSemester = currentPage * itemsPerPage;
  const indexOfFirstSemester = indexOfLastSemester - itemsPerPage;
  const currentFilteredSemesters = filteredSemesters.slice(indexOfFirstSemester, indexOfLastSemester);

  return (
      <div>
        <h3>Ιστορικό Παλαιότερων Δηλώσεων</h3>
        {renderTypeFilter()}
        {renderSemesterFilter()}
        {renderYearFilter()}
        {renderProfessorFilter()}
        {isAnyFilterApplied && (
            <CustomButton onClick={clearFilters}>Clear Filters</CustomButton>
        )}


        {
          currentFilteredSemesters.map((semester, index) => (
              <div key={index} className={styles.table}>
                {/* Use translations for semester and year */}
                <h4>{`${oldRegistrationsTexts.semesters[semester.sem]} ${semester.year}`}</h4>
                <div>
                  <table className="table table-striped size">
                    <thead>
                    <tr>
                      <th scope="col">{oldRegistrationsTexts.code}</th>
                      <th scope="col">{oldRegistrationsTexts.course}</th>
                      <th scope="col">{oldRegistrationsTexts.semester}</th>
                      <th scope="col">{oldRegistrationsTexts.professor}</th>
                      <th scope="col">{oldRegistrationsTexts.mandatory}</th>
                      <th scope="col">{oldRegistrationsTexts.specialization}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {semester.courses.map((course, idx) => (
                        <tr key={idx}>
                          <td scope="row">{course.code}</td>
                          <td style={selectedType === course.title ? { fontWeight: '800'} : {}}>
                            {course.title}
                          </td>
                          <td>{course.semester}</td>
                          <td style={selectedProfessor === course.professor ? { fontWeight: '800'} : {}}>
                            {course.professor}
                          </td>
                          <td>{course.mandatory}</td>
                          <td>{course.specialization}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
          ))
        }


        {/* Pagination */}
        <div className="d-flex justify-content-center mt-3">
          <CustomPagination>
            {pageNumbers.map(number => (
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                  <a onClick={() => paginate(number)} className='page-link'>
                    {number}
                  </a>
                </li>
            ))}
          </CustomPagination>
        </div>
      </div>
  );
};

export default OldRegistrations;