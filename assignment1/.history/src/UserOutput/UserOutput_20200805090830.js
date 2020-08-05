import React from "react";

const memeit = (str) => {
    if str === null: return;
    return str.map((c) => (Math.random() >= .5 ? c : c.toUpperCase()));
}

const UserOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Username: {props.username}</p>
            <p>Username memed:{memeit(props.username)}</p>
        </div>
    );
}

export default UserOutput;