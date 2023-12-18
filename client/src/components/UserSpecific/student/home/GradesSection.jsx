import styles from "./GradesSection.module.css"
import gradesimage from "./temp.png"

const GradesSection = () => {
  return (
    <div className={styles['grades-section']}>
        <h2>Βαθμολόγιο: </h2>
        <img src = {gradesimage}/>
    </div>
  )
}

export default GradesSection