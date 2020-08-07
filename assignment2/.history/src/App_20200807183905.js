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
    removeChar = (index) => {
        let input = [...this.state.input];
        input.splice(index, 1);
        this.setState({
            input: input.join("")
        });
    }
    render() {
        console.log(this.state.input);
        return (
            <div className="App" >
                <input onChange={this.inputHandler} defaultValue={this.state.input} />
                <p>input length:{this.state.input.length}</p>
                <ValidationComponent inputLength={this.state.input.length} />
                {[...this.state.input].map((char, index) =>
                    <CharComponent char={char} charIndex={index} onRemove={this.removeChar} />
                )}

            </div>
        );
    }
}

export default App;
