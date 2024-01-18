import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('gr'); // Default language

    useEffect(() => {
        // Load language from cookie when the component mounts
        const storedLanguage = Cookies.get('language');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    const changeLanguage = (lang) => {

        setLanguage(lang);
        Cookies.set('language', lang, { expires: 365 }); // Cookie expires in 365 days
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
