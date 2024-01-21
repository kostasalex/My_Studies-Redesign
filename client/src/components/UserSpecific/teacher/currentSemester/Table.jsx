import styles from './Table.module.css';

export default function StudentsTable({ data, onEdit, onSave }) {
  return (
    <div>
      <h2>Πίνακας Φοιτητών</h2>
      <div className="table-background">
        <table className="table table-striped">
          <thead>
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
                      className={styles.numberInput}
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
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
    </div>
  );
};
