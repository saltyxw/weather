"use client";
import { weatherApi } from "@/api/axios";

export default function Home() {
  async function fetchWeather(city: string) {
    const response = await weatherApi.get("/search.json", {
      params: { q: city },
    });
    console.log(response.data);
  }

  fetchWeather("Lviv");
  return (
    <div className="">
      <main className=""></main>
    </div>
  );
}
