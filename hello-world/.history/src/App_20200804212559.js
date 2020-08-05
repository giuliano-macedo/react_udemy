import React, { Component } from 'react';
import NumberDisplay from "./NumberDisplay";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        noClicks: 0
    }
    click() {
        this.setState(() => {
            this.state.noClicks++;
        });
    }
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <NumberDisplay value={this.state.noClicks} />
                <button onClick={click} >Click me</button>
            </div>
        );
    }
}

export default App;
