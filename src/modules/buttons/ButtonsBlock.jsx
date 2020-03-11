import React from "react";
import CustomButton from "./CustomButton";

const ButtonsBlock = props => {
    const { classname, buttonStartCallback, buttonStopCallback, buttonResetCallback } = props;

    return(
        <div className={`${classname}__buttons-wrapper `}>
            <CustomButton classname = {"custom-button"} name = {"stop"} callback = {buttonStopCallback}/>
            <CustomButton classname = {"custom-button"} name = {"start"} callback = {buttonStartCallback}/>
            <CustomButton classname = {"custom-button"} name = {"reset"} callback = {buttonResetCallback}/>
        </div>
    )
};

export default ButtonsBlock;