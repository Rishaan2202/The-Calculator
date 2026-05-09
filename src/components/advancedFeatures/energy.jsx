import React from 'react'
import { useState } from 'react';
import './energy.css';

const Energy = () => {

  const [multiplier1, setMultiplier1] = useState(1);
  const [multiplier2, setMultiplier2] = useState(1);
  const [initialUnit, setInitialUnit] = useState("Electron-Volt");
  const [finalUnit, setFinalUnit] = useState("Electron-Volt");
  const [inputValue, setInputValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState(1);

  const handleConversion = () => {
      return setConvertedValue((multiplier2/multiplier1) * inputValue);
  };

  const handleInput = (e) => {
    if(e.target.value === "Electron-Volt"){
        setMultiplier1(0.0000000000000000001602177);
    } else if(e.target.value === "Joule"){
        setMultiplier1(1);
    } else if(e.target.value === "Kilocalorie"){
        setMultiplier1(4184);
    } else if(e.target.value === "Calorie"){
        setMultiplier1(4.184);
    } else if(e.target.value === "Watt-Hour"){
        setMultiplier1(3600);
    } else if(e.target.value === "Kilowatt-Hour"){
        setMultiplier1(3600000);
    }
  };

  const handleOutput = (e) => {
    if(e.target.value === "Electron-Volt"){
        setMultiplier2(0.0000000000000000001602177);
    } else if(e.target.value === "Joule"){
        setMultiplier2(1);
    } else if(e.target.value === "Kilocalorie"){
        setMultiplier2(4184);
    } else if(e.target.value === "Calorie"){
        setMultiplier2(4.184);
    } else if(e.target.value === "Watt-Hour"){
        setMultiplier2(3600);
    } else if(e.target.value === "Kilowatt-Hour"){
        setMultiplier2(3600000);
    }
  };

  const handleBack = () => {
        document.getElementById('energyBox').style.opacity = '0';
  };

  return (              
    <div id='energyBox'>

        <div id='energyHeading'>
          <h1 id='energyTitle'>Energy</h1>
          <img id='energyBackBtn' src='\src\assets\cross.svg' alt='back' onClick={handleBack}></img>
        </div>

        <div id='inputOutput'>
          <div id='inputBox'>  
            <select name="unitsSelector" id="unitsSelector" onChange={(e) => setInitialUnit(e.target.value)} onInput={handleInput} >
                    <option key='1' value='Electron-Volt'>Electron Volt</option>
                    <option key='2' value='Joule'>Joule</option>
                    <option key='3' value='Kilocalorie'>Kilocalorie</option>
                    <option key='4' value='Calorie'>Calorie</option>
                    <option key='5' value='Watt-Hour'>Watt-Hour</option>
                    <option key='6' value='Kilowatt-Hour'>Kilowatt-Hour</option>
            </select>
            <input id='inputValue' type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>

          <div id='outputBox'>        
            <select name="convertedUnitsSelector" id="convertedUnitsSelector" onChange={(e) => setFinalUnit(e.target.value)} onInput={handleOutput}>
                    <option key='8' value='Electron-Volt'>Electron Volt</option>
                    <option key='9' value='Joule'>Joule</option>
                    <option key='10' value='Kilocalorie'>Kilocalorie</option>
                    <option key='11' value='Calorie'>Calorie</option>
                    <option key='12' value='Watt-Hour'>Watt-Hour</option>
                    <option key='13' value='Kilowatt-Hour'>Kilowatt-Hour</option>
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

export default Energy