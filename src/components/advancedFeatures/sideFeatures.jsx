import React from 'react'
import './sideFeatures.css'
import './countries.jsx'

const SideFeature = () => {

    const showCurrencyConverter = () => {
        const currencyConverter = document.getElementById("realCurrencyConverter");
        currencyConverter.style.opacity = "1";
    }

    return (
        <div id="sideFeatureDiv">
            <button id="currencyConverter" className='feature' onClick={showCurrencyConverter}>Currency Converter</button>
            <button id="currencyConverter1" className='feature' onClick={showCurrencyConverter}>Weight</button>
            <button id="currencyConverter2" className='feature' onClick={showCurrencyConverter}>Weather</button>
            <button id="currencyConverter3" className='feature' onClick={showCurrencyConverter}>Distance Converter</button>
            <button id="currencyConverter4" className='feature' onClick={showCurrencyConverter}>Currency Converter</button>
            <button id="currencyConverter5" className='feature' onClick={showCurrencyConverter}>Currency Converter</button>
            <button id="currencyConverter6" className='feature' onClick={showCurrencyConverter}>Currency Converter</button>
            <button id="currencyConverter7" className='feature' onClick={showCurrencyConverter}>Currency Converter</button>
        </div>

    )
}

export default SideFeature
