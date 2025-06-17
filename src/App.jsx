import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"
import WeatherProvider from './provider/WeatherProvider';
import FavouriteProvider from './provider/FavouriteProvider';

function App() {
  return (
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
  )
}

export default App
