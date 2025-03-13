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
          <img src="./Reffina-logo-branco.png" alt="Logo Reffina" />
          <p>
            Reffina Retta é uma marcenaria tradicional e familiar, com 20 anos de experiência, unindo qualidade artesanal e inovação. Contamos com uma equipe especializada e infraestrutura completa para transformar cada projeto em realidade com excelência.
          </p>
        </styled.LogoSection>

        <styled.NavSection>
          <h3>Navegue</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Processo</a></li>
          </ul>
        </styled.NavSection>

        <styled.ServicesSection>
          <h3>Móveis para :</h3>
          <ul>
            <li><a href="#Cozinha">Cozinha</a></li>
            <li><a href="#Quarto">Quarto</a></li>
            <li><a href="#Banheiro">Banheiro</a></li>
            <li><a href="#Sala de TV e jantar">Sala de TV e jantar</a></li>
            <li><a href="#Cômodos diversos/outros">Cômodos diversos/outros</a></li>
          </ul>
        </styled.ServicesSection>

        <styled.ContactSection>
          <h3>Contatos</h3>
          <ul>
            <li><Phone /> (31) 99955-0809</li>
            <li><WhatsApp /> (31) 99955-0808</li>
            <li><Email /> alberto@reffina.com.br</li>
            <li><Place /> R. Estrela Dione, 175 - Jardim Riacho das Pedras - BH - MG</li>
          </ul>
        </styled.ContactSection>
        <styled.FooterBottom>
          <p>&copy; {new Date().getFullYear()} Reffina. Todos os direitos reservados.</p>
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
