import React, { useState } from "react";
import "./Table.module.css";
const StudentsTable = ({ data }) => {
    return (
      <div className="table-background">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Αριθμός Μητρώου</th>
              <th scope="col">Όνομα</th>
              <th scope="col">Επίθετο</th>
              <th scope="col">Βαθμός</th>
              <th scope="col">Επεξεργασία</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.studentID}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.grade}</td>
                <td>
                  <button className="edit-button">Επεξεργασία</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
const Students = () => {
  // Δεδομένα των φοιτητών
  const sampleData = [
    {
      studentID: "Κ12345",
      firstName: "Γιάννης",
      lastName: "Παπαδόπουλος",
      grade: 8.5,
    },
    {
      studentID: "Κ67890",
      firstName: "Μαρία",
      lastName: "Κωνσταντίνου",
      grade: 9.2,
    },
    {
      studentID: "Κ11223",
      firstName: "Νίκος",
      lastName: "Σταυρίδης",
      grade: 7.8,
    },
    {
      studentID: "Κ44556",
      firstName: "Ελένη",
      lastName: "Παπαδοπούλου",
      grade: 6.4,
    },
    {
      studentID: "Κ78901",
      firstName: "Αλέξης",
      lastName: "Παπανικολάου",
      grade: 9.8,
    },
  ];

  // Χρήση του useState για τη διαχείριση των δεδομένων
  const [studentsData, setStudentsData] = useState(sampleData);

  return (
    <div>
      <h2>Πίνακας Φοιτητών</h2>
      <StudentsTable data={studentsData} />
    </div>
  );
};

export default Students;
