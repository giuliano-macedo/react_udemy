import React from "react";

const UserInput = (props) => {
    return (
        <div className="userInput">
            <input onChange={props.userInputHandler} />
        </div>
    );
}

export default UserInput;