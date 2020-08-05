import React from "react";

const memeit = (str) => {
    return [...str].map((c) => (Math.random() >= .5 ? c : c.toUpperCase()));
}

const UserOutputStyle = {
    border: "1 px dotted black"
};

const UserOutput = (props) => {
    return (
        <div className="userOutput" style={UserOutputStyle}>
            <p>Username: {props.username}</p>
            <p>Username memed:{memeit(props.username)}</p>
        </div>
    );
}

export default UserOutput;