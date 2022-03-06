let currentQueryParams = window.location.search;
let setToLangEN;

const updateLanguage = () => {
    currentQueryParams = window.location.search;
    const urlPath = new URLSearchParams(currentQueryParams);
    setToLangEN = urlPath.get('lang') === 'en';
};

const getContentByLanguage = (contentNL, contentEN) => {
    if (window.location.search !== currentQueryParams || setToLangEN === undefined) {
        updateLanguage();
    }
    return (!setToLangEN) ? contentNL : contentEN;
};

const isLanguageEN = () => {
    updateLanguage();
    return setToLangEN;
};

export { getContentByLanguage, isLanguageEN };