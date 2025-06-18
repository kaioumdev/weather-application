import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from './context'
import ClearSkyImage from "../src/assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../src/assets/backgrounds/few-clouds.jpg";
import MistImage from "../src/assets/backgrounds/mist.jpeg";
import RainyDayImage from "../src/assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../src/assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../src/assets/backgrounds/snow.jpg";
import ThunderstormImage from "../src/assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../src/assets/backgrounds/winter.jpg";
import Header from './components/header/Header';
import WeatherBoard from './components/weather/WeatherBoard';

const Page = () => {
    const { weatherData, loading } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Clear":
                return ClearSkyImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Mist":
                return MistImage;
            case "Rain":
                return RainyDayImage;
            case "Haze":
                return FewCloudsImage;
            case "Snow":
                return SnowImage;
            case "Thunderstorm":
                return ThunderstormImage;
            case "Fog":
                return WinterImage;
            default:
                return ClearSkyImage;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateImage(bgImage);
    }, [weatherData.climate]);
    return (
        <>
            {loading?.state ? (<div className='flex bg-gray-200 rounded-md p-8 w-96 mt-14 mx-auto'><p className='text-center text-3xl text-black'>{loading.message}</p></div>) : <div style={{ backgroundImage: `url('${climateImage}')` }} className="grid place-items-center h-screen bg-no-repeat bg-cover">
                <Header></Header>
                <main>
                    <section>
                        <WeatherBoard></WeatherBoard>
                    </section>
                </main>
            </div>}
        </>
    )
}

export default Page