import React from "react";
const style = {
    "display": "inline-block",
    "padding": "16px",
    "text-align": "center",
    "margin": "5px",
    "border": "1px solid black"
}

const CharComponent = (props) => {
    return (
        <div style={style} onClick={() => props.onRemove(props.index)}>
            {props.char}
        </div>
    );
}

export default CharComponent;