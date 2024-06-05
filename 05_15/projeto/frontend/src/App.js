import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Pagina } from './pages/Pagina';

function App() {
  const [pagina, setPagina] = useState("home")

  return (
    <div className="App">
      {pagina === "home" && <Pagina />}
      {pagina === "students" && <PaginaStudents />}
    </div>
  );
}

export default App;
