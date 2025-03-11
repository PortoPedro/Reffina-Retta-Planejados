import { Grid } from "@mui/material";
import * as styled from "./Diferenciais.styles";

const diferenciais = [
  {
    imagem: "./sofa-diferenciais.webp",
    titulo: "Cuidado em todos os detalhes",
    descricao: "Há décadas prezamos por cada detalhe para que a sua mudança ocorra da melhor maneira possível."
  },
  {
    imagem: "./caminhao-diferenciais.webp",
    titulo: "Frota Moderna",
    descricao: "Utilizamos uma frota em perfeitas condições, sempre renovada e com manutenção em dia."
  },
  {
    imagem: "./brasil-diferenciais.webp",
    titulo: "Atendemos todo o Brasil",
    descricao: "Atendemos em qualquer mudança, entre cidades ou entre estados do Brasil."
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
