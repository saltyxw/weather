import getCurrentWeather from "@/api/weather/getCurrentWeather";
import { WeatherData } from "@/types/weatherData";
import { useQuery } from "@tanstack/react-query";

export default function useCurrentWeather(city: string) {
  const isCityValid = city.trim().length > 0;
  return useQuery<WeatherData>({
    queryKey: ["currentWeather", city],
    queryFn: () => getCurrentWeather(city),
    enabled: isCityValid,
  });
}
