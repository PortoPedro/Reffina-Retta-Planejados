import styled from "styled-components";
import { colorPalette } from "../../../../utils/colors";
import { Paper } from "@mui/material";

export const DiferenciaisContainer = styled.div`
  width: 100%;
  padding: 70px 5%;
  background-color: ${colorPalette.white};

  .title {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    position: relative;
  }

  h1 {
    font-size: 2rem;
    color: ${colorPalette.primeira};
    font-weight: 700;
  }

  hr {
    width: 100px;
    height: 3px;
    background-color: ${colorPalette.segunda};
    border: none;
    margin: 10px 0 30px;
  }

  @media(min-width: 1760px){
    padding: 70px 0;
  }

  @media(max-width: 768px){
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const DiferencialCard = styled(Paper)`
  padding: 30px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  border-radius: 5px;

  img {
    width: 100%;
    margin-bottom: 20px;
    object-fit: contain;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: ${colorPalette.primeira};
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: ${colorPalette.regular_gray};
  }

  @media(max-width: 768px){
    h3 {
      font-size: 1.3rem;
    }
  }
`;