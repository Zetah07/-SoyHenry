import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
    render() {
    return (
        <p>
        Clickeado: {this.props.count} veces
        <button
            onClick = {this.props.increment()}
        >
            +
        </button>
        <button
            onClick={this.props.decrement()}
        >
            - 
        </button>
        </p>
    );
    }
}

const mapStateToProps = (state) => {
    return {
    count: state.count,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
