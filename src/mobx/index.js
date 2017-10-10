import {Provider} from "mobx-react";
import React from "react";
import {render} from "react-dom";
import {MobxCounter} from "./mobx-counter";
import {CounterStore} from "./mobx-store";

const stores = {
    counter: new CounterStore()
};

render((
    <Provider {...stores}>
        <MobxCounter/>
    </Provider>
), document.getElementById("root"));