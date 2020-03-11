import React from "react";

const CustomInput = props => {
    const {classname, text, callback} = props;
    return(
        <input className={classname} placeholder={text} onBlur={callback}/>
    )
};

export default CustomInput;