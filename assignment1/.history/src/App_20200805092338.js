import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {


    state = {
        username: "Jooj da silva",
        usernames=[
            "Jago Duran",
            "Beck Rasmussen",
            "Karla Hatfield",
            "Aden Emery",
            "Eloise Mccullough",
            "Omar Rossi",
            "Paloma Peacock",
            "Zakary Caldwell",
            "Adyan Rees",
            "Shakira Schneider"
        ]
    }

    changeUsername = (str) => {
        this.setState({ username: str });
    }

    render() {
        return (
            <div className="App" >
                <UserInput change={this.changeUsername} default={this.state.username} />
                <UserOutput username={this.state.username} />

                {this.state.usernames.map((username) =>
                    <UserOutput username={username} />
                )}

            </div>
        );
    }
}

export default App;
