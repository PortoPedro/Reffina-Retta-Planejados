import { FixedTopBar } from "../components/FixedTopBar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IgFixedButton } from "../components/IgFixedButton";
import { WhatsAppFixedButton } from "../components/WhatsAppFixedButton";
import { Numeros } from "./components/Numeros";
import { ProcessFlow } from "./components/ProcessFlow";
import * as styled from "./ServicosPage.styles";

export function ServicosPage() {
  return (
    <styled.ServicosPageContainer>
      <FixedTopBar />
      <Header message="Conte com uma empresa com mais de 20 anos de experiência!" />
      <Numeros />
      <ProcessFlow />
      <Footer />
      <IgFixedButton profileUrl="https://www.instagram.com/reffina_retta/" />
      <WhatsAppFixedButton />
    </styled.ServicosPageContainer>
  );
}

export default ServicosPage;