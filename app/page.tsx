"use client";
import WeatherCardList from "@/components/WeatherCardList";
import WeatherDayCard from "@/components/WeatherDayCard";
import HeroWeatherCard from "@/components/HeroWeatherCard";
import { Input } from "antd";
import ThemeSwitcher from "@/components/ThemeSwticher";
const { Search } = Input;

export default function Home() {
  return (
    <div className="">
      <main className=" grid grid-cols-[2fr_1fr] gap-1">
        <section className="flex flex-col gap-5">
          <div className=" flex items-center">
            <Search
              placeholder="Search your city..."
              enterButton
              className="
  p-5
  [&_.ant-input]:!bg-[#EFE9E3]
  [&_.ant-input]:!bg-[var(--color-primary)]
  [&_.ant-input::placeholder]:!text-[var(--color-placeholder)]
"
            />
            <ThemeSwitcher></ThemeSwitcher>
          </div>
          <HeroWeatherCard></HeroWeatherCard>
          <WeatherDayCard type="today-forecast"></WeatherDayCard>
          <WeatherCardList></WeatherCardList>
        </section>
        <aside className="">
          <WeatherDayCard type="days-forecast"></WeatherDayCard>
        </aside>
      </main>
    </div>
  );
}
