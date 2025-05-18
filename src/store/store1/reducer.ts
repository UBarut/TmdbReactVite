
const resourcesState = {
    language: 'tr',
    languages: {
        tr: {
        },
        en: {
        }
    }
}
export const langResourcesReducer = (state = resourcesState, action) => {
    // console.log(state)
    switch (action.type) {
        case 'LOCALIZATION_TR':
            return {
                ...state,
                languages: {
                    ...state.languages,
                    tr: {
                        ...state.languages.tr,
                        [action.key]: action.value
                    }
                }
            }
        case 'LOCALIZATION_EN':
            return {
                ...state,
                languages: {
                    ...state.languages,
                    en: {
                        ...state.languages.en,
                        [action.key]: action.value
                    }
                }
            }
        case 'LOCALIZATION_LANG':
            return {
                ...state,
                language: action.language
            }
        default: return state
    }
};