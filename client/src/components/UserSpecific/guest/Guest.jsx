
import { useState } from 'react'
import LoginSection from "./login/LoginSection"
import InfoSection from "./infoSection/InfoSection"
import AnnouncementsSection from "./announcementSection/AnnouncementsSection"
import FaqSection from "./faqSection/FaqSection"

const Guest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="container">
      <LoginSection isModalOpen={isModalOpen} />
      <InfoSection setIsModalOpen={setIsModalOpen} />
      <AnnouncementsSection />
      <FaqSection />
    </div>
  )
}

export default Guest