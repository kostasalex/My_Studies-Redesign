import React, { createContext, useState } from 'react';

export const StudetTeacherContext = createContext();

export const StudetTeacherProvider = ({ children }) => {
    const [user, setUserMode] = useState(true); // Default user selection

    const changeUser = (usermode) => {
        setUserMode(usermode);
    };

    return (
        <StudetTeacherContext.Provider value={{ user, changeUser }}>
            {children}
        </StudetTeacherContext.Provider>
    );
};

