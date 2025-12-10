"use client";
import WeatherCardList from "@/components/WeatherCardList";
import WeatherDayCard from "@/components/WeatherDayCard";
import HeroWeatherCard from "@/components/HeroWeatherCard";
import { Input } from "antd";
import ThemeSwitcher from "@/components/ThemeSwticher";
import { useCities } from "@/hooks/useCities";
import { useState } from "react";
const { Search } = Input;
import useDebounce from "@/hooks/useDebounce";
import { City } from "@/types/cities";
import useCurrentWeather from "@/hooks/useCurrentWeather";
import useWeatherForecast from "@/hooks/useWeatherForecast";

export default function Home() {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const debouncedSearch = useDebounce(city, 1000);
  const { data, isPending, error } = useCities(debouncedSearch);
  const {
    data: weather,
    isLoading,
    error: err,
  } = useCurrentWeather(selectedCity);
  const { data: sevenDaysForecast } = useWeatherForecast(selectedCity, 7);
  const { data: todayForecast } = useWeatherForecast(selectedCity, 1);

  function selectCity(city: string) {
    setSelectedCity(city);
    setCity("");
  }
  return (
    <div className="">
      <main className=" grid grid-cols-[2fr_1fr] gap-1 ">
        <section className="flex flex-col gap-5 min-w-0">
          <div className=" flex items-center relative">
            <Search
              placeholder="Search your city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              enterButton
              className="
  p-5
  [&_.ant-input]:!bg-[var(--color-primary)]
  [&_.ant-input]:!text-[var(--color-text)]
  [&_.ant-input::placeholder]:!text-[var(--color-placeholder)]
"
            ></Search>
            {debouncedSearch.length > 0 &&
              !isPending &&
              (data && data.length > 0 ? (
                <div className="bg-[var(--color-primary)] top-9 w-full absolute rounded-2xl z-100 p-2 shadow-lg ">
                  {data.map((city: City) => (
                    <p
                      key={city.id}
                      className="text-center border-b-2 border-gray-400 cursor-pointer hover:bg-gray-700/50 p-2"
                      onClick={() => selectCity(city.name)}
                    >
                      {city.name}, {city.country}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="bg-[var(--color-primary)] top-9 w-full absolute rounded-2xl z-100 p-2 shadow-lg ">
                  <p className="text-center p-3 text-gray-500">No results</p>
                </div>
              ))}
            {debouncedSearch.length > 0 && isPending && (
              <div className="bg-[var(--color-primary)] top-9 w-full absolute rounded-2xl z-100 p-2 shadow-lg ">
                <p className="text-center p-3 text-gray-500">Loading...</p>
              </div>
            )}
            <ThemeSwitcher></ThemeSwitcher>
          </div>
          <HeroWeatherCard
            cityName={weather?.location.name ?? ""}
            temperature={weather?.current.temp_c ?? 0}
            weatherIcon={weather?.current.condition.icon ?? "file.svg"}
          ></HeroWeatherCard>
          {todayForecast && (
            <WeatherDayCard
              type="today-forecast"
              forecastData={todayForecast}
            ></WeatherDayCard>
          )}
          {weather?.current && (
            <WeatherCardList currentWeather={weather.current}></WeatherCardList>
          )}
        </section>
        <aside className="min-w-0">
          {sevenDaysForecast && (
            <WeatherDayCard
              type="days-forecast"
              forecastData={sevenDaysForecast}
            ></WeatherDayCard>
          )}
        </aside>
      </main>
    </div>
  );
}
