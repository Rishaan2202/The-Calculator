import React from 'react'
import { useState, useEffect } from 'react';
import './weather.css';

const Weather = () => {

    const [data, setData] = useState([])
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [temperature, setTemperature] = useState("");

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });

    async function goodWeather() {

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m`;

        try {

            const response = await fetch(url);
            const weatherData = await response.json();
            setData(weatherData);
            console.log(weatherData.current_weather.temperature);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        }

        catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    useEffect(() => {
        goodWeather();
    }, [latitude, longitude]);

    const handleBack = () => {
        document.getElementById('weatherBox').style.opacity = '0';
    };

    return (
        <div id="weatherBox">
            <div id='weatherHeading'>
                <h1 id='weatherTitle'>Weather</h1>
                <img id='backBtn' src='\src\assets\cross.svg' alt='back' onClick={handleBack}></img>
            </div>
            <div id="weatherContent">
                <h2>Temperature: {data.current_weather ? data.current_weather.temperature + "°C" : "Loading..."}</h2>
                <h2>Humidity: {data.hourly ? data.hourly.relative_humidity_2m[0] + "%" : "Loading..."}</h2>
                <h2>Wind Speed: {data.current_weather ? data.current_weather.windspeed + " km/h" : "Loading..."}</h2>
            </div>
        </div>
    )
}

export default Weather