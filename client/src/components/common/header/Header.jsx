import { useContext, useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import {
  FaGlobe,
  FaUser,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import styles from "./Header.module.css";
import files from "../../../../public/uoalogo.svg";
import { useNavigate } from "react-router-dom";

import { LanguageContext } from "../../../context/LanguageContext.jsx";
import { StudetTeacherContext } from "../../../context/HeaderButtonContext.jsx";

import { headerTexts as headerTextsEn } from "@/locales/en";
import { headerTexts as headerTextsGr } from "@/locales/gr";

const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const headerTexts = language === "en" ? headerTextsEn : headerTextsGr;

  const { user, changeUser, studentColor, teacherColor, setIsUserLogged } =
    useContext(StudetTeacherContext);

  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
  const navigate = useNavigate();

  const handleProfileRedirect = () => {
    navigate("/profile");
  };

  const toggleLanguage = () => {
    changeLanguage();
  };
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded((expanded) => !expanded);

  const toggleUser = () => {
    let nextUser = user === "student" ? "teacher" : "student";
    changeUser(nextUser);
  };

  const logOut = () => {
    console.log("logout!");
    localStorage.setItem("isUserLoggedIn", "false");
    setIsUserLogged(false);
    navigate("/");
  };
  const loggedOutColor = "white";

  const headerBackgroundColor = isUserLoggedIn
    ? user === "student"
      ? studentColor
      : teacherColor
    : loggedOutColor;

  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        style={{ background: headerBackgroundColor }}
        className={styles.header}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={files} alt="UOA Logo" className={styles.logoleft} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavbar}
          >
            {expanded ? <FaTimes /> : <FaBars />} {/* Conditional rendering */}
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles.navbarCollapse}
          >
            <Nav className="me-auto ">
              <Nav.Link href="/">{headerTexts.home}</Nav.Link>
              <Nav.Link href="/faq">{headerTexts.faq}</Nav.Link>
              <Nav.Link href="/contact">{headerTexts.contact}</Nav.Link>

            </Nav>

            <div className={styles.languagelogin}>
              <div className={styles.languageSwitcher}>
                <FaGlobe onClick={toggleLanguage} />
                <span onClick={toggleLanguage}>
                  {language === "en" ? "English" : "Ελληνικά"}
                </span>
              </div>
              <div>
                {isUserLoggedIn ? (
                  <Dropdown align="mid">
                    <Dropdown.Toggle variant="" id="dropdown-user">
                      <FaUser className={styles.icon} />
                      <span>Νίκος Μπλέτσας</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleProfileRedirect}>
                        <FaUserCircle /> {headerTexts.profile}
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logOut}>
                        <FaSignOutAlt /> {headerTexts.logout}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <div className={styles.loginbtn}>
                    <button
                      style={{
                        background:
                          user === "student" ? teacherColor : studentColor,
                      }}
                      onClick={toggleUser}
                    >
                      {user === "student"
                        ? headerTexts.teacherPortal
                        : headerTexts.studentPortal}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
