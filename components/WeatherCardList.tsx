import WeatherCard from "./WeatherCard";
import { Row, Col } from "antd";

export default function WeatherCardList() {
  return (
    <section className="bg-[var(--color-primary)] rounded-2xl p-2 ">
      <Row gutter={[24, 40]}>
        <Col xs={24} sm={12}>
          <WeatherCard title="das" value="asdas"></WeatherCard>
        </Col>
        <Col xs={24} sm={12}>
          <WeatherCard title="das" value="asdas"></WeatherCard>
        </Col>
        <Col xs={24} sm={12}>
          <WeatherCard title="das" value="asdas"></WeatherCard>
        </Col>
        <Col xs={24} sm={12}>
          <WeatherCard title="das" value="asdas"></WeatherCard>
        </Col>
      </Row>
    </section>
  );
}
