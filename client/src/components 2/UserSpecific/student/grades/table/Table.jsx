import React from "react";
import styles from "./Table.module.css";  // Import the CSS module for styling

const Table = ({ data }) => {
    return (
        <div className={styles.tableBackground}>
            <table className={`table ${styles.striped}`}>
                <thead>
                <tr>
                    <th scope="col">Κωδικός</th>
                    <th scope="col">Μάθημα</th>
                    <th scope="col">Εξάμηνο</th>
                    <th scope="col">Βαθμός</th>
                </tr>
                </thead>
                <tbody>
                {/* Map through the data to dynamically render rows */}
                {data.map((item) => (
                    <tr key={item.code}>
                        <th scope="row">{item.code}</th>
                        <td>{item.subject}</td>
                        <td>{item.semester}</td>
                        <td>{item.grade}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
