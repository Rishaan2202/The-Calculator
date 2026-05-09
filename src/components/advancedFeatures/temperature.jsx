import React from 'react'
import { useState } from 'react';
import './temperature.css';

const Temperature = () => {

  const [multiplier1, setMultiplier1] = useState(1);
  const [multiplier2, setMultiplier2] = useState(1);
  const [initialUnit, setInitialUnit] = useState("Metre");
  const [finalUnit, setFinalUnit] = useState("Metre");
  const [inputValue, setInputValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState(1);

  const handleConversion = () => {
      return setConvertedValue((multiplier2/multiplier1) * inputValue);
  };

  const handleInput = (e) => {
    if(e.target.value === "Celcius"){
        setMultiplier1(1);
    } else if(e.target.value === "Farhenite"){
        setMultiplier1(1000);
    } else if(e.target.value === "Kelvin"){
        setMultiplier1(1);
    }
  };

  const handleOutput = (e) => {
    if(e.target.value === "Celcius"){
        setMultiplier2(1);
    } else if(e.target.value === "Farhenite"){
        setMultiplier2(33.8);
    } else if(e.target.value === "Kelvin"){
        setMultiplier2(273.15);
    }
  };

  const handleBack = () => {
        document.getElementById('temperatureBox').style.opacity = '0';
  };

  return (              
    <div id='temperatureBox'>

        <div id='temperatureHeading'>
          <h1 id='temperatureTitle'>Temperature</h1>
          <img id='temperatureBackBtn' src='\src\assets\cross.svg' alt='back' onClick={handleBack}></img>
        </div>

        <div id='inputOutput'>
          <div id='inputBox'>  
            <select name="unitsSelector" id="unitsSelector" onChange={(e) => setInitialUnit(e.target.value)} onInput={handleInput} >
                    <option key='1' value='Celcius'>Celcius</option>
                    <option key='2' value='Farhenite'>Farhenite</option>
                    <option key='3' value='Kelvin'>Kelvin</option>
            </select>
            <input id='inputValue' type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>

          <div id='outputBox'>        
            <select name="convertedUnitsSelector" id="convertedUnitsSelector" onChange={(e) => setFinalUnit(e.target.value)} onInput={handleOutput}>
                    <option key='4' value='Celcius'>Celcius</option>
                    <option key='5' value='Farhenite'>Farhenite</option>
                    <option key='6' value='Kelvin'>Kelvin</option>
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

export default Temperature