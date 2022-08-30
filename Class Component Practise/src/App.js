import ClockList from "./Component/ClockList";
import Form from "./Component/Form";
function App() {
  return (
    <div>
      <ClockList quentity={[1, 2, 3]}/>
      <Form />
    </div>
  );
}

export default App;
