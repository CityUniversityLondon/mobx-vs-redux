import React from "react";

export class MobxCounter extends React.Component {
    render() {
        return (
            <div>
                <p>Count: {0}</p>
                <button onClick={() => false}>+</button>
            </div>
        );
    }
}