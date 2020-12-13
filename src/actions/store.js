import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {reducers} from '../reducers/indexRed'

// call action creators that return a function instead of an action object
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)