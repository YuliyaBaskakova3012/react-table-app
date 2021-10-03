import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
import formReducer from "./form-reducer";
import tableReducer from "./table-reducer";
let reducers = combineReducers({
    table: tableReducer,
    form: formReducer
});
const store = createStore(reducers,  applyMiddleware(thunkMiddleware));

export default store;

