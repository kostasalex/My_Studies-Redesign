
import { useState, useContext } from 'react'
import LoginSection from "./login/LoginSection"
import InfoSection from "./infoSection/InfoSection"
import AnnouncementsSection from "./announcementSection/AnnouncementsSection"
import FaqSection from "./faqSection/FaqSection"
import { LanguageContext } from '../../../context/LanguageContext'
import { StudetTeacherContext } from "@/context/HeaderButtonContext.jsx";

const Guest = () => {
  const { user } = useContext(StudetTeacherContext);
  const { language } = useContext(LanguageContext);
  const headerTeacher = language === "en" ? "My Studies For Professors" : "My Studies Για Καθηγητές"
  const headerStudent = language === "en" ? "My Studies For Students" : "My Studies Για Φοιτητές"
  const Header = user === "student" ? headerStudent : headerTeacher;
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="container">
      <h1
        className="text-center mt-2 mb-4 font-weight-bold text-dark"
        style={{
          fontSize: "2rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {Header}
      </h1>
      <LoginSection isModalOpen={isModalOpen} />
      <hr />
      <InfoSection setIsModalOpen={setIsModalOpen} />
      <hr />
      <AnnouncementsSection />
      <hr />
      <FaqSection />
    </div>
  )
}

export default Guest