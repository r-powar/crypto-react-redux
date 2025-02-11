import {createStore, applyMiddleware} from "redux";
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState){
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
};