import { Grid } from "@mui/material";
import * as styled from "./Diferenciais.styles";

const diferenciais = [
  {
    imagem: "./custom-diferenciais.png",
    titulo: "Personalização Total",
    descricao: "Projetos sob medida, adaptados ao seu espaço e estilo, com diversas opções de materiais e acabamentos."
  },
  {
    imagem: "./qualidade-diferenciais.png",
    titulo: "Qualidade e Durabilidade",
    descricao: "Materiais de alta qualidade para móveis resistentes, funcionais e com acabamento impecável."
  },
  {
    imagem: "./consulta-diferenciais.png",
    titulo: "Atendimento Consultivo",
    descricao: "Acompanhamos você em todas as etapas, garantindo um serviço personalizado e sem complicações."
  }
];

export function Diferenciais() {
  return (
    <styled.DiferenciaisContainer className="container">
      <div className="title">
        <h1>Nossos Diferenciais</h1>
        <hr />
      </div>
      <Grid container spacing={3} justifyContent="center">
        {diferenciais.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <styled.DiferencialCard elevation={7}>
              <img src={item.imagem} alt={item.titulo} />
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </styled.DiferencialCard>
          </Grid>
        ))}
      </Grid>
    </styled.DiferenciaisContainer>
  );
}

export default Diferenciais;
