import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"
import WeatherProvider from './provider/WeatherProvider';
import FavouriteProvider from './provider/FavouriteProvider';
import { LocationProvider } from "./provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="grid place-items-center h-screen">
            <Header></Header>
            <main>
              <section>
                <WeatherBoard></WeatherBoard>
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
