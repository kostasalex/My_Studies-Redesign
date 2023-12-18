
import styles from './GraduationBar.module.css';
import barimg from "./temp2.png"

const GraduationBar = () => {
  return (
    <div className={styles["graduation-bar"]}>
        <img src ={barimg}/>
    </div>
  );
};

export default GraduationBar;
