import { useState, useContext, useEffect } from 'react';
import { LanguageContext } from "../../../../../context/LanguageContext.jsx";
import { newRegistrationTexts as TextsEn } from '@/locales/en';
import { newRegistrationTexts as TextsGr } from '@/locales/gr';
import Table from "./Table"
import { Stepper } from 'react-form-stepper';
import NavTabs from "./NavTabs";
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';

const selectionColumns = ["Κωδικός Μαθήματος", "Μάθημα", "Καθηγητής", "Ειδίκευση", "Υποχρεωτικό", "Ects"];
const previewColumns = ["Κωδικός Μαθήματος", "Μάθημα", "Εξάμηνο", "Καθηγητής", "Ειδίκευση", "Υποχρεωτικό", "Ects"];

const courses = [
    { id: "Κ03", subject: "Γραμμική Άλγεβρα", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "6" },
    { id: "Κ09", subject: "Διακριτά Μαθηματικά", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "ΓΠ07", subject: "Εισαγωγή στην Πληροφορική και στις Τηλεπικοινωνίες", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Γενικής Παιδείας (ΓΠ)", ects: "2" },
    { id: "Κ04", subject: "Εισαγωγή στον Προγραμματισμό", semester: "1ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ01", subject: "Ανάλυση Ι", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ14", subject: "Αρχιτεκτονική Υπολογιστών Ι", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ08", subject: "Δομές Δεδομένων και Τεχνικές Προγραμματισμού", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ20β", subject: "Εφαρμοσμένα Μαθηματικά", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Προαιρετικό (ΠΜ)", ects: "6" },
    { id: "Κ12", subject: "Ηλεκτρομαγνητισμός – Οπτική και Σύγχρονη Φυσική", semester: "3ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ06", subject: "Ανάλυση ΙΙ", semester: "5ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ10", subject: "Αντικειμενοστραφής Προγραμματισμός", semester: "5ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ11ε", subject: "Εργαστήριο Κυκλωμάτων και Συστημάτων", semester: "5ο", professor: "TBA", specialization: "-", mandatory: "Αυτοτελές Προαιρετικό Εργαστήριο (ΕΡ)", ects: "2" },
    { id: "Κ13", subject: "Πιθανότητες και Στατιστική", semester: "5ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "6" },
    { id: "Κ11", subject: "Σήματα και Συστήματα", semester: "5ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "6" },
    { id: "Κ17", subject: "Αλγόριθμοι και Πολυπλοκότητα", semester: "7ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ16", subject: "Δίκτυα Επικοινωνιών I", semester: "7ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "8" },
    { id: "Κ16ε", subject: "Εργαστήριο Δικτύων Επικοινωνιών Ι", semester: "7ο", professor: "TBA", specialization: "-", mandatory: "Αυτοτελές Προαιρετικό Εργαστήριο (ΕΡ)", ects: "2" },
    { id: "Κ21", subject: "Συστήματα Επικοινωνιών", semester: "7ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "Κ29", subject: "Σχεδίαση και Χρήση Βάσεων Δεδομένων", semester: "7ο", professor: "TBA", specialization: "-", mandatory: "Υποχρεωτικό (ΥΜ)", ects: "7" },
    { id: "15101182", subject: "ΒΙΟΛΟΓΙΑ ΚΥΤΤΑΡΟΥ", semester: "ελεύθερα", professor: "Μαριάννα Αντωνέλου", specialization: "-", mandatory: "Προαιρετικό", ects: "9.5" }
];

const tabs = ["Εξάμηνο 1", "Εξάμηνο 3", "Εξάμηνο 5", "Εξάμηνο 7", "Ελεύθερα Μαθήματα"];

const NewRegistration = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const stepFromQuery = queryParams.get('step');
    const [activeStep, setActiveStep] = useState(stepFromQuery ? parseInt(stepFromQuery) : 0);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [activeSemester, setActiveSemester] = useState("Εξάμηνο 1");
    const { language } = useContext(LanguageContext);
    const newRegistrationTexts = language === 'en' ? TextsEn : TextsGr;

    useEffect(() => {
        if (stepFromQuery === '1') {
            const savedCourses = JSON.parse(localStorage.getItem('selectedCourses'));
            if (savedCourses) {
                setSelectedCourses(savedCourses);
            }
        }
    }, [stepFromQuery]);

    const navigate = useNavigate();

    const handleDelete = (courseId) => {
        const newCourses = selectedCourses.filter(id => id !== courseId);
        console.log(selectedCourses);
        setSelectedCourses(newCourses);
        console.log(selectedCourses);
        localStorage.setItem('selectedCourses', JSON.stringify(newCourses));
        if (selectedCourses.length === 1) handleBack();
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 1) {
            Swal.fire({
                title: 'Η δήλωση καταχωρήθηκε επιτυχώς!',
                icon: 'success',
                confirmButtonText: 'ΟΚ'
            }).then(() => {
                navigate('/');
            });
        }
    };

    const handleFinalSubmit = () => {
        localStorage.setItem('finalSubmission', JSON.stringify(true));
        localStorage.removeItem('selectedCourses');
        Swal.fire({
            title: 'Η δήλωση καταχωρήθηκε επιτυχώς!',
            icon: 'success',
            confirmButtonText: 'ΟΚ'
        }).then(() => {
            navigate('/');
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCheckboxChange = (isChecked, courseId) => {
        if (isChecked && selectedCourses.length >= 10) {
            // Αν ο χρήστης προσπαθεί να προσθέσει περισσότερα από 10 μαθήματα, εμφανίστε το pop-up μήνυμα
            Swal.fire({
                title: 'Περιορισμός Μαθημάτων',
                text: 'Μπορείτε να επιλέξετε μέχρι 10 μαθήματα.',
                icon: 'warning',
                confirmButtonText: 'ΟΚ'
            });
        } else {
            // Ενημέρωση των επιλεγμένων μαθημάτων με βάση το checkbox
            setSelectedCourses(prevCourses => {
                if (isChecked) {
                    return [...prevCourses, courseId];
                } else {
                    return prevCourses.filter(id => id !== courseId);
                }
            });
        }
    };

    const handleTemporarySave = () => {
        localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
        Swal.fire({
            title: 'Αποθήκευση Επιτυχής!',
            text: 'Τα επιλεγμένα μαθήματα αποθηκεύτηκαν προσωρινά.',
            icon: 'success',
            confirmButtonText: 'ΟΚ'
        });
        navigate("/")
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
                    {activeStep > 0 && (
                        <>
                            <button className=" btn btn-secondary m-3" onClick={handleBack}>Πίσω</button>
                            <button className="btn btn-warning m-3" onClick={handleTemporarySave}>Προσωρινή Αποθήκευση</button>
                        </>

                    )}
                    {activeStep < 1 ?
                        <button disabled={!selectedCourses.length} className="btn btn-primary m-3" onClick={handleNext}>Επόμενο</button>
                        :
                        <button className="btn btn-success m-3" onClick={handleFinalSubmit}>Οριστική Υποβολή</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default NewRegistration