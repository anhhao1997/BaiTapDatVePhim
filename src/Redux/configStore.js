import { combineReducers, createStore } from "redux";
import { DatVePhimReducer } from './Reducers/DatVePhimReducer'
const rootReducer = combineReducers({
    
  DatVePhimReducer
  
  });
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
