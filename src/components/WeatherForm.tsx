import React, { ChangeEventHandler, CSSProperties } from 'react'
import { Button } from './Button'

type WeatherFormProps = {
    city: string;
    searchLocation: ()=> void;
    handleChange: ChangeEventHandler;
    searchCity: ()=> void;
}

export const WeatherForm = ({city, searchLocation, searchCity, handleChange}:WeatherFormProps) => {
    const label : CSSProperties =  {
            fontSize : "1.25em",
            fontWeight: "bold"
        }
    
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label style={label} htmlFor="city">Entrez une ville: </label>
            <input id="city" type="text" name='city' value={city} onChange={handleChange} />
            {searchLocation && 
                <button onClick={searchLocation}><span role='img' aria-label="Geolocalisation">📍</span></button>
            }
            <Button onClick={searchCity}>Chercher</Button>
        </form>
    )
}
