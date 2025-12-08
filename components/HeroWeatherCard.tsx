import Image from "next/image";

export default function HeroWeatherCard() {
  return (
    <article className="flex  justify-between p-5">
      <div>
        <h2 className="text-3xl">Lviv</h2>
        <p className="text-6xl font-bold">30°</p>
      </div>
      <Image src="file.svg" alt="as" width={100} height={100} className="" />
    </article>
  );
}
