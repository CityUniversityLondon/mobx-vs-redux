import React from "react";
import {connect} from "react-redux";
import {COUNTER_ADD_ONE} from "./redux-reducer";

class ReduxCounter extends React.Component {
    render() {
        return (
            <div>
                <p>Count: {this.props.counter.count}</p>
                <button onClick={this.props.onAddOne}>+</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddOne: () => dispatch({type: "COUNTER_ADD_ONE"})
    };
};

export const ConnectedReduxCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCounter);

