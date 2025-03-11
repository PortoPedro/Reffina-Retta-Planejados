import styled from "styled-components";
import { colorPalette } from "../../../utils/colors";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${colorPalette.primeira};
  color: white;
  padding: 40px 5%;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LogoSection = styled.div`
  flex: 1;

  img {
    width: 150px;
    margin-bottom: 15px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const NavSection = styled.div`
  flex: 1;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 2px;
      background-color: ${colorPalette.segunda};
      margin-top: 5px;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 5px;

      a {
        color: white;
        text-decoration: none;
        font-size: 0.9rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 768px) {
    li {
      justify-content: center;
    }
    h3 {
      &:after {
        display: none;
      }
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${colorPalette.segunda};
      margin-top: 5px;
    }
  }
`;

export const ServicesSection = styled(NavSection)``;

export const ContactSection = styled.div`
  flex: 1;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 2px;
      background-color: ${colorPalette.segunda};
      margin-top: 5px;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 0.9rem;

      svg {
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 768px) {
    li {
      justify-content: center;
    }
    h3{
      &::after {
        display: none;
      }
    }
  }
`;


export const FooterBottom = styled.div`
  margin-top: 30px;
  border-top: 1px solid ${colorPalette.segunda};
  padding-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.9rem;
  }
  @media(max-width: 768px) {
    flex-direction: column;
    gap: 5vh;
  }
`;
