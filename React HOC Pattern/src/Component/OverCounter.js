import WithCounter from "./HOC/WithCounter";


const OverCounter = (props) => {
    const {count, counter} = props;
    return(<h1 onMouseOver={counter}>Mouse Over {count} Times </h1>)
}
export default WithCounter(OverCounter);