
import styles from './contactForm.module.css';

const Contact = () => {
    return (
        <div className={styles.formContainer}>
            <form className={styles.contactForm}>
                <h2 className={styles.formTitle}>Φόρμα Επικοινωνίας</h2>

                <label htmlFor="email" className={styles.label}>E-mail:</label>
                <input type="email" id="email" name="email" className={styles.input} />

                <label htmlFor="name" className={styles.label}>Ονοματεπώνυμο:</label>
                <input type="text" id="name" name="name" className={styles.input} />

                <label htmlFor="message" className={styles.label}>Μήνυμα:</label>
                <textarea id="message" name="message" className={styles.textarea}></textarea>

                <button type="submit" className={styles.submitButton}>Αποστολή</button>
            </form>
        </div>
    );
};

export default Contact;
