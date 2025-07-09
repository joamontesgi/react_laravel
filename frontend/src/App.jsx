import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([1,2,3])

function contador(){
    setCount(count+1)
}

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        
      </div>
    </>
  )
}

export default App
