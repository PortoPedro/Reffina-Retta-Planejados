import { useNavigate } from "react-router-dom";
import { Hero } from "../Hero";
import * as styled from "./Header.styles";

export function Header(props: {message: string}) {
  const navigate = useNavigate();
  
  return (
    <styled.HeaderContainer>
      <styled.BackgroundImage />
      <styled.ContentContainer className="container">
        <Hero />
        <styled.NavBar data-aos="zoom-in" data-aos-delay="1000">
          <styled.NavItem onClick={() => navigate('/home')}>HOME</styled.NavItem>
          <styled.NavItem onClick={() => navigate('/servicos')}>SERVIÇOS</styled.NavItem>
        </styled.NavBar>
        <h1 data-aos="fade-down" data-aos-duration="2000">
          {props.message}
        </h1>
      </styled.ContentContainer>
    </styled.HeaderContainer>
  );
}

export default Header;
