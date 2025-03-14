import styled from "styled-components";
import { colorPalette } from "../../../utils/colors";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  @media(max-width: 768px) {
    padding: 100px 0;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  background-image: url("./header-background.jpg");
  background-size: cover;
  background-position: center;
  filter: grayscale(40%) brightness(60%);
  z-index: -1;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  position: relative;

  h1 {
    margin-top: 20px;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    padding: 0 20%;
  }
  @media(max-width: 768px) {
    h1 {
      margin-top: 0px;
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 0 5%;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media(max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 15px;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${colorPalette.onHover};
    border-bottom: 2px solid ${colorPalette.onHover}; 
  }
`;
