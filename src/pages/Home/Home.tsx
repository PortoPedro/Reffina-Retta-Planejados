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
      <Header message="Uma empresa tradicional atuando em toda região metropolitana de Beo Horizonte" />
      <Especialidades />
      <Servicos />
      <ConteConosco
        title="Conte conosco!"
        description="            Mudar pode ser um grande desafio, repleto de imprevistos. Mas com a Amitran, você tem a tranquilidade de contar com especialistas que garantem segurança e eficiência em cada etapa.
            Com décadas de experiência, oferecemos mudanças residenciais e comerciais com excelência, independentemente do tamanho. Cuidamos de cada detalhe para que seus pertences cheguem ao destino com total segurança."
        subdescription="            Confie em quem faz parte da história de Belo Horizonte e transforme sua mudança em uma experiência tranquila.
"
        buttonLink="#"
        buttonText="Saiba mais"
        videoSrc="./video.mp4"
      />
      <Diferenciais />
      <Footer />
      <WhatsAppFixedButton />
    </styled.HomeContainer>
  );
}

export default Home;