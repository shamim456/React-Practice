import Emoji from "./Component/Emoji";
import Text from "./Component/Text";
import Bracket from "./Component/Bracket";

function App() {
  return (
    <div>
      {/* <Bracket>
        {({addBrackets}) =>(
          <Emoji>
            {({addEmojis}) => <Text addBrackets ={addBrackets} addEmojis={addEmojis} /> }
           </Emoji>     
      )}
      </Bracket> */}

      <Emoji>
        {({addEmojis})=> (
          <Bracket>
            {({addBrackets}) => <Text  addEmojis={addEmojis} addBrackets={addBrackets}/>}
          </Bracket>
        )}
      </Emoji>
      
    </div>
  );
}

export default App;

{/* <Emoji>
      {({addEmojis}) => (
        <Bracket>
        {({addBrackets}) => <Text addEmojis={addEmojis}  addBrackets = {addBrackets} />}
        </Bracket>          
      )}
      </Emoji> */}

 