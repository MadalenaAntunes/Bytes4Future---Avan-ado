import logo from './logo.svg';
import './App.css';

import { Toggle } from './components/Toggle';
import { Card } from './components/Card';
import { Contador } from './components/exercicio/Contador';

import { useState } from 'react';

function App() {
  let [state, setState] = useState(false)

  return (
    <div className="App">
      <Toggle isDarkMode={state} changeTheme={setState} />
      <Card isDarkMode={state} />

      <Contador />
    </div>
  );
}

export default App;
