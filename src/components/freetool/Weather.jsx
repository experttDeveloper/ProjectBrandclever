import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import '../../css/weather.css'
import moment from 'moment';

const Weather = () => {
    const [weatherData, setWeatherData] = useState("No place found.");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    const handleGetWeather = (e) => {
        e.preventDefault()
        setLoading(true); // Set loading to true before making the request

        try {
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `http://api.weatherapi.com/v1/current.json?key=08ae0627dbbd47bb8aa100624241607&q=${city}`,
                headers: {},
            };

            axios
                .request(config)
                .then((response) => {
                    setWeatherData(response.data);
                    console.log("response", response.data)
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false); // Always set loading to false when request completes
                });
        } catch (error) {
            console.log('error', error);
            setLoading(false); // Ensure loading is set to false on error
        }
    };

    return (
        <div>
            <Container >
                <form onSubmit={handleGetWeather}>
                    <TextField
                        fullWidth
                        placeholder='Enter your city...'
                        name='city'
                        label='City'
                        variant='outlined'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Button
                        className='get_weather'
                        variant='outlined'
                        onClick={handleGetWeather}
                        type='button'
                    >
                        Search
                    </Button>
                    <h1>Weather Data</h1>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <>

                            <div className='weather_main_se'>
                                <img src={weatherData.current?.condition?.icon ? weatherData.current?.condition?.icon : ""} className='weather_image' />
                                <p>{`${weatherData.current?.temp_c ? `${weatherData.current?.temp_c}°C` : ""}`}</p>
                                <div className='weather_right'>
                                    <p>{weatherData.current?.last_updated ? moment(weatherData.current?.last_updated).format('dddd, h:mm:ss a') : ""}</p>
                                    <p>{weatherData.current?.condition?.text ? weatherData.current?.condition?.text : ""}</p>

                                </div>
                            </div>
                            <pre>{JSON.stringify(weatherData, null, 2)}</pre>
                        </>
                    )}
                </form>
            </Container>
        </div>
    );
};

export default Weather;
