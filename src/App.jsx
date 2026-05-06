import { useEffect, useState, useRef } from 'react'
import './App.css'
import NumButton from './components/numbutton/numButton.jsx'
import Calcbox from './components/calcbox/calcbox.jsx'
import { evaluate } from 'mathjs';
import NumButton2 from './components/numbutton/numButton2.jsx';
import SideFeature from './components/advancedFeatures/sideFeatures.jsx';
import Countries from './components/advancedFeatures/countries.jsx';

function App() {

  let [a, setA] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {

      console.log(event.key);

      if (event.key === 'Enter') {
        setA(evaluate(a));
      } else if (event.key === 'Backspace') {
        setA(a.slice(0, -1));
      } else if (event.key === 'C') {
        setA("");
      } else if (event.key === '.') {
        setA(a + ".");
      } else if (event.key === 'Alt' || event.key === 'Control') {
        setA(a + "");
      } else{
        setA(a + event.key);
      }

      return;
    }

    window.addEventListener('keydown', handleKeyPress);

    
  }, [a]);

  return (
    <div id="app">
    
      <div id="part1">
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
            <NumButton setButtonNum={"^"} onclick={() => {setA(a + "^")}} />
            <NumButton setButtonNum={"0"} onclick={() => {setA(a + "0")}} />
            <NumButton setButtonNum={"."} onclick={() => {setA(a + ".")}} />
            <NumButton id="equalOperator" setButtonNum={"="} onclick={() => {setA(evaluate(a))}} />
          </div>
        </div>
      <Calcbox />
      </div>

      <div id="part2">
        <NumButton2 className="part2-button" setButtonNum2={"sin"} onclick={() => {setA(Math.sin(evaluate(a)*(Math.PI/180)))}} />
        <NumButton2 className="part2-button" setButtonNum2={"cos"} onclick={() => {setA(Math.cos(evaluate(a)*(Math.PI/180)))}} />
        <NumButton2 className="part2-button" setButtonNum2={"tan"} onclick={() => {setA(Math.tan(evaluate(a)*(Math.PI/180)))}} />
        <NumButton2 className="part2-button" setButtonNum2={"log"} onclick={() => {setA(Math.log10(evaluate(a)))}} />
        <NumButton2 className="part2-button" setButtonNum2={"("} onclick={() => {setA(a + "(")}} />
        <NumButton2 className="part2-button" setButtonNum2={")"} onclick={() => {setA(a + ")")}} />
        <NumButton2 className="part2-button" setButtonNum2={"ln"} onclick={() => {setA(Math.log(evaluate(a)))}} />
        <NumButton2 className="part2-button" setButtonNum2={"√"} onclick={() => {setA(Math.sqrt(evaluate(a)))}} />
        <NumButton2 className="part2-button" setButtonNum2={"e"} onclick={() => {setA(a + Math.E)}} />
        <NumButton2 className="part2-button" setButtonNum2={"π"} onclick={() => {setA(a + Math.PI)}} />
        <NumButton2 className="part2-button" setButtonNum2={"X^y"} onclick={() => {setA(a + "**")}} />
        <NumButton2 className="part2-button" setButtonNum2={"|X|"} onclick={() => {setA(Math.abs(evaluate(a)))}} />
      </div>

      <SideFeature id="sideFeatureDiv" />
      <Countries/>
    </div>
  )
}
export default App
