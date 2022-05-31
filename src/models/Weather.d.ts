export interface Weather {
    coord: Coord;
    weather: WeatherInfo[];
    base: string;
    main: WeatherMain;
    visibility: number;
    wind: Wind;
    clouds: Cloud;
    dt: number;
    sys: Sys;
    timezone: number;
    id:number;
    name: string;
    cod: number;
}

interface Coord{
    lon: number;
    lat: number;
}

interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface WeatherMain{
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

interface Wind {
    speed: number;
    deg: number;
}

interface Cloud { all: number}

interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}