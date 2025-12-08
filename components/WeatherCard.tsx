import { ReactNode } from "react";

interface CardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

export default function WeatherCard({ title, value, icon }: CardProps) {
  return (
    <article>
      <p>{title}</p>
      <b>{value}</b>
    </article>
  );
}
