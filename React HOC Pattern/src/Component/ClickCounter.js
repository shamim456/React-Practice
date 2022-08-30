import WithCounter from "./HOC/WithCounter";

const ClickCounter = (props) => {
    const {count, counter} = props;
    return(
        <button onClick={counter}>Click {count} Times</button>
    )
}

export default WithCounter(ClickCounter);
