import React, {useEffect, useState} from 'react';
import {RequestError} from './RequestError/RequestError';
import {Loader} from './Loader/Loader';
import '../../App.css';

const WeatherDisplay = ({activeCity, weatherDataByGeo=null}) => {

    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    const fetchData = (activeCity) => {
        const APPID = 'ef598dd48091a3a2eb6a63ef6c4d75b2'
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${activeCity}&units=metric&lang=ru&APPID=${APPID}`;

        setLoading(true)

        fetch(URL).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw response.status
            }
        })
            .then(data => {
                setWeatherData(data)
                setLoading(false)
                setErr(null)
            })
            .catch(err => {
                console.warn('Данные не были получены, ошибка: ' + err);
                setErr(err)
            })
    }

    //componentDidMouth

    useEffect(() => {
        if (weatherDataByGeo) {
            setWeatherData(weatherDataByGeo)
            setLoading(false)
        } else {
            fetchData(activeCity)
        }
    }, [])

    useEffect(() => {
        fetchData(activeCity)
    }, [activeCity])

    useEffect(() => {
        setWeatherData(weatherDataByGeo)
        setLoading(false)
    }, [weatherDataByGeo])


    const weather = weatherData.weather[0];
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.icon}.png`;

    return (
        <>
            {
                err ? <RequestError errStatus={err} activeCity={activeCity}/>
                    : loading ? <Loader/>
                        :  <div className="weather-display">
                <h2 className="city-status">
                    {`${weather.main} in ${weatherData.name}`}
                    <img
                        src={weatherIcon}
                        alt={weather.description}
                        title={weather.description}/>
                </h2>
                <div className="weather-info">
                    <p className="weather-info__item">Температура: {weatherData.main.temp}°</p>
                    <p className="weather-info__item">По ощущению: {weatherData.main.feels_like}°</p>
                    <p className="weather-info__item">Ветер: {weatherData.wind.speed} м/с</p>
                    <p className="weather-info__item">Статус: {weather.description}</p>
                    <p className="weather-info__item">Давление: {
                        /*перевод давления из атм в мм.рт.ст*/
                        (weatherData.main.pressure * 0.75006375541921).toFixed(2)
                    } мм рт. ст.</p>
                    <p className="weather-info__item">Влажность: {weatherData.main.humidity}%</p>
                    <p className="weather-info__item">Координаты: {`[${weatherData.coord.lat}, ${weatherData.coord.lon}]; ${weatherData.sys.country}`}</p>
                </div>
            </div>
            }
        </>
    )
};

export default WeatherDisplay;