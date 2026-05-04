import { useEffect, useState } from 'react'
import './App.css'
import NumButton from './components/numbutton/numButton.jsx'
import Calcbox from './components/calcbox/calcbox.jsx'
import { evaluate } from 'mathjs';

function App() {

  let [a, setA] = useState("");

  useEffect(() => {
    console.log(a);
  }, [a])

  return (
    <div id="app">
    
    <div id="calcNumDiv"><h2>{a}</h2></div>
      

      <div id="allNumButtons">
        <div id="numButtons">
          <NumButton setButtonNum={"/"} onclick={() => {setA(a + "/")}} />
          <NumButton setButtonNum={"CE"} onclick={() => {setA("")}} />
          <NumButton setButtonNum={"C"} onclick={() => {setA("")}} />
          <NumButton setButtonNum={"<"} onclick={() => {setA(a.slice(0, -1))}} />
          <NumButton setButtonNum={"1"} onclick={() => {setA(a + "1")}} />
          <NumButton setButtonNum={2} onclick={() => {setA(a + "2")}} />
          <NumButton setButtonNum={3} onclick={() => {setA(a + "3")}} />
          <NumButton setButtonNum={"+"} onclick={() => {setA(a + "+")}} />
          <NumButton setButtonNum={4} onclick={() => {setA(a + "4")}} />
          <NumButton setButtonNum={5} onclick={() => {setA(a + "5")}} />
          <NumButton setButtonNum={6} onclick={() => {setA(a + "6")}} />
          <NumButton setButtonNum={"-"} onclick={() => {setA(a + "-")}} />
          <NumButton setButtonNum={7} onclick={() => {setA(a + "7")}} />
          <NumButton setButtonNum={8} onclick={() => {setA(a + "8")}} />
          <NumButton setButtonNum={9} onclick={() => {setA(a + "9")}} />
          <NumButton setButtonNum={"*"} onclick={() => {setA(a + "*")}} />
          <NumButton setButtonNum={"+/-"} onclick={() => {setA(a + "+/-")}} />
          <NumButton setButtonNum={"0"} onclick={() => {setA(a + "0")}} />
          <NumButton setButtonNum={"."} onclick={() => {setA(a + ".")}} />
          <NumButton setButtonNum={"="} onclick={() => {setA(evaluate(a))}} />
        </div>
      </div>

      <Calcbox />
    </div>
  )
}
export default App
