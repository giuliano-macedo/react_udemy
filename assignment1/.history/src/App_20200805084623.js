import React from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {

    state = {
        username: null
    }

    changeUsername = (str) => {
        this.setState({ username: str });
    }

    return (
        <div className="App">
            <UserInput userInputHandler={this.hangeUsername} />
            <UserOutput username={this.state.username} />
        </div>
    );
}

export default App;
