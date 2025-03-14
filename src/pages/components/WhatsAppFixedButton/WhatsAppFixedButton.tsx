import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tooltip, Fab, tooltipClasses, TooltipProps } from '@mui/material';
import { BsWhatsapp as WhatsAppIcon } from "react-icons/bs";
import { MdKeyboardArrowUp as KeyboardArrowUpIcon } from "react-icons/md";
import { colorPalette } from '../../../utils/colors';

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  z-index: 999999;
`;

const ScrollToTopButton = styled(Fab)`
  background-color: #e0e0e0 !important;
  width: 10px;
  color: #000 !important;
  &:hover {
    background-color: #bdbdbd !important;
  }
    bottom: 70px;
`;

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: colorPalette.white,
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 11,
  },
}));

const WhatsAppButton = styled(Fab)`
  background-color: #25d366 !important;
  color: white !important;
  svg {
    font-size: 22px;
  }
  &:hover {
    background-color: #1da851 !important;
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

const WhatsAppFixedButton: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531999550808', '_blank');
  };

  return (
    <Container>
      {showScrollToTop && (
        <ScrollToTopButton size="medium" onClick={handleScrollToTop} aria-label="Voltar ao topo">
          <KeyboardArrowUpIcon />
        </ScrollToTopButton>
      )}

      <LightTooltip
        title={<span>Precisa de ajuda? <br /> Converse conosco</span>}
        placement="left"
      >
        <WhatsAppButton size="medium" onClick={handleWhatsAppClick} aria-label="WhatsApp">
          <WhatsAppIcon />
        </WhatsAppButton>
      </LightTooltip>
    </Container>
  );
};

export default WhatsAppFixedButton;
