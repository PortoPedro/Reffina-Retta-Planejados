import styled from "styled-components";
import { colorPalette } from "../../../../utils/colors";

export const EspecialidadesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: ${colorPalette.primeira};
  padding: 70px 5%;
  @media(max-width: 768px) {
    padding: 15% 5%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  color: ${colorPalette.light_gray};
  font-family: "Heebo";
  font-weight: 700;
  line-height: 24px;

  .text-content {
    max-width: 45%;
  }

  h2 {
    margin-top: 10px;
    font-size: 2rem;
    margin-bottom: 15px;
  }

  span{
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    line-height: 40px;
  }

  p {
    font-size: 1.5rem;
    margin-top: 10%;
    line-height: 30px;
  }

  hr {
    width: 100px;
    height: 3px;
    background-color: ${colorPalette.segunda};
    border: none;
    margin: 15px 0 10px;
  }

  .especialidades-image {
    width: 50%;
    max-width: 550px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 1.5rem;
    }
    span, p{
      font-size: 1.2rem;
    }
    .text-content {
      max-width: 480px;
      margin-bottom: 20px;
    }
    .especialidades-image {
      width: 100%;
      margin: 0 auto;
    }
  }
`;
