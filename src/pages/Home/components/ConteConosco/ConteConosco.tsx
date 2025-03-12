import { Button } from "@mui/material";
import * as styled from "./ConteConosco.styles";

export interface ConteConoscoProps {
  title: string;
  description: string;
  subdescription?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;  // Agora opcional
  videoSrc?: string;  // Nova prop opcional para vídeo
}

export function ConteConosco(props: ConteConoscoProps) {
  const { title, description, subdescription, buttonText, buttonLink, imageSrc, videoSrc } = props;

  return (
    <styled.ConteConoscoContainer>
      <styled.ContentContainer className="container">
        <div className="text-content">
          <h2>{title}</h2>
          <hr />
          <p>{description}</p>
          <p><strong>{subdescription}</strong></p>


          {buttonLink && buttonText && (
            <Button
              variant="outlined"
              className="saiba-mais-button"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = buttonLink;
              }}
            >
              {buttonText}
            </Button>
          )}

        </div>

        {/* Renderiza vídeo se videoSrc for passado, senão exibe imagem */}
        {videoSrc ? (
          <styled.Video className="conte-conosco-video" width="100%"
            autoPlay
            loop
            muted
            playsInline>
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </styled.Video>
        ) : (
          imageSrc && <img src={imageSrc} className="conte-conosco-image" alt="Conte Conosco" />
        )}
      </styled.ContentContainer>
    </styled.ConteConoscoContainer>
  );
}

export default ConteConosco;
