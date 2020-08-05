import React, { Component } from 'react';

class Number extends Component {
    render() {
        return (
            <h2>
                you pressed {this.props.value}
            </h2>
        );
    }
}