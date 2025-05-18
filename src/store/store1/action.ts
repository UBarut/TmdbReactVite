
export const addLocalization = (lang, key, value) => {
    return {
        type: `LOCALIZATION_${lang.toUpperCase()}`,
        key: key,
        value: value,
        language: lang
    }
}
export const localizationHandler = (lang) => {
    return {
        type: 'LOCALIZATION_LANG',
        language: lang
    }
}