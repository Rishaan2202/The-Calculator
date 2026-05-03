import { useState } from 'react'
import './App.css'
import NumButton from './components/numbutton/numButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="numButtons">
        <NumButton/>
        <NumButton/>
        <NumButton/>
        <NumButton/>
        <NumButton/>
        <NumButton/>
        <NumButton/>
        <NumButton/>
        <NumButton/>
        <NumButton/>
      </div>
      
      <body>
        <h1>Calculator</h1>
      </body>
    </>
  )
}

export default App
