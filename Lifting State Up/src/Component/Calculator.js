import React from "react";
import TemparetureInput from "./TemparetureInput";
import {conveter, toCelcious, toFahrenhite} from "../Lib/Conveter";
import Boiling from "./Boiling";

class Calculator extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            tempareture: "",
            scale: "c"
        };    
    }

    changeHandelar = (e, scale) => {
        this.setState({
            tempareture: e.target.value,
            scale
        })
    }

    
    render() {
        const {tempareture, scale} = this.state;
        const celcious = scale === "c" ? conveter(tempareture, toFahrenhite) : tempareture;
        const fahenhite = scale === "f" ? conveter(tempareture, toCelcious) : tempareture;
        return(
            <div>
                <TemparetureInput scale = "c" temp={fahenhite} changeHandelar={this.changeHandelar}/>
                <TemparetureInput scale = "f" temp={celcious} changeHandelar={this.changeHandelar}/>
                <Boiling temp = {tempareture} />
            </div>
        )
    }
}

export default Calculator;