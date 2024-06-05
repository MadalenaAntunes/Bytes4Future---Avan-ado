import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState()

  const increment = async () => {
    const res = await fetch("/api/counter/increment", { method: "POST" })
    if (res.status === 201) {
      const body = await res.json()
      setCounter(body.number)
    }
  }

  //Quando o componente é montado
  useEffect(() => {

    async function fetchData() {
      const options = { method: 'GET' };
      const res = await fetch('/api/counter', options)
      console.log(res.status)
      const body = await res.json()
      console.log(body)
      setCounter(body.number)
    }

    //Carregar valores
    fetchData()
    //Guardar em state
  }, [])

  return (
    <div className="App">
      {
        counter === undefined ?
          (<p>Loading screen...</p>) :
          (<div>
            <p>VALOR é {counter}</p>
            <button onClick={increment}>+</button>
          </div>)
      }

    </div>
  );
}

export default App;
