import { useState } from 'react'
import Player from "./components/Player"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Agenda from "./Agenda"

function App() {
  const [count, setCount] = useState(0)

  return (
    //<div className="App">
    //  <h1>MP3 Player</h1>
    //  <Player song={"Isto é uma música"} />
    //</div>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}>
        <Route index element={<span>Bem vindo</span>}></Route>
        <Route path="agenda/:nome" element={<Agenda/>} />
        <Route path="calendario" element={<h5>Estou no Calendario</h5>} />
      </Route>
    </Routes>
  )
}

export default App
