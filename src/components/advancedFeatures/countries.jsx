import React, { useState, useEffect } from 'react'
import './currencyConverter.css'

const Countries = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedFlag, setSelectedFlag] = useState('US');
  const [inputCurrency, setInputCurrency] = useState('USD')
  const [outputCurrency, setOutputCurrency] = useState('INR');
  const [currencyData, setCurrencyData] = useState(null);
  const [secondValue, setSecondValue] = useState("")
  const [multiplier, setMultiplier] = useState(1);

  const currencyResponse = () => {
    return fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_CURRENCY_API}/latest/${inputCurrency}`);
  };

  useEffect(() => {
    currencyResponse()
      .then(response => response.json())
      .then(data => {
        setCurrencyData(data);
        console.log(currencyData);
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }, [inputCurrency])

  const currencies = [
    { code: "AED", flag: "AE" },
    { code: "AFN", flag: "AF" },
    { code: "ALL", flag: "AL" },
    { code: "AMD", flag: "AM" },
    { code: "ANG", flag: "AN" },
    { code: "AOA", flag: "AO" },
    { code: "ARS", flag: "AR" },
    { code: "AUD", flag: "AU" },
    { code: "AWG", flag: "AW" },
    { code: "AZN", flag: "AZ" },
    { code: "BAM", flag: "BA" },
    { code: "BBD", flag: "BB" },
    { code: "BDT", flag: "BD" },
    { code: "BGN", flag: "BG" },
    { code: "BHD", flag: "BH" },
    { code: "BIF", flag: "BI" },
    { code: "BMD", flag: "BM" },
    { code: "BND", flag: "BN" },
    { code: "BOB", flag: "BO" },
    { code: "BRL", flag: "BR" },
    { code: "BSD", flag: "BS" },
    { code: "BTN", flag: "BT" },
    { code: "BWP", flag: "BW" },
    { code: "BYN", flag: "BY" },
    { code: "BZD", flag: "BZ" },
    { code: "CAD", flag: "CA" },
    { code: "CDF", flag: "CD" },
    { code: "CHF", flag: "CH" },
    { code: "CLF", flag: "CL" },
    { code: "CLP", flag: "CL" },
    { code: "CNH", flag: "CN" },
    { code: "CNY", flag: "CN" },
    { code: "COP", flag: "CO" },
    { code: "CRC", flag: "CR" },
    { code: "CUP", flag: "CU" },
    { code: "CVE", flag: "CV" },
    { code: "CZK", flag: "CZ" },
    { code: "DJF", flag: "DJ" },
    { code: "DKK", flag: "DK" },
    { code: "DOP", flag: "DO" },
    { code: "DZD", flag: "DZ" },
    { code: "EGP", flag: "EG" },
    { code: "ERN", flag: "ER" },
    { code: "ETB", flag: "ET" },
    { code: "EUR", flag: "EU" },
    { code: "FJD", flag: "FJ" },
    { code: "FKP", flag: "FK" },
    { code: "FOK", flag: "FO" },
    { code: "GBP", flag: "GB" },
    { code: "GEL", flag: "GE" },
    { code: "GGP", flag: "GG" },
    { code: "GHS", flag: "GH" },
    { code: "GIP", flag: "GI" },
    { code: "GMD", flag: "GM" },
    { code: "GNF", flag: "GN" },
    { code: "GTQ", flag: "GT" },
    { code: "GYD", flag: "GY" },
    { code: "HKD", flag: "HK" },
    { code: "HNL", flag: "HN" },
    { code: "HRK", flag: "HR" },
    { code: "HTG", flag: "HT" },
    { code: "HUF", flag: "HU" },
    { code: "IDR", flag: "ID" },
    { code: "ILS", flag: "IL" },
    { code: "IMP", flag: "IM" },
    { code: "INR", flag: "IN" },
    { code: "IQD", flag: "IQ" },
    { code: "IRR", flag: "IR" },
    { code: "ISK", flag: "IS" },
    { code: "JEP", flag: "JE" },
    { code: "JMD", flag: "JM" },
    { code: "JOD", flag: "JO" },
    { code: "JPY", flag: "JP" },
    { code: "KES", flag: "KE" },
    { code: "KGS", flag: "KG" },
    { code: "KHR", flag: "KH" },
    { code: "KID", flag: "KI" },
    { code: "KMF", flag: "KM" },
    { code: "KRW", flag: "KR" },
    { code: "KWD", flag: "KW" },
    { code: "KYD", flag: "KY" },
    { code: "KZT", flag: "KZ" },
    { code: "LAK", flag: "LA" },
    { code: "LBP", flag: "LB" },
    { code: "LKR", flag: "LK" },
    { code: "LRD", flag: "LR" },
    { code: "LSL", flag: "LS" },
    { code: "LYD", flag: "LY" },
    { code: "MAD", flag: "MA" },
    { code: "MDL", flag: "MD" },
    { code: "MGA", flag: "MG" },
    { code: "MKD", flag: "MK" },
    { code: "MMK", flag: "MM" },
    { code: "MNT", flag: "MN" },
    { code: "MOP", flag: "MO" },
    { code: "MRU", flag: "MR" },
    { code: "MUR", flag: "MU" },
    { code: "MVR", flag: "MV" },
    { code: "MWK", flag: "MW" },
    { code: "MXN", flag: "MX" },
    { code: "MYR", flag: "MY" },
    { code: "MZN", flag: "MZ" },
    { code: "NAD", flag: "NA" },
    { code: "NGN", flag: "NG" },
    { code: "NIO", flag: "NI" },
    { code: "NOK", flag: "NO" },
    { code: "NPR", flag: "NP" },
    { code: "NZD", flag: "NZ" },
    { code: "OMR", flag: "OM" },
    { code: "PAB", flag: "PA" },
    { code: "PEN", flag: "PE" },
    { code: "PGK", flag: "PG" },
    { code: "PHP", flag: "PH" },
    { code: "PKR", flag: "PK" },
    { code: "PLN", flag: "PL" },
    { code: "PYG", flag: "PY" },
    { code: "QAR", flag: "QA" },
    { code: "RON", flag: "RO" },
    { code: "RSD", flag: "RS" },
    { code: "RUB", flag: "RU" },
    { code: "RWF", flag: "RW" },
    { code: "SAR", flag: "SA" },
    { code: "SBD", flag: "SB" },
    { code: "SCR", flag: "SC" },
    { code: "SDG", flag: "SD" },
    { code: "SEK", flag: "SE" },
    { code: "SGD", flag: "SG" },
    { code: "SHP", flag: "SH" },
    { code: "SLE", flag: "SL" },
    { code: "SLL", flag: "SL" },
    { code: "SOS", flag: "SO" },
    { code: "SRD", flag: "SR" },
    { code: "SSP", flag: "SS" },
    { code: "STN", flag: "ST" },
    { code: "SYP", flag: "SY" },
    { code: "SZL", flag: "SZ" },
    { code: "THB", flag: "TH" },
    { code: "TJS", flag: "TJ" },
    { code: "TMT", flag: "TM" },
    { code: "TND", flag: "TN" },
    { code: "TOP", flag: "TO" },
    { code: "TRY", flag: "TR" },
    { code: "TTD", flag: "TT" },
    { code: "TVD", flag: "TV" },
    { code: "TWD", flag: "TW" },
    { code: "TZS", flag: "TZ" },
    { code: "UAH", flag: "UA" },
    { code: "UGX", flag: "UG" },
    { code: "USD", flag: "US" },
    { code: "UYU", flag: "UY" },
    { code: "UZS", flag: "UZ" },
    { code: "VES", flag: "VE" },
    { code: "VND", flag: "VN" },
    { code: "VUV", flag: "VU" },
    { code: "WST", flag: "WS" },
    { code: "XAF", flag: "CM" },
    { code: "XCD", flag: "AG" },
    { code: "XCG", flag: "CW" },
    { code: "XDR", flag: "IMF" },
    { code: "XOF", flag: "BJ" },
    { code: "XPF", flag: "PF" },
    { code: "YER", flag: "YE" },
    { code: "ZAR", flag: "ZA" },
    { code: "ZMW", flag: "ZM" },
    { code: "ZWG", flag: "ZW" },
    { code: "ZWL", flag: "ZW" }
  ];

  const handleCurrencyChange = (event) => {
    setInputCurrency(event.target.value);

    const selectedCountry = currencies.find(country => country.code === event.target.value);
  }

  const handleCurrencyChange2 = (event) => {
    setOutputCurrency(event.target.value);

    setSecondValue((currencyData.conversion_rates[event.target.value]) * multiplier);

    if (secondValue) {
      console.log(secondValue);
      setSelectedFlag(secondValue.flag);
    }
  }

  const handleConvert = () => {
    document.getElementById('output').value = `${secondValue}`;
    document.getElementById('convertButton').style.animation = "rotate 0.5s ease-in-out";
  };

  return (
    <div id='realCurrencyConverter' hidden>

      <div id="realCurrency1">
        <select className='currency' name="countryPicker1" id="countryPicker1" value={inputCurrency} onChange={handleCurrencyChange}>
          {currencies.map((country) => {
            return (
              <option value={country.code} key={country.code}>
                {country.code}
              </option>
            );
          })}
        </select>
        <input type="text" value={multiplier} onChange={(e) => setMultiplier(parseFloat(e.target.value))} />
      </div>

      <div id="realCurrency2">
        <select className='currency' name="countryPicker2" id="countryPicker2" value={outputCurrency} onChange={handleCurrencyChange2}>
          {currencies.map((country) => {
            return (
              <option value={country.code} key={country.code}>
                {country.code}
              </option>
            );
          })}
        </select>
        <input type="text" id='output' readOnly value=""></input>
      </div>

      <button id="convertButton" onClick={handleConvert}>
        <img id='convertImg' src="src/assets/exchange.svg" alt="Convert" />
      </button>
    </div>
  )
}
export default Countries