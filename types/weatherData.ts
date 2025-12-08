export type WeatherData = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    is_day: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    dewpoint_c: number;
    vis_km: number;
    uv: number;
  };
  condition: {
    text: string;
    icon: string;
  };
};
