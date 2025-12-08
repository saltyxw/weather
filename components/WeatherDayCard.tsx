import Image from "next/image";

function TodayForecast() {
  return (
    <section>
      <h2>Today forecast</h2>
      <article className="bg-[var(--color-primary)] rounded-2xl p-2 flex flex-col ">
        <time>10:00</time>
        <Image src="/file.svg" alt="as" width={100} height={100} />
        <p>35/18</p>
      </article>
    </section>
  );
}

function DaysForecast() {
  return (
    <section>
      <h2>7-days forecast</h2>
      <article className=" bg-[var(--color-primary)] rounded-2xl p-2">
        <time>10.02</time>
        <Image src="/file.svg" alt="as" width={100} height={100} />
        <p>35/18</p>
      </article>
    </section>
  );
}

interface WeatherDayCardProps {
  type: "today-forecast" | "days-forecast";
}

export default function WeatherDayCard({ type }: WeatherDayCardProps) {
  return (
    <>{type === "today-forecast" ? <TodayForecast /> : <DaysForecast />}</>
  );
}
