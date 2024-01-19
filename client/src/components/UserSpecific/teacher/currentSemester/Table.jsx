import React, { useState } from "react";
import "./Table.module.css";

const StudentsTable = ({ data, onEdit, onSave }) => {
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
              <td>
                {item.editing ? (
                  <input
                    type="text"
                    value={item.grade}
                    onChange={(e) => onEdit(index, e.target.value)}
                    style={{ width: "45px" }}
                  />
                ) : (
                  item.grade
                )}
              </td>
              <td>
                {item.editing ? (
                  <button onClick={() => onSave(index)}>Αποθήκευση</button>
                ) : (
                  <button onClick={() => onEdit(index, item.grade)}>
                    Επεξεργασία
                  </button>
                )}
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

  const [studentsData, setStudentsData] = useState(sampleData);

  const handleEdit = (index, initialGrade) => {
    const updatedData = [...studentsData];
    updatedData[index].editing = true;
    setStudentsData(updatedData);
  };

  const handleSave = (index) => {
    const updatedData = [...studentsData];
    updatedData[index].editing = false;
    setStudentsData(updatedData);
    // Εδώ μπορείτε να προσθέσετε λογική για αποθήκευση του βαθμού στον απαιτούμενο μηχανισμό αποθήκευσης.
  };

  return (
    <div>
      <h2>Πίνακας Φοιτητών</h2>
      <StudentsTable
        data={studentsData}
        onEdit={handleEdit}
        onSave={handleSave}
      />
    </div>
  );
};

export default Students;
