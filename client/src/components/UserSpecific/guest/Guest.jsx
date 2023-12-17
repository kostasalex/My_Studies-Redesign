import LoginSection from "./login/LoginSection"
import InfoSection from "./infoSection/InfoSection"
import AnnouncementsSection from "./announcementSection/AnnouncementsSection"
import FaqSection from "./faqSection/FaqSection"

const Guest = () => {
  return (
    <div>
      <LoginSection />
      <InfoSection />
      <AnnouncementsSection />
      <FaqSection />
    </div>
  )
}

export default Guest