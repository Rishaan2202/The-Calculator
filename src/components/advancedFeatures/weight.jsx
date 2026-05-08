import React from 'react'
import { useState } from 'react';
import './weight.css';

const Weight = () => {

  const [multiplier1, setMultiplier1] = useState(1);
  const [multiplier2, setMultiplier2] = useState(1);
  const [initialUnit, setInitialUnit] = useState("Kg");
  const [finalUnit, setFinalUnit] = useState("Kg");
  const [inputValue, setInputValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState(1);

  const handleConversion = () => {
      return setConvertedValue((multiplier2/multiplier1) * inputValue);
  };

  const handleInput = (e) => {
    if(e.target.value === "Kg"){
        setMultiplier1(1);
    } else if(e.target.value === "g"){
        setMultiplier1(1000);
    } else if(e.target.value === "Lb"){
        setMultiplier1(2.20462);
    } else if(e.target.value === "Oz"){
        setMultiplier1(35.274);
    }
  };

  const handleOutput = (e) => {
    if(e.target.value === "Kg"){
        setMultiplier2(1);
    } else if(e.target.value === "g"){
        setMultiplier2(1000);
    } else if(e.target.value === "Lb"){
        setMultiplier2(2.20462);
    } else if(e.target.value === "Oz"){
        setMultiplier2(35.274);
    }
  };

  const handleBack = () => {
        document.getElementById('weightBox').style.opacity = '0';
  };

  return (              
    <div id='weightBox'>

        <div id='weightHeading'>
          <h1 id='weightTitle'>Weight and Mass</h1>
          <img id='weightBackBtn' src='\src\assets\cross.svg' alt='back' onClick={handleBack}></img>
        </div>

        <div id='inputOutput'>
          <div id='inputBox'>  
            <select name="unitsSelector" id="unitsSelector" onChange={(e) => setInitialUnit(e.target.value)} onInput={handleInput} >
                    <option key='1' value='Kg'>Kg</option>
                    <option key='2' value='g'>g</option>
                    <option key='3' value='Lb'>Lb</option>
                    <option key='4' value='Oz'>Oz</option>
            </select>
            <input id='inputValue' type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>

          <div id='outputBox'>        
            <select name="convertedUnitsSelector" id="convertedUnitsSelector" onChange={(e) => setFinalUnit(e.target.value)} onInput={handleOutput}>
                    <option key='5' value='Kg'>Kg</option>
                    <option key='6' value='g'>g</option>
                    <option key='7' value='Lb'>Lb</option>
                    <option key='8' value='Oz'>Oz</option>
            </select>
            <input id='outputValue' type="number" value={convertedValue} readOnly />
          </div>
        </div>

        <button id='convertBtn' onClick={handleConversion}>
          <img id='convertImg' src="src/assets/exchange.svg" alt="Convert" />
        </button>
    </div>
  )
}

export default Weight