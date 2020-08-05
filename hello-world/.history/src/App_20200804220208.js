import React, { Component } from 'react';
import NumberDisplay from "./NumberDisplay";
import './App.css';

class App extends Component {
    state = {
        noClicks: 0
    }
    click = () => {
        this.setState({ noClicks: this.state.noClicks + 1 });
    }
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <NumberDisplay value={this.state.noClicks} />
                <button onClick={this.click} >Click me</button>
                <button onClick={this.setState({ noClicks: 0 })} >Reset</button>
            </div>
        );
    }
}

export default App;
