import { WeatherForecast } from "@/types/weatherData";
import Image from "next/image";
import useWeatherForecast from "@/hooks/useWeatherForecast";
import { useUserStore } from "@/store/user-store";

function TodayForecast({ forecastData }: { forecastData: WeatherForecast }) {
  const today = forecastData.forecast.forecastday[0];

  return (
    <section className="bg-[var(--color-primary)] p-3 rounded-xl overflow-x-auto ">
      <h2 className="text-xl font-semibold mb-2">Today forecast</h2>

      <h3 className="text-lg font-bold mb-2">{today.date}</h3>

      <div className="flex gap-3 ">
        {today.hour.map((h) => (
          <article
            key={h.time}
            className="flex flex-col items-center bg-[var(--color-secondary)] rounded-xl p-2 min-w-[100px]"
          >
            <time>{h.time.slice(-5)}</time>

            <Image
              src={`https:${h.condition.icon}`}
              alt="weather icon"
              width={50}
              height={50}
            />

            <p>{h.temp_c}°C</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DaysForecast({ forecastData }: { forecastData: WeatherForecast }) {
  return (
    <section className="bg-[var(--color-primary)]">
      <h2>7-days forecast</h2>
      {forecastData.forecast.forecastday.map((day) => (
        <article
          key={day.date}
          className=" flex items-center justify-between rounded-2xl p-2"
        >
          <time>{day.date}</time>
          <Image
            src={`https:${day.day.condition.icon}`}
            alt="as"
            width={100}
            height={100}
          />
          <p>
            {day.day.mintemp_c}°C/{day.day.maxtemp_c}°C
          </p>
        </article>
      ))}
    </section>
  );
}

interface WeatherDayCardProps {
  type: "today-forecast" | "days-forecast";
}

export default function WeatherDayCard({ type }: WeatherDayCardProps) {
  const selectedCity = useUserStore((state) => state.selectedCity);

  const { data: sevenDaysForecast, isLoading: isLoading7 } = useWeatherForecast(
    selectedCity,
    7
  );

  const { data: todayForecast, isLoading: isLoading1 } = useWeatherForecast(
    selectedCity,
    1
  );

  if (type === "today-forecast") {
    if (isLoading1 || !todayForecast) return <p>Loading...</p>;

    return <TodayForecast forecastData={todayForecast} />;
  }

  if (isLoading7 || !sevenDaysForecast) return <p>Loading...</p>;

  return <DaysForecast forecastData={sevenDaysForecast} />;
}
