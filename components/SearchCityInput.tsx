import { Input } from "antd";
const { Search } = Input;
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { City } from "@/types/cities";
import { useCities } from "@/hooks/useCities";
import { useUserStore } from "@/store/user-store";

export default function SearchCityInput() {
  const [city, setCity] = useState("");
  const debouncedSearch = useDebounce(city, 1000);
  const { data, isPending } = useCities(debouncedSearch);
  const setSelectedCity = useUserStore((state) => state.setSelectedCity);

  function selectCity(city: string) {
    setSelectedCity(city);
    setCity("");
  }
  return (
    <div className=" flex items-center relative">
      <Search
        placeholder="Search your city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        enterButton
        className="
  p-5
  [&_.ant-input]:!bg-[--color-primary]
  [&_.ant-input]:!text-[--color-text]
  [&_.ant-input::placeholder]:!text-[--color-placeholder]
"
      ></Search>
      {debouncedSearch.length > 0 &&
        !isPending &&
        (data && data.length > 0 ? (
          <div className="bg-[--color-primary] top-9 w-full absolute rounded-2xl z-100 p-2 shadow-lg ">
            {data.map((city: City) => (
              <p
                key={city.id}
                className="text-center border-b-2 border-gray-400 cursor-pointer hover:bg-gray-700/50 p-2"
                onClick={() => selectCity(city.name)}
              >
                {city.name}, {city.country}
              </p>
            ))}
          </div>
        ) : (
          <div className="bg-[--color-primary] top-9 w-full absolute rounded-2xl z-100 p-2 shadow-lg ">
            <p className="text-center p-3 text-gray-500">No results</p>
          </div>
        ))}
      {debouncedSearch.length > 0 && isPending && (
        <div className="bg-[--color-primary] top-9 w-full absolute rounded-2xl z-100 p-2 shadow-lg ">
          <p className="text-center p-3 text-gray-500">Loading...</p>
        </div>
      )}
    </div>
  );
}
