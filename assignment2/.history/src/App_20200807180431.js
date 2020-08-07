import React from 'react';

import './App.css';

function App() {
    state = {
        input: null,
    };
    const inputHandler = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    return (
        <div className="App">
            <input onChange={inputHandler} />
        </div>
    );
}

export default App;
