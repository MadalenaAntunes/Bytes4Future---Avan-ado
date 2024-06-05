import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const options = { method: "GET" }
fetch("/api/counter", options)

function App() {
  const [counter, setCounter] = useState()

  const increment = async () => {
    const res = await fetch("/api/counter/increment", { method: "POST" })
    if (res.status === 201) {
      const body = await res.json()
      setCounter(body.number)
    }
  }

  const decrement = async () => {
    const res = await fetch("/api/counter/decrement", { method: "POST" })
    if (res.status === 201) {
      const body = await res.json()
      setCounter(body.number)
    }
  }

  const reset = async () => {
    const res = await fetch("/api/counter/reset", { method: "POST" })
    if (res.status === 201) {
      const body = await res.json()
      setCounter(body.number)
    }
  }

  //Quando o componente é montado cria esta função:
  useEffect(() => {
    //Carregar valores
    async function fetchData() { 
      const res = await fetch("api/counter", { method: "GET" }) 
      console.log(res.status)
      const body = await res.json()
      console.log(body)
      setCounter(body.number)
    }

    fetchData()
    reset()

    //Guardar em state
  }, [])
  return (
    <div className="App">
      {
        counter === undefined ?
          (<p>Loading screen...</p>) :
          (<div className='main'>
            <p style={{fontSize: "32px"}}>VALOR é {counter}</p>
            <div className='botoes'>
            <button style={{border: "none", borderRadius: "5px", width: "50px", marginRight: "3px"}} onClick={increment}>+</button>
            <button style={{border: "none", borderRadius: "5px", width: "75px", marginLeft: "3px", fontSize: "12px"}} onClick={reset}>RESET</button>
            <button style={{border: "none", borderRadius: "5px", width: "50px", marginLeft: "3px"}} onClick={decrement}>-</button>
            </div>
          </div>)
      }

    </div>
  );
}

export default App;
