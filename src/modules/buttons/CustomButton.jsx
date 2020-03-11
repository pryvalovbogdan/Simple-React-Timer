import React from "react";

const CustomButton = props => {

    const { classname, name, callback } = props;
    return(
        <button className = {classname} onClick = {callback}>{name}</button>
    )
};

export default CustomButton;