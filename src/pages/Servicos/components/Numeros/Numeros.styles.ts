import styled from "styled-components";
import "swiper/swiper-bundle.css";
import { colorPalette } from "../../../../utils/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 5%;
  max-width: 100%;
  width: 100%;
  
  .statistics {
    align-items: center;
    justify-content: center;
    gap: 40px;
    display: flex;
  }

  @media (max-width: 768px) {
    .statistics {
      flex-direction: column-reverse;
      max-width: 100%;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 50%;
  max-width: 600px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max width: 90%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;

  hr {
    width: 100px;
    height: 3px;
    background-color: ${colorPalette.segunda};
    border: none;
    margin: 0px 0 10px;
  }

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    hr {
      display: none;
    }
  }
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: ${colorPalette.primeira};
    text-align: center; 
    word-wrap: break-word; 
    word-break: break-word; 

    @media (max-width: 768px) {
        font-size: 1.5rem; 
        padding: 0 15px; 
    }
`;

export const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 20px;
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const StatValue = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: gray;
  text-align: center;
`;
