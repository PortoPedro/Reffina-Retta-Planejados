import * as styled from "./Hero.styles";
import Button from "@mui/material/Button";

export function Hero() {
  return (
    <styled.HeroContainer>
      <styled.ContentContainer className="container">
        <img src="./Reffina-logo.png" alt="Reffina Retta" className="logo" />
        <Button variant="contained" color="primary" className="cta-button" onClick={() => window.open("https://wa.me/5531999550808", "_blank")}>
          Fale com a Reffina
        </Button>
      </styled.ContentContainer>
    </styled.HeroContainer>
  );
}

export default Hero;
