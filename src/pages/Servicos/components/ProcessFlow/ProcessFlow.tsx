import styled from "styled-components";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import { Stepper, Step, StepLabel, Box, AccordionSummary, Accordion, AccordionDetails } from "@mui/material";
import { colorPalette } from "../../../../utils/colors";

const steps = [
  { title: "Contato", description: "Primeiro contato para entender suas necessidades." },
  { title: " Medição", description: "Realizamos a medição e o apuramento dos dados e características para prototipação do projeto." },
  { title: "Orçamento", description: "Com um esboço do projeto e especificações básicas da proposta acertadas, é calculado e prosposto um orçamento." },
  { title: "Produção", description: "Autorizada a produção do serviço, uma estimativa de prazo para otermino da confecção dos móveis e o começo da montagem é feita." },
  { title: "Montagem", description: "Transporte de todo o material e a montagem dos armários planejados é realizada." },
  { title: "Conclusão", description: "Depois da sucessão e acompnhamento minucioso do processo é finalizado, o resultado é gratificante " },
];

export function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <ProcessContainer>
      <ContentContainer className="container">
        <h4 className="title">
          Do orçamento à mudança
        </h4>

        <StepperContainer>
          <StepperStyled activeStep={-1} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index} onClick={() => setActiveStep(index)}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            ))}
          </StepperStyled>
        </StepperContainer>

        <MobileSteps>
          {steps.map((step, index) => (
            <Accordion
              key={index}
              expanded={activeStep === index}
              onChange={() => setActiveStep((prev) => prev === index ? null : index)}
              className={activeStep === index ? "selected" : ""}
            >
              <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                {step.title}
              </AccordionSummary>
              <AccordionDetails>{step.description}</AccordionDetails>
            </Accordion>
          ))}
        </MobileSteps>

        {activeStep !== null && (
          <div className="box-container">
            <StepDetails>
              <h6 className="step-title">
                {steps[activeStep].title}
              </h6>
              <p className="step-description">
                {steps[activeStep].description}
              </p>
            </StepDetails>
          </div>
        )}
      </ContentContainer>
    </ProcessContainer>
  );
}

export default ProcessFlow;

const ProcessContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 5%;
  background-color: ${colorPalette.light_gray};
`;

const ContentContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  .title {
    font-size: 2rem;
    font-weight: 600;
    color: ${colorPalette.primeira};
    margin-bottom: 20px;
  }

  .box-container {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 20px;
  }
`;

const StepperStyled = styled(Stepper)`
  .MuiStepLabel-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${colorPalette.primeira};
    transition: color 0.3s ease-in-out;
  }

  .MuiStepIcon-root {
    color: ${colorPalette.primeira}; 
    transition: color 0.3s ease-in-out;
  }

  .Mui-active .MuiStepIcon-root {
    color: ${colorPalette.segunda}; 
  }

  .MuiStepLabel-label.Mui-active {
    color: ${colorPalette.segunda};
  }

  .MuiStepConnector-line {
    border-color: ${colorPalette.terceira};
  }

  .MuiStep-root {
    cursor: pointer;
  }

  .MuiStep-root:hover .MuiStepIcon-root {
    color: ${colorPalette.segunda}; 
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StepperContainer = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    justify-content: center;
    display: flex;
  }
`;

const MobileSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colorPalette.primeira};
  }

  .MuiAccordion-region {
    text-align: left;
  }

  .selected {
    background-color: ${colorPalette.white}; 
    color: ${colorPalette.dark_gray};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const StepDetails = styled(Box)`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  text-align: left;

  .step-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colorPalette.primeira};
  }

  .step-description {
    font-size: 1rem;
    line-height: 200%;
    font-weight: 400;
    margin-bottom: 15px;
    margin-top: 8px;
    color: ${colorPalette.dark_gray};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
