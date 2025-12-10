"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import useWeatherForecast from "@/hooks/useWeatherForecast";
import { useUserStore } from "@/store/user-store";

export default function SevenDaysChart() {
  const selectedCity = useUserStore((s) => s.selectedCity);
  const { data: sevenDaysForecast } = useWeatherForecast(selectedCity, 7);
  if (!sevenDaysForecast || !sevenDaysForecast.forecast?.forecastday)
    return null;

  const chartData = sevenDaysForecast.forecast.forecastday.map((day) => ({
    date: day.date,
    temp: Math.round((day.day.maxtemp_c + day.day.mintemp_c) / 2),
  }));

  return (
    <div className="w-full max-w-full md:max-w-4xl h-60 md:h-80 bg-[var(--color-primary)] p-4 md:p-8 rounded-2xl shadow-md">
      <h2 className="text-center text-sm md:text-2xl lg:text-4xl mb-3 md:mb-5">
        Average temperature per day this week
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis
            dataKey="date"
            stroke="var(--color-text)"
            tick={{ fontSize: 10 }}
            interval={0}
            angle={-30}
            textAnchor="end"
          />
          <YAxis stroke="var(--color-text)" tick={{ fontSize: 10 }} />
          <Tooltip
            formatter={(value: number) => [`${value}°C`, "Temperature"]}
            labelStyle={{ color: "var(--color-text)" }}
            contentStyle={{
              background: "var(--color-primary)",
              border: "1px solid var(--color-secondary)",
            }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#ffa500"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
