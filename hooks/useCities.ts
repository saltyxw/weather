import { useQuery } from "@tanstack/react-query";
import getCities from "@/api/cities/getCities";

export function useCities(city: string) {
  const isCityValid = city.trim().length > 0;
  return useQuery({
    queryKey: ["cities", city],
    queryFn: () => getCities(city),
    enabled: isCityValid,
  });
}
