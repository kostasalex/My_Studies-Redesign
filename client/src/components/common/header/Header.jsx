import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleUserChange = (userType) => {
    switch (userType) {
      case "student":
        navigate("/student");
        break;
      case "teacher":
        navigate("/teacher");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const handleImageClick = (selectedOption) => {
    console.log(`Επιλογή: ${selectedOption}`);
  };

  const handleLanguageDropdownToggle = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleUserDropdownToggle = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleProfileClick = () => {
    console.log("Επιλέχθηκε το Προφίλ");
  };

  const handleLogoutClick = () => {
    console.log("Επιλέχθηκε η Αποσύνδεση");
  };
  return (
    <div className={`${styles.header} p-2`}>
      <div className={`${styles.headerContainer} m-2`}>
        <img
          src="https://res.cloudinary.com/drijmbypg/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702593334/logo-large_uaskki.jpg?_s=public-apps"
          alt="UOA Logo"
          className={`${styles.logoleft}`}
        />

        <button
          type="button"
          className={`${styles.button} btn btn-primary m-2`}
          onClick={() => handleUserChange("guest")}
        >
          Αρχική
        </button>

        <button
          type="button"
          className={`${styles.button} btn btn-primary m-2`}
          onClick={() => handleUserChange("student")}
        >
          Ανακοινώσεις
        </button>

        <button
          type="button"
          className={`${styles.button} btn btn-primary m-2`}
          onClick={() => handleUserChange("teacher")}
        >
          Βοήθεια
        </button>

        <button
          type="button"
          className={`${styles.loginbutton} btn btn-primary m-2`}
          onClick={() => handleUserChange("student")}
        >
          Είσοδος Φοιτητών
        </button>

        <button
          type="button"
          className={`${styles.loginbutton} btn btn-primary m-2`}
          onClick={() => handleUserChange("teacher")}
        >
          Είσοδος Καθηγητών
        </button>

        <Dropdown
          show={showLanguageDropdown}
          onToggle={handleLanguageDropdownToggle}
        >
          <Dropdown.Toggle
            variant="primary"
            id="language-dropdown"
            className={`${styles.button} ${styles.logoright}`}
          >
            <img
              src="https://www.pngitem.com/pimgs/m/23-231113_clip-art-greek-flag-png-greek-flag-circle.png"
              alt="Greek"
              style={{ width: "30px", height: "auto" }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleImageClick("Greek")}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/863/131/original/united-kingdom-flag-circle-flag-of-uk-in-round-circle-png.png"
                alt="English"
                style={{ width: "30px", height: "auto" }}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button
          onClick={handleUserDropdownToggle}
          className="border-0 bg-transparent"
        >
          <img
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="User Icon"
            style={{ width: "40px", height: "auto" }}
          />
        </button>

        {showUserDropdown && (
          <Dropdown
            show={showUserDropdown}
            onToggle={handleUserDropdownToggle}
            drop="down"
            className={`${styles.dropdownMenu} ${styles.userDropdown}`}
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleProfileClick}>Προφίλ</Dropdown.Item>
              <Dropdown.Item onClick={handleLogoutClick}>
                Αποσύνδεση
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Header;
