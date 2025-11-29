import React, { useState } from 'react';
import './style.css';

function Home() {
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);   
    const fetchWeather = (cityName) => {
        if (!cityName) return;

        const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=61762bbdcd184622c857fbff1d4053b2&units=metric`;

        fetch(apiurl)
            .then(res => res.json())
            .then(result => {
                if (result.cod === "404") {
                    alert("City Not Found!");
                    return;
                }

                setData({
                    celcius: result.main.temp,
                    name: result.name,
                    humidity: result.main.humidity + "%",
                    speed: result.wind.speed
                });
            })
            .catch(err => console.log(err));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            fetchWeather(city);
        }
    };

    return (
        <div className='container'>
            <div className="weather">
                <h1 className="heading">Temperature Checker</h1>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Enter City Name" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>

                {data && (
                    <div className="winfo">
                        <h1>{data.celcius}°C</h1>
                        <h2>{data.name}</h2>

                        <div className="details">
                            <div className="col">
                                <p>{data.humidity}</p>
                                <p>Humidity</p>
                            </div>
                            <div className="col">
                                <p>{data.speed} km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;


