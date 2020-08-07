import React, { Component } from 'react';

import './App.css';

class App extends Component {
    state = {
        input: null,
    };
    inputHandler = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    render() {
        return (
            <div className="App" >
                <input onChange={this.inputHandler} />
            </div>
        );
    }
}

export default App;
