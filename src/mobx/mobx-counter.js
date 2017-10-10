import React from "react";
import {inject, observer} from "mobx-react";

@inject("counter")
@observer
export class MobxCounter extends React.Component {
    render() {
        return (
            <div>
                <p>Count: {this.props.counter.count}</p>
                <button onClick={() => this.props.counter.addOne()}>+</button>
            </div>
        );
    }
}
