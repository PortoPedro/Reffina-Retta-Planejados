import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import * as styled from "./Numeros.styles";

const images = [
  "leidio_thor.jpeg",
  "leidio_thor.jpeg",
  "leidio_thor.jpeg",
];

const stats = [
  { label: "Entregas Realizadas", value: 60000 },
  { label: "Estados Atendidos", value: 24 },
  { label: "Anos de Empresa", value: 26 },
  { label: "Km's percorridos", value: 1000000 },
];

export function Numeros() {
  return (
    <styled.Container>
      <div className="container statistics">
        <styled.CarouselContainer>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            loop
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <styled.Image src={src} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </styled.CarouselContainer>

        <styled.StatsContainer>
          <styled.Title data-aos="zoom-out" data-aos-duration={2000}>Confie em quem tem experiência!</styled.Title>
          <hr/>
          <styled.StatsGrid>
            {stats.map((stat, index) => (
              <styled.StatItem key={index} data-aos="zoom-out" data-aos-duration={index * 1000}>
                <styled.StatValue>
                  <CountUp prefix="+" start={0} end={stat.value} duration={5} separator="." />
                </styled.StatValue>
                <styled.StatLabel>{stat.label}</styled.StatLabel>
              </styled.StatItem>
            ))}
          </styled.StatsGrid>
        </styled.StatsContainer>
      </div>
    </styled.Container>
  );
}

export default Numeros;
