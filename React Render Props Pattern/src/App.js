import Counter from "./Component/Counter";
import Click from "./Component/Click";
import Hover from "./Component/Hover";

function App() {
  return (
    <div>
      <Counter render = {(count, counterHandelar) => (<Click count={count} counterHandelar={counterHandelar} />) }/>
      <Counter render = {(count, counterHandelar) => (<Hover count={count} counterHandelar={counterHandelar} />) }/>
    </div>
  );
}

export default App;
