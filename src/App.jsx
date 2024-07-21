import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Components from "./Components/Components"


function App() {
 
  const [showbtn, setShowbtn]= useState(true)
  const [color,setColor] = useState(0)
  
  const handler = ()=>{
    setColor(color+1)
  }
  
  return (
    <>
    <Components color={color}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          toggle button
        </button>
        <button onClick={handler}>clickz</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        {showbtn?<button>it shows when it is true</button>:<button>it shows when it is false</button>}
        
      </p>
    </>
  )
}

export default App
