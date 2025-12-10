"use client";

import { useEffect, useState } from "react";
import WeatherDayCard from "@/components/WeatherDayCard";
import CurrentSectionWeather from "@/components/CurrentWeatherSection";
import Header from "@/components/Header";
import { useUserStore } from "@/store/user-store";

export default function Home() {
  const selectedCity = useUserStore((state) => state.selectedCity);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const noCitySelected = !selectedCity || selectedCity.trim() === "";

  return (
    <div>
      <Header />

      {noCitySelected && (
        <p className="text-center mt-10 text-5xl transition-opacity duration-700">
          Search your city to get actual weather info
        </p>
      )}

      {!noCitySelected && (
        <div className="grid grid-cols-[1fr] lg:grid-cols-[2fr_1fr] gap-20 mt-10 opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <section className="flex flex-col gap-5 min-w-0">
            <CurrentSectionWeather />
          </section>
          <aside className="min-w-0">
            <WeatherDayCard type="days-forecast" />
          </aside>
        </div>
      )}
    </div>
  );
}
