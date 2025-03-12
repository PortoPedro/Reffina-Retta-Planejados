import { CardServicos } from "../CardServicos";
import * as styled from "./Servicos.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

const servicos = [
  {
    titulo: "Contato",
    imagem: "./contato.png",
    descricao:
      "Entre em contato conosco! Seja por telefone, WhatsApp ou e-mail, estamos prontos para entender sua necessidade e esclarecer todas as suas dúvidas. Esse é o primeiro passo para transformar seu projeto em realidade!",
    link: "#",
  },
  {
    titulo: "Orçamento",
    imagem: "./orcamento.jpg",
    descricao:
      "Desenvolvemos um orçamento sob medida com base nas suas necessidades e preferências. Nessa etapa, analisamos detalhes como materiais, acabamentos e dimensões para oferecer a melhor solução para o seu projeto",
    link: "#",
  },
  {
    titulo: "Produção",
    imagem: "./producao.jpg",
    descricao:
      "Mãos à obra! Com materiais de alta qualidade e um trabalho minucioso, nossa equipe de especialistas inicia a fabricação do seu projeto, garantindo um acabamento impecável e um resultado duradouro.",
    link: "#",
  },
  {
    titulo: "Montagem",
    imagem: "./montagem.jpg",
    descricao:
      "Entrega e instalação com precisão! Nossa equipe cuida de cada detalhe na montagem dos móveis, garantindo que tudo fique perfeito no seu espaço. Assim, você pode aproveitar um ambiente funcional e elegante sem preocupações.",
    link: "#",
  },
];

export function ServicosSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <styled.ServicosContainer className="container">
      <h1>Processo e Serviços</h1>

      <Swiper
        spaceBetween={40}
        slidesPerView={isMobile ? 1 : 3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        modules={[Autoplay]}
        style={{ padding: "20px" }}
      >
        {servicos.map((servico, index) => (
          <SwiperSlide key={index}>
            <CardServicos {...servico} width={"100%"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </styled.ServicosContainer>
  );
}

export default ServicosSection;
