import React, { Component } from "react";
import "../../styles/Timer.less";
import Title from "../title/Title"
import CustomInputBlock from "../input/InputWrapper";
import ButtonsBlock from "../buttons/ButtonsBlock";

class Layout extends React.Component {

    state = {
            timeSec:0,
    };

    setValue = (e) => {
        this.inputValue = e.target.value;
    };

    displayTime = () => {
        clearInterval(this.timer);
        if(this.startBtn !== undefined){
            this.startBtn.disabled = false;
        }
        if(this.inputValue < 0 ||isNaN(+this.inputValue) || this.inputValue.length >13 ||
            this.inputValue.indexOf(".") !== -1 ){
            this.setState({timeSec:0})
        } else {
            this.setState({timeSec: this.inputValue})
        }
    };

    start = (e) =>{
        this.startBtn = e.target;
        this.startBtn.disabled = true;
        if(this.state.timeSec <= 0){
            return false
        }
        this.setState({
            timeSec: this.state.timeSec,
        });
        this.timer = setInterval(()=>{
            if(this.state.timeSec == 0){
                return
            }

            this.setState({
                timeSec: this.state.timeSec - 1
            })
        }, 1000)
    };

    stop = () => {
        clearInterval(this.timer);
        this.startBtn.disabled = false;
    };

    reset = () => {
        this.setState({timeSec:0});
        clearInterval(this.timer);
        this.startBtn.disabled = false;
    };

    getSeconds = () => {
        return ("0" + this.state.timeSec % 60).slice(-2);
    };

    getMinutes = () => {
        if(this.state.timeSec / 60 >= 10){
            return Math.floor(this.state.timeSec / 60);
        }  else {
            return ("0"+ Math.floor(this.state.timeSec / 60));
        }
    };

    render(){
        return(
            <div className={"wrapper"}>
                <div className="Main">
                    <Title classname = {"title"} text = {"Layout"}/>
                    <CustomInputBlock divClassname = {"Main"}   inputCallback ={this.setValue}
                                      buttonCallback = {this.displayTime}/>

                    <div className={"Main__result"}>{this.getMinutes()}:{this.getSeconds()}</div>
                    <ButtonsBlock classname = {"Main"} buttonStartCallback ={this.start}
                                  buttonStopCallback ={()=>{this.stop()}} buttonResetCallback ={()=>{this.reset()}}/>
                </div>
            </div>
        );
    }
}

export default Layout;

