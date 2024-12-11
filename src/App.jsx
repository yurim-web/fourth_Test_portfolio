import Left from "./layout/Left";
import Right from "./layout/Right";
import { etc_Css } from "./styles/etc_Css";

function App() {
  return (
    <div style={etc_Css.entire_box} className="App">
      <Left />
      <Right />
    </div>
  );
}

export default App;
