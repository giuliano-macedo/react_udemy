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

    }
    render() {
        return (
            <div className="App" >
                <input onChange={this.inputHandler} defaultValue={this.state.input} />
                <p>input length:{this.state.input.length}</p>
                <ValidationComponent inputLength={this.state.input.length} />
                {[...this.state.input].map((char, index) =>
                    <CharComponent char={char} charId={index} onRemove={removeChar} />
                )}

            </div>
        );
    }
}

export default App;
