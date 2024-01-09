import styles from "./OldRegistrationsSection.module.css";

const OldRegistrations = () => {
  return (
    <div className="mt-5">
      <h3>Ιστορικό Παλαιότερων Δηλώσεων</h3>
      <div className={styles["table"]}>
        <h4>Εαρινό 2022</h4>

        <div>
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
                <th scope="row">Κ15</th>
                <td>Γραμμική Άλγεβρα</td>
                <td>1ο</td>
                <td>4.9</td>
              </tr>

              <tr>
                <th scope="row">K21</th>
                <td>Μεταγλωτιστές</td>
                <td>5ο</td>
                <td>10</td>
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
      </div>
      <hr></hr>
      <div className={styles["table"]}>
        <h4>Χειμερινό 2022</h4>
        <div>
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
      </div>
      <hr></hr>
      <div className={styles["table"]}>
        <h4>Σεμπτέμβριος 2021</h4>
        <div>
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
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary w-100 h-50">Προβολή Όλων</button>
      </div>
    </div>
  );
};

export default OldRegistrations;
