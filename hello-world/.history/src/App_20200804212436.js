import React, { Component } from 'react';
import NumberDisplay from "./NumberDisplay";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        noClicks: 0
    }
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <NumberDisplay value={this.state.noClicks} />
            </div>
        );
    }
}

export default App;
