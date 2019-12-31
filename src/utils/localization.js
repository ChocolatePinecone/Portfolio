let currentLanguage;

const setLanguage = (language) => {
    document.documentElement.lang = language;
    currentLanguage = language;
};

const localize = (label) => {

    // Read json file with the current language

    return "";
};

export default { setLanguage, localize };
