import './App.css';
import ColorCode from './ColorCode';
import Game from './Game';
import Users from './UsersClass';
import Example from './useMemo';
import ExampleCallback from './useCallback';
import ComponentA from './useContext';
import Counter from './Counter';
import { SampleEffect } from './useEffect';
import Parent from './Parent';
import Game1 from './Game1';
import Game2 from './Game2'

function App() {
  return (
    <div className="App">
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <SampleEffect/> */}
      {/* <ComponentA/> */}
      {/* <Example/> */}
      {/* <ExampleCallback/> */}
  {/* <Game/> */}
  {/* <Game1/> */}
  <Game2/>
  {/* <Users/> */}
  {/* <ColorCode/> */}
    </div>
  );
}

export default App;
