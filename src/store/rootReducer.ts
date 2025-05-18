
import { combineReducers } from 'redux';
import { cakeReducer, iceCreamReducer} from './products/reducer';
import { langResourcesReducer } from './languageResources/reducer';

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    langResources: langResourcesReducer
})