import React from "react";

class Button extends React.Component{

    // shouldComponentUpdate(nextProps, nextState) {
    //     const {change} = this.props;
    //     const {change : nextChange} = this.props;
    //     (change === nextChange) ? return false : return true;
    // }

    //should component a prblm ache

    render() {
        const {change,convert, show} = this.props;
        
        return(
            <div>
                <button onClick={change}>{convert}</button>
                {show && <p>hello</p>}
            </div>    
        )
        
    }
}

export default Button;