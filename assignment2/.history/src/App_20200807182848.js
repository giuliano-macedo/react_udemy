import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent/ValidationComponent";

import './App.css';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        input: "Maximilian",
    };
    inputHandler = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    render() {
        return (
            <div className="App" >
                <input onChange={this.inputHandler} defaultValue={this.state.input} />
                <p>input length:{this.state.input.length}</p>
                <ValidationComponent inputLength={this.state.input.length} />
                {[...this.state.input].input.map((char) =>
                    <CharComponent char={char} />
                )}

            </div>
        );
    }
}

export default App;
