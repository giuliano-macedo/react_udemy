import React, { Component } from 'react';
import NumberDisplay from "./NumberDisplay";
import './App.css';

class App extends Component {
    state = {
        noClicks: 0
    }
    increaseClicksHandler = () => {
        this.setState({ noClicks: this.state.noClicks + 1 });
    }
    resetClickHandler = () => {
        setState({ noClicks: 0 });
    }
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <NumberDisplay value={this.state.noClicks} />
                <button onClick={this.increaseClicksHandler} >Click me</button>
                <button onClick={this.resetClickHandler} >Reset</button>
            </div>
        );
    }
}

export default App;
