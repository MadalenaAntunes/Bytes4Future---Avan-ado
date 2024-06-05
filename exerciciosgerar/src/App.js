import logo from './logo.svg';
import './App.css';
import Contador from './Components/contador';
import { NameGenerator } from './Components/nameGenerator';


function App() {
  return (
    <div className="App">
      <Contador/>
      <NameGenerator/>
    </div>
  );
}

export default App;
