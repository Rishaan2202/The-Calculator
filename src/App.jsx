import { useState } from 'react'
import './App.css'
import NumButton from './components/numbutton/numButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>     
      <h1>Calculator</h1>

      <div id="allNumButtons">
        <div id="numButtons">
          <NumButton setButtonNum={1} />
          <NumButton setButtonNum={2} />
          <NumButton setButtonNum={3} />
          <NumButton setButtonNum={4} />
          <NumButton setButtonNum={5} />
          <NumButton setButtonNum={6} />
          <NumButton setButtonNum={7} />
          <NumButton setButtonNum={8} />
          <NumButton setButtonNum={9} />
        </div>
        
        <div id="zeroB">
          <NumButton setButtonNum={0} />
        </div>
      </div>
    </body>
  )
}

export default App
