import {Provider} from "react-redux";
import React from "react";
import {render} from "react-dom";
import {ConnectedReduxCounter} from "./redux-counter";
import {counterReducer} from "./redux-reducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    counter: counterReducer
});

const store = createStore(reducers);

render((
    <Provider store={store}>
        <ConnectedReduxCounter/>
    </Provider>
), document.getElementById("root"));