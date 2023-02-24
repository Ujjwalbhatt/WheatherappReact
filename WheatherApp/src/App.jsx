import { useState } from 'react'
import TempApp from './Components/TempApp'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <TempApp/>
  )
}

export default App
