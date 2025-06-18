import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"
import WeatherProvider from './provider/WeatherProvider';
import FavouriteProvider from './provider/FavouriteProvider';
import { LocationProvider } from "./provider";
import Page from "./Page";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page></Page>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
