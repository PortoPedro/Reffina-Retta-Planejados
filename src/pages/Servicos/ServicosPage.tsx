import { FixedTopBar } from "../components/FixedTopBar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppFixedButton } from "../components/WhatsAppFixedButton";
import { Numeros } from "./components/Numeros";
import { ProcessFlow } from "./components/ProcessFlow";
import * as styled from "./ServicosPage.styles";

export function ServicosPage() {
  return (
    <styled.ServicosPageContainer>
      <FixedTopBar />
      <Header message="Conte com uma empresa com mais de 50 anos de experiência!"/>
      <Numeros />
      <ProcessFlow />
      <Footer />
      <WhatsAppFixedButton />
    </styled.ServicosPageContainer>
  );
}

export default ServicosPage;