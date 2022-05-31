const url = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = 'c06516a3bb199bb320181c589f72433c'

let HttpHeaders = new Headers();

var init: RequestInit = {
    method: 'GET',
    headers: HttpHeaders,
    mode: 'cors',
    cache: 'default'
};
/**
 * Simple service to get weahter forcast from OpenWeatherAPI
 */
class WeatherService {

    /**
     * Get the weather of a city by it's name
     * @param city Where to get the forecast for
     * @returns Response of API
     */
    async getWeatherByCity(city: string) {
        return await fetch(`${url}?q=${city}&appid=${apiKey}&lang=fr&units=metric`, init).then(resp => resp.json());
    }

    /**
     * Get the weather of current location (using HTML5 navigator)
     * @param lat latitide
     * @param lon longitude
     * @returns Response of API
     */
    async getWeatherByLocation(lat: string, lon: string) {
        return await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=fr&units=metric`, init).then(resp => resp.json())
    }

}

export default Object.freeze(new WeatherService());