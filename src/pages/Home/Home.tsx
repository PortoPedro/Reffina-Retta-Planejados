import { FixedTopBar } from "../components/FixedTopBar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppFixedButton } from "../components/WhatsAppFixedButton";
import { ConteConosco } from "./components/ConteConosco";
import { Diferenciais } from "./components/Diferenciais";
import { Especialidades } from "./components/Especialidades";
import { Servicos } from "./components/Servicos";
import * as styled from "./Home.styles";

export function Home() {
  return (
    <styled.HomeContainer>
      <FixedTopBar />
      <Header message="Empresa tradicional atuando em toda região metropolitana de Belo Horizonte" />
      <Especialidades />
      <Servicos />
      <ConteConosco
        title="Conte conosco!"
        description="Mudar o seu espaço pode ser um grande desafio, cheio de escolhas e detalhes. Mas com a Reffina Retta, você conta com especialistas que garantem qualidade, precisão e eficiência em cada etapa."
        subdescription="Com anos de experiência, transformamos ideias em móveis sob medida, unindo funcionalidade e design para atender às suas necessidades. Seja para sua casa ou empresa, cuidamos de cada detalhe do projeto, desde a escolha dos materiais até a montagem final, garantindo um acabamento impecável e um resultado que supera expectativas."
        // buttonLink="#"
        // buttonText="Saiba mais"
        videoSrc="./video.mp4"
      />
      <Diferenciais />
      <Footer />
      <WhatsAppFixedButton />
    </styled.HomeContainer>
  );
}

export default Home;