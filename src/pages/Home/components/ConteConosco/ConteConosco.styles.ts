import styled from "styled-components";
import { colorPalette } from "../../../../utils/colors";

export const ConteConoscoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 5%;
  background-color: ${colorPalette.primeira};

  @media (max-width: 768px) {
    padding: 15% 5%;
  }
`;

export const Video = styled.video`
  width: 50%; /* Reduz a largura proporcionalmente */
  height: auto; /* Mantém a proporção do vídeo */
  max-width: 400px; /* Define um limite máximo */
  max-height: 500px; /* Define um limite máximo */
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${colorPalette.light_gray};
  font-family: "Heebo";
  font-weight: 700;
  line-height: 24px;

  .text-content {
    max-width: 50%;
    height: 100%;
    position: relative;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  hr {
    width: 100px;
    height: 3px;
    background-color: ${colorPalette.segunda};
    border: none;
    margin: 15px 0 10px;
  }

  p {
    font-size: 1rem;
    line-height: 200%;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .conte-conosco-image {
    width: 45%;
    max-width: 500px;
    max-height: 450px;
    border-radius: 10px;
    object-fit: cover;
    object-position: top;
  }

  .saiba-mais-button {
    background-color: transparent;
    font-size: 15px;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 600;
    text-transform: none;
    width: 60%;
    color: ${colorPalette.light_gray};
    border: 1px solid ${colorPalette.light_gray};
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: ${colorPalette.segunda};
      color: ${colorPalette.light_gray};
      border: 1px solid ${colorPalette.segunda};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .text-content {
      max-width: 480px;
      align-items: center;
      justify-content: center;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    .conte-conosco-image {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid ${colorPalette.light_gray};
  color: ${colorPalette.light_gray};
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${colorPalette.light_gray};
    color: ${colorPalette.primeira};
  }
`;
