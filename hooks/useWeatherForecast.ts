import getWeatherForecast from "@/api/weather/getWeatherForecast";
import { useQuery } from "@tanstack/react-query";
import { WeatherForecast } from "@/types/weatherData";

export default function useWeatherForecast(city: string, days: number) {
  const isCityValid = city.trim().length > 0;
  return useQuery<WeatherForecast>({
    queryKey: ["weatherForecast", city],
    queryFn: () => getWeatherForecast(city, days),
    enabled: isCityValid,
  });
}
