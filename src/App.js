import './App.css';
import ColorCode from './ColorCode';
import Game from './Game';
import Users from './UsersClass';
import Example from './useMemo';
import ExampleCallback from './useCallback';
import ComponentA from './useContext';
import Counter from './Counter';
import { SampleEffect } from './useEffect';
import Parent from './Parent'

function App() {
  return (
    <div className="App">
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <SampleEffect/> */}
      {/* <ComponentA/> */}
      {/* <Example/> */}
      {/* <ExampleCallback/> */}
  <Game/>
  {/* <Users/> */}
  {/* <ColorCode/> */}
    </div>
  );
}

export default App;
