import styles from "./GraduationBar.module.css";
import barimg from "./temp2.png";
import Path from "../path/path.module.css";

const GraduationBar = () => {
  return (
    <div className={Path["pathh"]}>
      <button>• Αρχική /</button>
      <img src={barimg} />
    </div>
  );
};

export default GraduationBar;
