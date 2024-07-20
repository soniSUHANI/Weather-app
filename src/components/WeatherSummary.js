import { convertToFahrenheit, getWeatherTypeFromCode  } from "../weatherUtil";

const WeatherSummary = ({currentWeather: {temperature, weatherCode} ,isCelsius}) =>{
    return (
        <div>
            <h1> {isCelsius ? `${temperature} °C`: `${convertToFahrenheit(temperature)} °F`}{" "} | Thunderstorm</h1>
        </div>
    );
};

export default WeatherSummary;