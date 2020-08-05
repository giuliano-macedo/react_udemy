import React from "react";



const UserInput = (props) => {
    return (
        <div className="userInput">
            <input onChange={(event) => props.userInputHandler(event.target.value)} />
        </div>
    );
}

export default UserInput;