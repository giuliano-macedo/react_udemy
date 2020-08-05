import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let elems = ["test1", "test2", "test3"];
        return (
            <div className="App">
                <ul>
                    {elems.map(elems, (elem) => <li>elem</li>)}
                </ul>
            </div>
        );
    }
}

export default App;
