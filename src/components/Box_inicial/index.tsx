import banner_inicial from "../../assets/img/banner_inicial.png";
import { Background } from "./styled";
import texto from "../../assets/img/texto.png";

function BoxInicial() {
  return (
    <Background className="banner">
      <article className="banner_inicial">
        <img className="banner_inicia-_texto" src={texto} alt="texto"></img>
        <img
          className="banner_inicial_foto"
          src={banner_inicial}
          alt="banner"
        ></img>
      </article>
    </Background>
  );
}

export default BoxInicial;
