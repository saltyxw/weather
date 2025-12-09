import { weatherApi } from "../axios";

export default async function getCities(city: string) {
  const res = await weatherApi.get(`/search.json?q=${city}`);
  return res.data;
}
