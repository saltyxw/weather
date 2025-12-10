import { ReactNode } from "react";

interface CardProps {
  weatherInfo: number | string;
  icon?: ReactNode;
  title: string;
}

export default function WeatherCard({ weatherInfo, title, icon }: CardProps) {
  return (
    <article className="bg-[var(--color-primary)]/50  rounded-2xl w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex flex-col justify-center items-center">
      {icon}
      <p>{title}</p>
      <b className="text-4xl">{weatherInfo}</b>
    </article>
  );
}
