import Card from './Card';
import { guestAnnouncementCardData  } from  "/src/locales/gr";

import styles from './AnnouncementsSection.module.css';

import image1 from '/src/assets/homepage/research.png';
import image2 from '/src/assets/homepage/clubs.png';
import image3 from '/src/assets/homepage/newteaching.png';

const images = [image1, image2, image3];



const AnnouncementsSection = () => {
    return (
        <div className={styles["announcements-section"]}>
            <h1>Τελευταίες Ανακοινώσεις :</h1>
            <div className={styles["cards"]}>
                {guestAnnouncementCardData.map((card, index) => (
                    <Card 
                        key={card.id} 
                        title={card.title} 
                        image={images[index]}
                    />
                ))}
            </div>
        </div>

    );
};

export default AnnouncementsSection;
