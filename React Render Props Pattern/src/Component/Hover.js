export default function Hover ({count, counterHandelar}) {

    return(
        <h1 onMouseOver={counterHandelar}>Hover {count} Times </h1>
    )
}