import getWeatherForecast from "@/api/weather/getWeatherForecast";
import { useQuery } from "@tanstack/react-query";

export default function useWeatherForecast(city: string, days: number) {
  const isCityValid = city.trim().length > 0;
  return useQuery({
    queryKey: ["weatherForecast", city],
    queryFn: () => getWeatherForecast(city, days),
    enabled: isCityValid,
  });
}
