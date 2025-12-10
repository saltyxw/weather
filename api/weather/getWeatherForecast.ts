import { weatherApi } from "../axios";

export default async function getWeatherForecast(city: string, days: number) {
  const res = await weatherApi.get(`/forecast.json?q=${city}&days=${days}`);
  return res.data;
}
