import React from "react";
import "./UserInput.css";


const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input
                onChange={(event) => props.change(event.target.value)}
                value={props.default}
            />
        </div>
    );
}

export default UserInput;