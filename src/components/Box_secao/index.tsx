import climbing from "../../assets/categoria/climbing.png";
import { Secao } from "./styled";

function BoxSecao() {
  return (
    <Secao>
      <div className="secao">
        <div className="imagem_secao">
          <img className="Climbing" src={climbing} alt="Climbing"></img>
        </div>
        <button className="botao">CLIMBING</button>
      </div>
    </Secao>
  );
}

export default BoxSecao;
