import React, { useEffect } from 'react'
import './currencyConverter.css'
import { useState } from 'react';

const CurrencyConverter = () => {

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_CURRENCY_API}/latest/USD`)  
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching exchange rates:', error));
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default CurrencyConverter
