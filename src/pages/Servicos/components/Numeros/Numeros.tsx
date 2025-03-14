import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import * as styled from "./Numeros.styles";

const images = [
  "1-carrossel.jpg",
  "2-carrossel.jpg",
  "2.5-carrossel.jpg",
  "3-carrossel.jpg",
  "3.5-carrossel.jpg",
  "4-carrossel.jpg",
  "7-carrossel.jpg",
  "8-carrossel.jpg",

];

const stats = [
  { label: "Taxa de Retorno de Clientes %", value: 85 },
  { label: "Percentual de Projetos Dentro do Prazo %", value: 95 },
  { label: "Anos de Empresa", value: 20 },
  { label: "Clientes Satisfeitos com resultado", value: 800 },
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
            style={{ width: "100%", height: "100%" }}
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
          <hr />
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
