
const getLocaleUrl = (cookieName) => {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    const language = getCookie(cookieName) || 'en'; // Default to English
    return language === 'gr' ? '@/locales/gr' : '@/locales/en';
};

export default getLocaleUrl;
