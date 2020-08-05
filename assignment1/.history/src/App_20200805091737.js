import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

    state = {
        username: "Jooj da silva"
    }

    changeUsername = (str) => {
        this.setState({ username: str });
    }

    render() {
        return (
            <div className="App" >
                <UserInput userInputHandler={this.changeUsername} defaultUsername={this.state.username} />
                <UserOutput username={this.state.username} />
            </div>
        );
    }
}

export default App;
