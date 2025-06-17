import { useState } from "react"

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: '',
        climate: '',
        temperature: '',
        maxTemperature: '',
        minTemperature: '',
        humidity: '',
        cloudPercentage: '',
        wind: '',
        time: '',
        longitude: '',
        latitude: '',

    });
    const [isLoading, setIsLoading] = useState({
        state: false,
        message: ""
    });
    const [error, setError] = useState(null);

}