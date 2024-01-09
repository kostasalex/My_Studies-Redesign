import React from "react";
import Table from "./Table"
import { Stepper } from 'react-form-stepper';
import NavTabs from "./NavTabs";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const selectionColumns = ["Κωδικός Μαθήματος", "Μάθημα", "Καθηγητής", "Ειδίκευση", "Υποχρεωτικό", "Ects"];
const previewColumns = ["Κωδικός Μαθήματος", "Μάθημα", "Εξάμηνο", "Καθηγητής", "Ειδίκευση", "Υποχρεωτικό", "Ects"];

const courses = [
    { id: "Κ03", subject: "Γραμμική Άλγεβρα", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "6" },
    { id: "Κ09", subject: "Διακριτά Μαθηματικά", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "ΓΠ07", subject: "Εισαγωγή στην Πληροφορική και στις Τηλεπικοινωνίες", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Γενικής Παιδείας (ΓΠ)", ects: "2" },
    { id: "Κ04", subject: "Εισαγωγή στον Προγραμματισμό", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ01", subject: "Ανάλυση Ι", semester: "2ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ14", subject: "Αρχιτεκτονική Υπολογιστών Ι", semester: "2ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ08", subject: "Δομές Δεδομένων και Τεχνικές Προγραμματισμού", semester: "2ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ20β", subject: "Εφαρμοσμένα Μαθηματικά", semester: "2ο", professor: "TBA", specialization: "-", mandatory: "Προαιρετικό (ΠΜ)", ects: "6" },
    { id: "Κ12", subject: "Ηλεκτρομαγνητισμός – Οπτική και Σύγχρονη Φυσική", semester: "2ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ06", subject: "Ανάλυση ΙΙ", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ10", subject: "Αντικειμενοστραφής Προγραμματισμός", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ11ε", subject: "Εργαστήριο Κυκλωμάτων και Συστημάτων", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Αυτοτελές Προαιρετικό Εργαστήριο (ΕΡ)", ects: "2" },
    { id: "Κ13", subject: "Πιθανότητες και Στατιστική", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "6" },
    { id: "Κ11", subject: "Σήματα και Συστήματα", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "6" },
    { id: "Κ17", subject: "Αλγόριθμοι και Πολυπλοκότητα", semester: "4ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ16", subject: "Δίκτυα Επικοινωνιών I", semester: "4ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ16ε", subject: "Εργαστήριο Δικτύων Επικοινωνιών Ι", semester: "4ο", professor: "TBA", specialization: "-", mandatory: "Αυτοτελές Προαιρετικό Εργαστήριο (ΕΡ)", ects: "2" },
    { id: "Κ21", subject: "Συστήματα Επικοινωνιών", semester: "4ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ29", subject: "Σχεδίαση και Χρήση Βάσεων Δεδομένων", semester: "4ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "15101182", subject: "ΒΙΟΛΟΓΙΑ ΚΥΤΤΑΡΟΥ", semester: "ελεύθερα", professor: "Μαριάννα Αντωνέλου", specialization: "-", mandatory: "Προαιρετικό", ects: "9.5" }
];

const tabs = ["Εξάμηνο 1", "Εξάμηνο 2", "Εξάμηνο 3", "Εξάμηνο 4", "Ελεύθερα Μαθήματα"];

const NewRegistration = () => {
    const [selectedCourses, setSelectedCourses] = React.useState([]);
    const [activeSemester, setActiveSemester] = React.useState("Εξάμηνο 1");
    const [activeStep, setActiveStep] = React.useState(0);

    const navigate = useNavigate();

    const handleDelete = (courseId) => {
        setSelectedCourses(selectedCourses.filter(id => id !== courseId));
        console.log(selectedCourses.length);
        if (selectedCourses.length === 1) handleBack(); // Todo: fix this, after deleting all courses it always have 1 "k14"
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 1) {
            Swal.fire({
                title: 'Η δήλωση καταχωρήθηκε επιτυχώς!',
                icon: 'success',
                confirmButtonText: 'ΟΚ'
            }).then(() => {
                navigate('/student');
            });
        }

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCheckboxChange = (isChecked, courseId) => {
        setSelectedCourses(prevCourses => {
            if (isChecked) {
                return [...prevCourses, courseId];
            } else {
                return prevCourses.filter(id => id !== courseId);
            }
        });
    };

    const handleTabChange = (semester) => {
        setActiveSemester(semester);
    };

    const extractSemesterNumber = (semesterString) => {
        const match = semesterString.match(/\d+/); // Extracts number from the string
        return match ? match[0] + 'ο' : 'ελεύθερα';
    };

    const filteredRows = courses.filter(row => {
        const semesterNumber = extractSemesterNumber(activeSemester);
        return row.semester === semesterNumber;
    }).map(({ id, subject, professor, specialization, mandatory, ects }) => ({
        id, subject, professor, specialization, mandatory, ects
    }));

    const selectedCoursesRows = courses.filter(course => selectedCourses.includes(course.id));

    return (

        <div className="d-flex flex-column justify-content-center align-items-center">
            <Stepper
                steps={[{ label: 'Επιλογή μαθημάτων' }, { label: 'Προεπισκόπηση Δήλωσης' }, { label: 'Οριστική Υποβολή' }]}
                activeStep={activeStep}
            />
            {activeStep === 0 && (
                <>
                    <div className="mb-3  mt-5">
                        <NavTabs tabs={tabs} onTabChange={handleTabChange} activeTab={activeSemester} />
                    </div>
                    <Table
                        columns={selectionColumns}
                        rows={filteredRows}
                        onCheckboxChange={handleCheckboxChange}
                        selectedRows={selectedCourses}
                    />
                </>
            )}
            {activeStep === 1 && (
                <Table
                    columns={previewColumns}
                    rows={selectedCoursesRows}
                    onCheckboxChange={handleCheckboxChange}
                    onDelete={handleDelete}
                // No checkbox change function needed here
                />
            )}
            <div className="d-flex justify-content-center align-items-center">
                <h5 className="p-5">Επιλεγμένα μαθήματα: {selectedCourses.length}</h5>
                <div className="d-flex p-5 ml-5">
                    {activeStep > 0 && <button className="btn btn-secondary m-3" onClick={handleBack}>Πίσω</button>}
                    {activeStep < 1 ?
                        <button className="btn btn-primary m-3" onClick={handleNext}>Επόμενο</button>
                        :
                        <button className="btn btn-success m-3" onClick={handleNext}>Οριστική Υποβολή</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default NewRegistration