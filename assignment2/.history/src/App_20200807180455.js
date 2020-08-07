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
    return(
        <div className = "App" >
            <input onChange={inputHandler} />
        </div>
    );
}

export default App;
