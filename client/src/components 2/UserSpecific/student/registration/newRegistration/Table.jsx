import styles from "./Table.module.css"
import { FaTrash } from 'react-icons/fa';

const Table = ({ columns, rows, onCheckboxChange, selectedRows, onDelete }) => {
    const handleCheckboxChange = (event, courseId) => {
        const isChecked = event.target.checked;
        onCheckboxChange(isChecked, courseId);
    };

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col"><h5>{column}</h5></th>
                        ))}
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={selectedRows && selectedRows.includes(row.id) ? styles["table-row-selected"] : ""}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td key={cellIndex}><h5>{cell}</h5></td>
                            ))}
                            <td>
                                {selectedRows &&
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={selectedRows.includes(row.id)}
                                            onChange={(e) => handleCheckboxChange(e, row.id)}
                                            id={`checkbox-${row.id}`}
                                        />
                                    </div>}
                                {onDelete &&
                                    <button className="btn" onClick={() => onDelete(row.id)}>
                                        <FaTrash /> {/* Trash icon */}
                                    </button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
