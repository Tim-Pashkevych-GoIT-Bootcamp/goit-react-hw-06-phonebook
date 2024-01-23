import { devToolsEnhancer } from '@redux-devtools/extension';
import { conatctsReducer } from './reducer';
import { combineReducers, createStore } from 'redux';

const enhancer = devToolsEnhancer();
const rootReducer = combineReducers({
  phonebook: conatctsReducer,
});

export const store = createStore(rootReducer, enhancer);
