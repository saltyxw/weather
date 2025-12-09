import WeatherCard from "./WeatherCard";
import { WeatherCurrent } from "@/types/weatherData";
import {
  Wind,
  Cloud,
  LucideCloudSunRain,
  LucideCloudRainWind,
  CloudRain,
  ParkingSquareIcon,
  Radiation,
  Waypoints,
} from "lucide-react";

interface props {
  currentWeather: WeatherCurrent;
}

export default function WeatherCardList({ currentWeather }: props) {
  return (
    <section className=" rounded-2xl p-2 grid grid-cols-[repeat(2,auto)] place-items-center gap-2 ">
      <WeatherCard
        title="Wind kph"
        weatherInfo={currentWeather.wind_kph}
        icon=<Wind size={80}></Wind>
      ></WeatherCard>
      <WeatherCard
        title="Cloudness %"
        weatherInfo={currentWeather.cloud}
        icon=<Cloud size={80}></Cloud>
      ></WeatherCard>
      <WeatherCard
        title="Dewpoint C°"
        weatherInfo={currentWeather.dewpoint_c}
        icon=<LucideCloudSunRain size={80} />
      ></WeatherCard>
      <WeatherCard
        title="Humidity %"
        weatherInfo={currentWeather.humidity}
        icon=<LucideCloudRainWind size={80} />
      ></WeatherCard>
      <WeatherCard
        title="Precip mm "
        weatherInfo={currentWeather.precip_mm}
        icon=<CloudRain size={80} />
      ></WeatherCard>
      <WeatherCard
        title="Pressure mb "
        weatherInfo={currentWeather.pressure_mb}
        icon=<ParkingSquareIcon size={80} />
      ></WeatherCard>
      <WeatherCard
        title="UV Index % "
        weatherInfo={currentWeather.uv}
        icon=<Radiation size={80} />
      ></WeatherCard>
      <WeatherCard
        title="Visibillity km "
        weatherInfo={currentWeather.vis_km}
        icon=<Waypoints size={80} />
      ></WeatherCard>
    </section>
  );
}
