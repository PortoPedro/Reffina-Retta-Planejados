import styled from "styled-components";
import { colorPalette } from "../../../../utils/colors";
import "swiper/swiper-bundle.css";

export const ServicosContainer = styled.div`
  width: 100%;
  padding: 70px 5%;
  text-align: left;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: ${colorPalette.primeira};
    margin-bottom: 42px;
    position: relative;
    width: 100%;

    &::after {
      content: "";
      display: flex;
      position: absolute;
      width: 100px;
      height: 3px;
      left: 0;
      margin: 10px 0;
      background-color: ${colorPalette.segunda};
    }
  }

  @media(min-width: 1760px){
    padding: 70px 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4%;
  flex: 1;
  margin-top: 20px;
  padding: 20px;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  overflow: hidden;

  .swiper {
    padding-bottom: 20px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;
