import React from "react";
const style = {
    "display": "inline - block",
    "padding": "16px",
    "text - align": "center",
    "margin": "16px",
    "border": "1px solid black"
}

const CharComponent = (props) => {
    return (
        <div>
            {props.input.map((char) =>
                <div style={style}>
                    {char}
                </div>
            )}
        </div>
    );
}

export default CharComponent;