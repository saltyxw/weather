import axios from "axios";

export const weatherApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEATHER_API_URL,
});

weatherApi.interceptors.request.use((config) => {
  config.params = {
    ...(config.params || {}),
    key: process.env.NEXT_PUBLIC_API_KEY,
  };
  return config;
});
