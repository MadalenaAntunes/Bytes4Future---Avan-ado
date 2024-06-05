import { useState } from 'react';
import { Color } from './components/colors';
import './App.css';

function App() {
const [change, setChange] = useState(false)

  return (
    <div className="App">
      <div className='titulo'>
      <h1>Bytes4Coolors</h1>
      </div>
      <div className='Cores'>
      <Color change={change}/>
      <Color change={change}/>
      <Color change={change}/>
      <Color change={change}/>
      <Color change={change}/>
      <button style = {{ borderRadius: "6px", width: "150px", height: "30px", position: "absolute", bottom: "50px", left: "46%", color:"white", backgroundColor: "black"}} onClick={()=> setChange((prev)=> !prev)}>Change</button>
    </div>
    </div>
  );
}

export default App;
