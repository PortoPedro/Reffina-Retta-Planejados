import * as styled from "./Hero.styles";
import Button from "@mui/material/Button";

export function Hero() {
  return (
    <styled.HeroContainer>
      <styled.ContentContainer className="container">
        <img src="./amitran-logo.png" alt="Amitran Mudanças" className="logo" />
        <Button variant="contained" color="primary" className="cta-button">
          Fale com a Amitran
        </Button>
      </styled.ContentContainer>
    </styled.HeroContainer>
  );
}

export default Hero;
