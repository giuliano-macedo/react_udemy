import React, { Component } from 'react';
import Number from "./Number";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let elems = [1, 2, 3, 4];
        return (
            <div className="App">
                <ul>
                    {elems.map((elem) => <Number value={elem} />)}
                </ul>
            </div>
        );
    }
}

export default App;
