
import faqimage from '@/assets/homepage/faq.png';
import styles from './FaqSection.module.css'

const FaqSection = () => {
  return (
    <div className = {styles["faq-section"]}>
        <img src ={faqimage}/>
        <h1>Χρειάζεσαι Βοήθεια?</h1>
    </div>
  )
}

export default FaqSection