import React from 'react'
import './sideFeatures.css'
import './countries.jsx'

const SideFeature = () => {

    const handleIn = () => {
        const currencyConverter = document.getElementById("converterWithDiv");
        currencyConverter.style.opacity = "1";
    };

    return (
        <div id="sideFeatureDiv">
            <button id="currencyConverterBtn" className='feature' onClick={handleIn} >Currency Converter</button>
            <button id="currencyConverter1" className='feature' >Weight</button>
            <button id="currencyConverter2" className='feature' >Weather</button>
            <button id="currencyConverter3" className='feature' >Distance Converter</button>
            <button id="currencyConverter4" className='feature' >Currency Converter</button>
            <button id="currencyConverter5" className='feature' >Currency Converter</button>
            <button id="currencyConverter6" className='feature' >Currency Converter</button>
            <button id="currencyConverter7" className='feature' >Currency Converter</button>
        </div>

    )
}

export default SideFeature
