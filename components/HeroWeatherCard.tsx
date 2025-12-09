import Image from "next/image";

interface Props {
  cityName: string;
  temperature: number;
  weatherIcon: string;
}

export default function HeroWeatherCard({
  cityName,
  temperature,
  weatherIcon,
}: Props) {
  return (
    <article className="flex  justify-between p-5">
      <div>
        <h2 className="text-3xl">{cityName}</h2>
        <p className="text-6xl font-bold">{temperature}°</p>
      </div>
      <Image
        src={`https:${weatherIcon}`}
        alt="as"
        width={100}
        height={100}
        className=""
      />
    </article>
  );
}
