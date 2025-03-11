import styled from "styled-components";
import { colorPalette } from "../../../utils/colors";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 100px;
    user-select: none;
    pointer-events: none;
  }

  .cta-button {
    background-color: ${colorPalette.segunda};
    font-size: 17px;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    text-transform: none;
    color: ${colorPalette.light_gray};
    &:hover {
      background-color: ${colorPalette.light_gray};
      color: ${colorPalette.primeira};
    }
  }

  @media(max-width: 768px) {
    .cta-button {
      display: none;
    }
    .logo {
      margin: 0 auto;
    }
  }
`;
