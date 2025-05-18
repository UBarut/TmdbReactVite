import redux, { createStore } from  'redux';
import { langResourcesReducer } from './reducer';

export const languageStore = createStore(langResourcesReducer);