import WeatherCardList from "@/components/WeatherCardList";
import HeroWeatherCard from "@/components/HeroWeatherCard";
import useCurrentWeather from "@/hooks/useCurrentWeather";
import { useUserStore } from "@/store/user-store";

export default function CurrentSectionWeather() {
  const selectedCity = useUserStore((state) => state.selectedCity);

  const { data: weather } = useCurrentWeather(selectedCity);

  return (
    <>
      <HeroWeatherCard
        cityName={weather?.location.name ?? ""}
        temperature={weather?.current.temp_c ?? 0}
        weatherIcon={weather?.current.condition.icon ?? "file.svg"}
      />

      {weather?.current && <WeatherCardList currentWeather={weather.current} />}
    </>
  );
}
