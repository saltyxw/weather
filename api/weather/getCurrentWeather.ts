import { weatherApi } from "../axios";

export default async function getCurrentWeather(city: string) {
  const res = await weatherApi.get(`/current.json?q=${city}`);
  return res.data;
}
