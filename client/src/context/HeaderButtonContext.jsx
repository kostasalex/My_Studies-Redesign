import { createContext, useState } from 'react';

export const StudetTeacherContext = createContext();

const studentColor = "rgb(230, 206, 228, 0.7)";
const teacherColor = "rgb(93, 163, 158, 0.7)";

export const StudetTeacherProvider = ({ children }) => {
    const [user, setUserMode] = useState(localStorage.getItem("user") || "student");
    const [isUserLoggedIn, setIsUserLogged] = useState(localStorage.getItem("isUserLoggedIn") === "true");

    const setLoginStatus = (isLogin) => {
        setIsUserLogged(isLogin)
    }

    const changeUser = (usermode) => {
        setUserMode(usermode);
    };



    return (
        <StudetTeacherContext.Provider value={{ user, changeUser, studentColor, teacherColor, isUserLoggedIn, setIsUserLogged }}>
            {children}
        </StudetTeacherContext.Provider>
    );
};

