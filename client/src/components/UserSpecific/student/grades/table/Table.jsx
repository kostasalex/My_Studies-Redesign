import React from "react";
import "./Table.module.css"; // Κάνουμε import το CSS αρχείο

const Table = () => {
  return (
    <div className="table-background">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Κωδικός</th>
            <th scope="col">Μάθημα</th>
            <th scope="col">Εξάμηνο</th>
            <th scope="col">Βαθμός</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Κ15</th>
            <td>Γραμμική Άλγεβρα</td>
            <td>1ο</td>
            <td>4.9</td>
          </tr>
          <tr>
            <th scope="row">K16</th>
            <td>Διακριτά Μαθηματικά</td>
            <td>1ο</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">K21</th>
            <td>Μεταγλωτιστές</td>
            <td>5ο</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
