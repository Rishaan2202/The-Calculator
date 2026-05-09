import React from 'react'
import './sideFeatures.css'
import './countries.jsx'
import './length.jsx'
import './temperature.jsx'
import './weight.jsx'
import './weather.jsx'
import { useEffect, useState } from 'react'

const SideFeature = () => {

    useEffect(() => {
      const currencyConverter = document.getElementById("converterWithDiv");
      const weatherBox = document.getElementById("weatherBox");
      const weightBox = document.getElementById("weightBox");
      const lengthBox = document.getElementById("lengthBox");
      const temperatureBox = document.getElementById("temperatureBox");
      const energyBox = document.getElementById("energyBox");

      return () => {
        currencyConverter.style.zIndex = "-1";
        weatherBox.style.zIndex = "-1";
        weightBox.style.zIndex = "-1";
        lengthBox.style.zIndex = "-1";
        temperatureBox.style.zIndex = "-1";
        energyBox.style.zIndex = "-1";
      }
    }, [])
    

    const handleCurrencyIn = () => {
        const currencyConverter = document.getElementById("converterWithDiv");
        currencyConverter.style.opacity = "1";
        currencyConverter.style.zIndex = "2";
    };

    const handleWeatherIn = () => {
        const weatherBox = document.getElementById("weatherBox");
        weatherBox.style.opacity = "1";
        weatherBox.style.zIndex = "2";
    };

    const handleWeightIn = () => {
        const weightBox = document.getElementById("weightBox");
        weightBox.style.opacity = "1";
        weightBox.style.zIndex = "2";
    };

    const handleLengthIn = () => {
        const lengthBox = document.getElementById("lengthBox");
        lengthBox.style.opacity = "1";
        lengthBox.style.zIndex = "2";
    };

    const handleTemperatureIn = () => {
        const temperatureBox = document.getElementById("temperatureBox");
        temperatureBox.style.opacity = "1";
        temperatureBox.style.zIndex = "2";
    };

    const handleEnergyIn = () => {
        const energyBox = document.getElementById("energyBox");
        energyBox.style.opacity = "1";
        energyBox.style.zIndex = "2";
    };

    return (
        <div id="sideFeatureDiv">
            <button id="currencyConverterBtn" className='feature' onClick={handleCurrencyIn} >Currency Converter</button>
            <button id="currencyConverter1" className='feature' onClick={handleWeatherIn} >Weather</button>
            <button id="currencyConverter2" className='feature' onClick={handleWeightIn} >Weight and Mass</button>
            <button id="currencyConverter3" className='feature' onClick={handleLengthIn} >Length</button>
            <button id="currencyConverter4" className='feature' onClick={handleTemperatureIn} >Temperature</button>
            <button id="currencyConverter5" className='feature' onClick={handleEnergyIn} >Energy</button>
        </div>

    )
}

export default SideFeature
