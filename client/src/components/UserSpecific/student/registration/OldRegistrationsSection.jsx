import React from "react";
import styles from "./OldRegistrationsSection.module.css";

// Λίστα παλαιότερων δηλώσεων ανά εξάμηνο
const oldRegistrationsData = [
  {
    semester: "Εαρινό 2022",
    courses: [
      { code: "Κ15", title: "Γραμμική Άλγεβρα", semester: "1ο", professor: "Ράπτης", mandatory: "Ναι", specialization: "S1" },
      { code: "Κ18", title: "Ανάλυση Πολυπλοκότητας", semester: "3ο", professor: "Παπαδόπουλος", mandatory: "Όχι", specialization: "S2" },
      { code: "K23", title: "Τεχνητή Νοημοσύνη", semester: "6ο", professor: "Κωστόπουλος", mandatory: "Ναι", specialization: "S3" },
      { code: "K27", title: "Προγραμματισμός Διαδικτύου", semester: "4ο", professor: "Σταμάτης", mandatory: "Ναι", specialization: "S1" },
      { code: "K30", title: "Προηγμένες Βάσεις Δεδομένων", semester: "5ο", professor: "Βλαχάβας", mandatory: "Όχι", specialization: "S2" },
      { code: "K35", title: "Σύγχρονα Θέματα Πληροφορικής", semester: "8ο", professor: "Παναγιωτόπουλος", mandatory: "Ναι", specialization: "S4" },
    ],
  },
  {
    semester: "Χειμερινό 2022",
    courses: [
      { code: "Κ15", title: "Γραμμική Άλγεβρα", semester: "1ο", professor: "Ράπτης", mandatory: "Ναι", specialization: "S1" },
      { code: "Κ18", title: "Ανάλυση Πολυπλοκότητας", semester: "3ο", professor: "Παπαδόπουλος", mandatory: "Όχι", specialization: "S2" },
      { code: "K23", title: "Τεχνητή Νοημοσύνη", semester: "6ο", professor: "Κωστόπουλος", mandatory: "Ναι", specialization: "S3" },
      { code: "K27", title: "Προγραμματισμός Διαδικτύου", semester: "4ο", professor: "Σταμάτης", mandatory: "Ναι", specialization: "S1" },
      { code: "K30", title: "Προηγμένες Βάσεις Δεδομένων", semester: "5ο", professor: "Βλαχάβας", mandatory: "Όχι", specialization: "S2" },
      { code: "K35", title: "Σύγχρονα Θέματα Πληροφορικής", semester: "8ο", professor: "Παναγιωτόπουλος", mandatory: "Ναι", specialization: "S4" },
    ],
  },
  {
    semester: "Σεμπέμβριος 2021",
    courses: [
      { code: "Κ15", title: "Γραμμική Άλγεβρα", semester: "1ο", professor: "Ράπτης", mandatory: "Ναι", specialization: "S1" },
      { code: "Κ18", title: "Ανάλυση Πολυπλοκότητας", semester: "3ο", professor: "Παπαδόπουλος", mandatory: "Όχι", specialization: "S2" },
      { code: "K23", title: "Τεχνητή Νοημοσύνη", semester: "6ο", professor: "Κωστόπουλος", mandatory: "Ναι", specialization: "S3" },
      { code: "K27", title: "Προγραμματισμός Διαδικτύου", semester: "4ο", professor: "Σταμάτης", mandatory: "Ναι", specialization: "S1" },
      { code: "K30", title: "Προηγμένες Βάσεις Δεδομένων", semester: "5ο", professor: "Βλαχάβας", mandatory: "Όχι", specialization: "S2" },
      { code: "K35", title: "Σύγχρονα Θέματα Πληροφορικής", semester: "8ο", professor: "Παναγιωτόπουλος", mandatory: "Ναι", specialization: "S4" },
    ],
  },
  // Προσθέστε περισσότερα εξάμηνα αν χρειάζεται
];

const OldRegistrations = () => {
  return (
    <div className="mt-5">
      <h3>Ιστορικό Παλαιότερων Δηλώσεων</h3>
      {oldRegistrationsData.map((semester, index) => (
        <div key={index} className={styles["table"]}>
          <h4>{semester.semester}</h4>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Κωδικός</th>
                  <th scope="col">Μάθημα</th>
                  <th scope="col">Εξάμηνο</th>
                  <th scope="col">Καθηγητής</th>
                  <th scope="col">Υποχρεωτικό</th>
                  <th scope="col">Ειδίκευση</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course, idx) => (
                  <tr key={idx}>
                    <th scope="row">{course.code}</th>
                    <td>{course.title}</td>
                    <td>{course.semester}</td>
                    <td>{course.professor}</td>
                    <td>{course.mandatory}</td>
                    <td>{course.specialization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary w-100 h-50">Προβολή Όλων</button>
      </div>
    </div>
  );
};

export default OldRegistrations;
