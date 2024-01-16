import Card from "./Card";
import { guestAnnouncement as TextsEn } from "@/locales/en";
import { guestAnnouncement as TextsGr } from "@/locales/gr";
import { guestAnnouncementCardData as TextsGrcard } from "@/locales/gr";
import { guestAnnouncementCardData as TextsEncard } from "@/locales/en";
import styles from "./AnnouncementsSection.module.css";

import image1 from "@/assets/homepage/research.png";
import image2 from "@/assets/homepage/clubs.png";
import image3 from "@/assets/homepage/newteaching.png";
import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";

const images = [image1, image2, image3];

const AnnouncementsSection = () => {
  const { language } = useContext(LanguageContext);
  const guestAnnouncement = language === "en" ? TextsEn : TextsGr;
  const guestAnnouncementCardData =
    language === "en" ? TextsEncard : TextsGrcard;
  return (
    <div className={styles["announcements-section"]}>
      <h2>{guestAnnouncement.latestnews}</h2>
      <div className={styles["cards"]}>
        {guestAnnouncementCardData.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            image={images[index]}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
