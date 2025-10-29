import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/radha-kotecha" element={() => (<div>Radha Kotecha</div>)} />
      </Routes>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
