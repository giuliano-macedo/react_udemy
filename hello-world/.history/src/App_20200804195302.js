import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let elems = ["test1", "test2", "test3"];
        return (
            <div className="App">
                <h1>
                    My list
                </h1>
                <ul>
                    {elems.map((elem) => <li>elem</li>)}
                </ul>
            </div>
        );
    }
}

export default App;
