import React from 'react'
import { useState } from 'react';
import './length.css';

const Length = () => {

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
    if(e.target.value === "Angstrom"){
        setMultiplier1(0.0000000000001);
    } else if(e.target.value === "Metre"){
        setMultiplier1(1000);
    } else if(e.target.value === "Kilometre"){
        setMultiplier1(1);
    } else if(e.target.value === "Mile"){
        setMultiplier1(35.274);
    } else if(e.target.value === "Inch"){
        setMultiplier1(0.0000254);
    } else if(e.target.value === "Feet"){
        setMultiplier1(0.000305);
    } else if(e.target.value === "Yard"){
        setMultiplier1(0.000914);
    }
  };

  const handleOutput = (e) => {
    if(e.target.value === "Angstrom"){
        setMultiplier2(0.0000000000001);
    } else if(e.target.value === "Metre"){
        setMultiplier2(1000);
    } else if(e.target.value === "Kilometre"){
        setMultiplier2(1);
    } else if(e.target.value === "Mile"){
        setMultiplier2(35.274);
    } else if(e.target.value === "Inch"){
        setMultiplier2(0.0000254);
    } else if(e.target.value === "Feet"){
        setMultiplier2(0.000305);
    } else if(e.target.value === "Yard"){
        setMultiplier2(0.000914);
    }
  };

  const handleBack = () => {
        document.getElementById('lengthBox').style.opacity = '0';
  };

  return (              
    <div id='lengthBox'>

        <div id='lengthHeading'>
          <h1 id='lengthTitle'>Length</h1>
          <img id='lengthBackBtn' src='\src\assets\cross.svg' alt='back' onClick={handleBack}></img>
        </div>

        <div id='inputOutput'>
          <div id='inputBox'>  
            <select name="unitsSelector" id="unitsSelector" onChange={(e) => setInitialUnit(e.target.value)} onInput={handleInput} >
                    <option key='1' value='Angstrom'>Angstrom</option>
                    <option key='2' value='Metre'>Metre</option>
                    <option key='3' value='Kilometer'>Kilometer</option>
                    <option key='4' value='Mile'>Mile</option>
                    <option key='5' value='Inch'>Inch</option>
                    <option key='6' value='Foot'>Foot</option>
                    <option key='7' value='Yard'>Yard</option>
            </select>
            <input id='inputValue' type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>

          <div id='outputBox'>        
            <select name="convertedUnitsSelector" id="convertedUnitsSelector" onChange={(e) => setFinalUnit(e.target.value)} onInput={handleOutput}>
                    <option key='8' value='Angstrom'>Angstrom</option>
                    <option key='9' value='Metre'>Metre</option>
                    <option key='10' value='Kilometer'>Kilometer</option>
                    <option key='11' value='Mile'>Mile</option>
                    <option key='12' value='Inch'>Inch</option>
                    <option key='13' value='Foot'>Foot</option>
                    <option key='14' value='Yard'>Yard</option>
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

export default Length