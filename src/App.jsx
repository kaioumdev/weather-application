import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"
import WeatherProvider from './provider/WeatherProvider';

function App() {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header></Header>
        <main>
          <section>
            <WeatherBoard></WeatherBoard>
          </section>
        </main>
      </div>
    </WeatherProvider>
  )
}

export default App
