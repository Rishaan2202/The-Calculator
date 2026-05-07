import React from 'react'
import { useState, useEffect } from 'react';

const Weather = () => {

    const [data, setData] = useState("")
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });

    async function weather() {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m`;
        
        try {
            const response = await fetch(url);
            const weatherData = await response.json();
            setData(weatherData);
            console.log(weatherData);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log(weatherData.current_weather.temerature);
            console.log(weatherData.current_weather.windspeed);
        }

        catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    return (
        <div>
            <h1>{data.current_weather.temperature}</h1>
            <h1>{data.current_weather.windspeed}</h1>
        </div>
    )
}

export default Weather
