import logo from './logo.svg';
import './App.css';
import { PixelArt } from './PixelArt';
import { Formulario } from './Formulario';

const elementos = [
  {
    href: "youtube.nz",
    label: "Lisboa",
    valor: "lisbon",
    planet: "earth",
  },
  {
    href: "pretty.af",
    label: "Maputo",
    valor: "maputo",
    planet: "earth",
  },
  {
    href: "asdijas.tw",
    label: "Damasco",
    valor: "damascus",
    planet: "earth",
  },
]

function App() {
  return (
    <div className="App">
      {/* {elementos.map((e, i) => (
        <div key={i}>
          <a>{e.label}</a>
        </div>
      ))} */}
      {/* <PixelArt /> */}
      <Formulario />
    </div>
  );
}

export default App;
