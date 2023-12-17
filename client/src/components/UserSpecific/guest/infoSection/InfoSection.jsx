import Card from './Card';
import { guestInfoCardData  } from  "/src/locales/gr";
import styles from './InfoSection.module.css';

const InfoSection = () => {
    return (
        <div className={styles["info-section"]}>
            {guestInfoCardData.map(card => (
                <Card key={card.id} title={card.title} text={card.text} />
            ))}
        </div>
    );
};

export default InfoSection;
