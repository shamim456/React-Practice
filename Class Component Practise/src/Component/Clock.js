import React from "react";
import Button from "./Button";

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            locale : "bn-BD",
            convert: "Bangla Ghori"
        }
        
    }

    componentDidMount() {
        this.timer = setInterval(() => this.thick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    thick = () => {
        this.setState({
            date : new Date()
        })
    
    }

    changeHandelarEnglish = (e) => {
        // e.preventDefault();
        this.setState({
            locale: "en-US",
            convert: "English Ghori"
        })
    }
    changeHandelarBangla = (e) => {
        // e.preventDefault();
        this.setState({
            locale: "bn-BD",
            convert: "Bangla Ghori"
        })
    }



    render() {
        const {date, locale, convert} = this.state;
        
        return(
            <div>
                
                <h1>This Time Is : {date.toLocaleTimeString(locale)}</h1>
                {
                    locale === "bn-BD" ? 
                    <button type="button" onClick={this.changeHandelarEnglish}>{convert}</button> : 
                    <button type="button" onClick={this.changeHandelarBangla}>{convert}</button>
                }


                {
                    locale === "bn-BD" ? 
                    <Button change = {this.changeHandelarEnglish} convert= "Bangla Ghori" show = {false}/> :
                    <Button change = {this.changeHandelarBangla} convert= "English Ghori" show/>

                }
                {/* <Form /> */}
            </ div>
        )
    }
}

export default Clock;