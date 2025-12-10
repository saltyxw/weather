"use client";
import WeatherDayCard from "@/components/WeatherDayCard";
import ThemeSwitcher from "@/components/ThemeSwticher";
import SearchCityInput from "@/components/SearchCityInput";
import CurrentSectionWeather from "@/components/CurrentWeatherSection";

export default function Home() {
  return (
    <div className="">
      <main className=" grid grid-cols-[2fr_1fr] gap-1 ">
        <SearchCityInput></SearchCityInput>
        <section className="flex flex-col gap-5 min-w-0">
          <CurrentSectionWeather></CurrentSectionWeather>
          <WeatherDayCard type="today-forecast"></WeatherDayCard>
        </section>
        <aside className="min-w-0">
          <WeatherDayCard type="days-forecast"></WeatherDayCard>
        </aside>
      </main>
    </div>
  );
}
