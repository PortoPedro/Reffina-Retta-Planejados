import { CardServicos } from "../CardServicos";
import * as styled from "./Servicos.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

const servicos = [
  {
    titulo: "Içamentos",
    imagem: "./icamentos-image.webp",
    descricao:
      "Com mais décadas de experiência no mercado, Amitran é uma empresa especializada em serviços de içamentos. Oferecendo os preços mais competitivos do mercado (...)",
    link: "#",
  },
  {
    titulo: "Guarda móveis",
    imagem: "./guarda-moveis-image.webp",
    descricao:
      "Está precisando de um espaço para guardar seus bens e não sabe onde procurar? Sua busca terminou, pois a Amitran é a (...)",
    link: "#",
  },
  {
    titulo: "Mudanças Comerciais",
    imagem: "./mudanca-comercial-image.webp",
    descricao:
      "Fazer uma mudança comercial pode ser tornar uma grande dor de cabeça se você não escolher o fornecedor correto. Você sempre deve buscar (...)",
    link: "#",
  },
  {
    titulo: "Embalagens",
    imagem: "./embalagens-image.webp",
    descricao:
      "Precisa embalar seus pertences com segurança e eficiência? Contamos com os melhores materiais e profissionais especializados para garantir a proteção total de seus itens (...)",
    link: "#",
  },
  {
    titulo: "Mudança Residencial",
    imagem: "./mudanca-residencial-image.webp",
    descricao:
      "A mudança residencial pode ser desafiadora, mas a Amitran garante uma experiência tranquila e segura. Cuidamos de todo o processo com total eficiência (...)",
    link: "#",
  },
];

export function ServicosSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <styled.ServicosContainer className="container">
      <h1>Nossos Serviços</h1>

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
