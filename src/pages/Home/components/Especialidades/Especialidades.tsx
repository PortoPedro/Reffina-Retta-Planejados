import * as styled from "./Especialidades.styles";

export function Especialidades() {
  return (
    <styled.EspecialidadesContainer>
      <styled.ContentContainer className="container">
        <div className="text-content">
          <h2>Nossas especialidades</h2>
          <hr />
          <span>
            Há décadas trabalhamos com excelência na produçao e montagem de móveis em:
            <br />
            <strong>– Cozinhas</strong>
            <strong>– Quartos</strong>
            <strong>– Banheiros</strong>
            <strong>– Salas de TV</strong>
            <strong>– Salas de Jantar</strong>
          </span>

        </div>
        <img src="./gaveta.jpg" alt="Foto Gaveta" className="especialidades-image" />
      </styled.ContentContainer>
    </styled.EspecialidadesContainer>
  );
}

export default Especialidades;
