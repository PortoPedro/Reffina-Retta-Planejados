import styled from "styled-components";
import { colorPalette } from "../../../../utils/colors";

export const ProcessContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 70px 5%;
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  max-width: 120px;
  text-align: center;
`;

export const StepCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colorPalette.segunda};
  color: ${colorPalette.light_gray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const StepTitle = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
`;

export const StepDescription = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: ${colorPalette.dark_gray};
`;

export const StepConnector = styled.div`
  width: 2px;
  height: 30px;
  background-color: ${colorPalette.segunda};
  margin: 8px 0;
`;

