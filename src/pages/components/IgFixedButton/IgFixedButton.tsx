import React from 'react';
import styled from 'styled-components';
import { Tooltip, Fab, tooltipClasses, TooltipProps } from '@mui/material';
import { BsInstagram as InstagramIcon } from "react-icons/bs";

const Container = styled.div`
  position: fixed;
  bottom: 80px;
  right: 16px;
  z-index: 9999999;
    display: flex;
  gap: 12px;
`;

const IgButtonStyled = styled(Fab)`
  background-color: #e4405f !important;
  color: white !important;
  svg {
    font-size: 22px;
  }
    width: 70px;  
  height: 70px; 
  &:hover {
    opacity: 0.8;
  }
  animation: jump 1s infinite ease-in-out;

  @keyframes jump {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }  
`;

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 11,
    },
}));

interface IgFixedButtonProps {
    profileUrl: string;
}

const IgFixedButton: React.FC<IgFixedButtonProps> = ({ profileUrl }) => {
    const handleInstagramClick = () => {
        window.open(profileUrl, '_blank');
    };

    return (
        <Container>
            <LightTooltip title="Siga-nos no Instagram" placement="left">
                <IgButtonStyled size="medium" onClick={handleInstagramClick} aria-label="Instagram">
                    <InstagramIcon />
                </IgButtonStyled>
            </LightTooltip>
        </Container>
    );
};

export default IgFixedButton;
