import React from "react";

const Title = props =>{
    const {text, classname} = props;
    return (
        <h2 className={classname}>{text}</h2>
    )
};

export default Title;