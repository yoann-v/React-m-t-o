import React from 'react'
import { Weather } from '../models/Weather'

type Props = {weather:Weather}

export const WeatherResult = (props: Props) => {

    const style = {
        card: {
            width: "40vw",
            borderRadius:'2em',
            backgroundColor: "#2a5f7e",
            boxShadow:  "20px 20px 60px #24516b, -20px -20px 60px #306d91",
            padding: "2em"
        },
        cardHeader: {

        },
        cardBody: {

        },
        flex: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: " baseline"
        }
    }

    return (
        <div style={style.card}>
            <div style={style.cardHeader}>
                <h2 style={{textAlign: 'center'}}>{props.weather.name}</h2>
                <div style={style.flex}>
                    <div>
                        {props.weather.weather[0].description} <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt={props.weather.weather[0].description} />
                    </div>
                    <div>
                        Température :{props.weather.main.temp}°C
                    </div>
                </div>
            </div>
            <hr />
            <div style={style.cardBody}>
                <p>Ressentit: {props.weather.main.feels_like}°C</p>
                <p>Min: {props.weather.main.temp_min}°C</p>
                <p>Max: {props.weather.main.temp_max}°C</p>
                <p>Humidité : <progress value={props.weather.main.humidity} max="100">{props.weather.main.humidity}</progress> {props.weather.main.humidity}%</p>
                <p>Pression: {props.weather.main.pressure}hPa</p>
            </div>
        </div>
    )
}
