import {applyMiddleware, combineReducers, createStore, compose} from 'redux';

import thunkMiddleware from 'redux-thunk';
import formReducer from './form-reducer';
import tableReducer from './table-reducer';
const reducers = combineReducers({
    table: tableReducer,
    form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

