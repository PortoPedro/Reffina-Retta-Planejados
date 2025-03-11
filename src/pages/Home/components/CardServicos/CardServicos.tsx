import * as styled from "./CardServicos.styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

interface CardServicosProps {
  titulo: string;
  imagem: string;
  descricao: string;
  link: string;
  width: string;
  onPaperClick?: () => void;
}

export function CardServicos({ titulo, imagem, descricao, width, link, onPaperClick }: CardServicosProps) {
  return (
    <Paper elevation={7} style={{ width }} onClick={onPaperClick}>
      <styled.CardContainer>
        <styled.ImageContainer>
          <styled.Image src={imagem} alt={titulo} />
        </styled.ImageContainer>
        <styled.Content>
          <div>
            <styled.Title>{titulo}</styled.Title>
            <styled.Description>{descricao}</styled.Description>
          </div>
          <Button
            variant="outlined"
            className="card-button"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = link;
            }}
          >
            Saiba mais
          </Button>
        </styled.Content>
      </styled.CardContainer>
    </Paper>
  );
}

export default CardServicos;
