import redux, { createStore, applyMiddleware } from  'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// export const rootStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export const rootStore = createStore(rootReducer);