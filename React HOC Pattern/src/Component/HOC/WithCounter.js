import React from "react";

const WithCounter = (OriginalComponent) => {
    class newComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count : 0,
            }
        }

        counter = () => {this.setState ((preveState) => ({count : preveState.count + 1 }) ) }

        render() {
            const {count} = this.state;
            return(
                <div>
                    <OriginalComponent count={count} counter={this.counter} />
                </div>
            )
        }
    }
    return newComponent;
}

export default WithCounter;
