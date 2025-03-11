import styled from "styled-components";
import { colorPalette } from "../../../../utils/colors";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 560px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 32px;

  .card-button {
    background-color: ${colorPalette.white};
    font-size: 15px;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 600;
    text-transform: none;
    width: 60%;
    color: ${colorPalette.primeira};
    border: 1px solid ${colorPalette.primeira};
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: ${colorPalette.segunda};
      color: ${colorPalette.light_gray};
      border: 1px solid ${colorPalette.segunda};
    }
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  width: 100%;
  text-align: left;
  color: ${colorPalette.primeira};
  margin: 8px 0;
`;

export const Description = styled.p`
  font-size: 15px;
  width: 100%;
  max-height: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: none;
  line-height: 25.5px;
  font-weight: 400;
  color: ${colorPalette.regular_gray};
  margin: 8px 0 16px;
`;
