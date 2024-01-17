import styles from "./LatestGradesSection.module.css";

const LatestGradesSection = () => {
  return (
    <div className={styles["latestgrades-section"]}>
      <h3>Τελευταίοι βαθμοί:</h3>
      <ul>
        <li style={{ display: "flex", justifyContent: "normal" }}>
          <h5 style={{ marginRight: "30px" }}>Γραμμική Άλγεβρα : </h5>
          <h4 style={{ color: "blue", fontSize: "1.7em" }}>7</h4>
        </li>
        <li style={{ display: "flex", justifyContent: "normal" }}>
          <h5 style={{ marginRight: "30px" }}>Τέχνητη Νοημοσύνη : </h5>
          <h4 style={{ color: "blue", fontSize: "1.7em" }}>10</h4>
        </li>
        <li style={{ display: "flex", justifyContent: "normal" }}>
          <h5 style={{ marginRight: "30px" }}>Προγραμματισμός Συστήματος : </h5>
          <h4 style={{ color: "red", fontSize: "1.7em" }}>3</h4>
        </li>
      </ul>
    </div>
  );
};

export default LatestGradesSection;
