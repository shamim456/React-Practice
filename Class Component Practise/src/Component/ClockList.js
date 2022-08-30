import Clock from "./Clock";
function ClockList({quentity = []}) {
    return(
        <div>
            {quentity.map(() => (
                <Clock key={Math.random()}/>
            ))}
        </div>
    )
}

export default ClockList;