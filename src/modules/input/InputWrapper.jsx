import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "../buttons/CustomButton";

const CustomInputBlock = props => {
    const { divClassname, inputCallback, buttonCallback  } = props;

    return(
        <div className={`${divClassname}__input-wrapper`}>
            <CustomInput classname={"custom-input"} text={"write your value"} callback = {inputCallback} />
            <CustomButton classname = {"custom-button"} name = {"set"} callback = {buttonCallback}/>
        </div>
    )
};

export default CustomInputBlock;