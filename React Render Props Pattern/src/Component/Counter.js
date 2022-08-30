import React from "react";

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            count: 0
        }
    }

    counterHandelar = () => {
        
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render() {
        const {count} = this.state;
        const {render} = this.props;
        return(
            render(count, this.counterHandelar)
        )
    }
}
export default Counter;