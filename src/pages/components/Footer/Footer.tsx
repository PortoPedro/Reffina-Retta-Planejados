import * as styled from "./Footer.styles";
import { IoMdMail as Email } from "react-icons/io";
import { IoMdPin as Place } from "react-icons/io";
import { FaWhatsapp as WhatsApp } from "react-icons/fa";
import { FaPhone as Phone } from "react-icons/fa";

export function FooterSection() {
  return (
    <styled.FooterContainer>
      <styled.ContentWrapper className="container">
        <styled.LogoSection>
          <img src="./amitran-logo.png" alt="Logo Amitran" />
          <p>
            Amitran Mudanças é uma empresa com sede própria, com moderna frota
            de caminhões e equipe altamente qualificada para atender às
            necessidades do cliente.
          </p>
        </styled.LogoSection>

        <styled.NavSection>
          <h3>Navegue</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Serviços para Mudanças</a></li>
          </ul>
        </styled.NavSection>

        <styled.ServicesSection>
          <h3>Serviços</h3>
          <ul>
            <li><a href="#residenciais">Mudanças Residenciais</a></li>
            <li><a href="#comerciais">Mudanças Comerciais</a></li>
            <li><a href="#guarda-moveis">Guarda móveis</a></li>
            <li><a href="#icamentos">Içamentos</a></li>
            <li><a href="#embalagens">Embalagens</a></li>
          </ul>
        </styled.ServicesSection>

        <styled.ContactSection>
          <h3>Contatos</h3>
          <ul>
            <li><Phone /> (31) 3491-4050</li>
            <li><WhatsApp /> (31) 99811-4511</li>
            <li><Email /> comercial@amitran.com.br</li>
            <li><Place /> R. Caldas da Rainha, 1763 - São Francisco - BH - MG</li>
          </ul>
        </styled.ContactSection>
        <styled.FooterBottom>
          <p>&copy; {new Date().getFullYear()} Amitran. Todos os direitos reservados.</p>
        </styled.FooterBottom>
          <img
            src="nog-digital.png"
            onClick={() => window.open("https://www.instagram.com/nogdigitalsites/", "_blank")}
            style={{ cursor: "pointer", width: '100px', margin: '0 auto' }}
            alt="Nog Digital"
          />
      </styled.ContentWrapper>
    </styled.FooterContainer>
  );
}

export default FooterSection;
