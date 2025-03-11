import styled from "styled-components";
import { colorPalette } from "../../../utils/colors";

export const FixedTopBarContainer = styled.div`
  width: 100%;
  background-color: ${colorPalette.primeira};
  @media(max-width: 768px) {
    background-color: unset;
  } 
`;

export const DesktopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: ${colorPalette.white};
  height: 40px; 
  .icon-text {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    p, svg {
      font-size: 16px;
    }
  }
  @media(max-width: 768px) {
    display: none;
  } 
`;

export const MobileContainer = styled.div`
  display: none;
  .menu {
    background-color: ${colorPalette.white};
    padding: 5px;
    position: fixed;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    border-radius: 2px;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    svg {
      position: fixed;
      fill: ${colorPalette.dark_gray};
      color: ${colorPalette.dark_gray};
      font-size: 25px;
    }
  }
  @media(max-width: 768px) {
    display: flex;
  } 
`;

export const DrawerContainer = styled.div`
  width: 70vw;
  padding: 40px 0;
`;
