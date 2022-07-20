import climbing from "../../assets/categoria/climbing.png";
import { Secao } from "./styled";
import section2 from "../../assets/categoria/section2.png";
import section3 from "../../assets/categoria/section3.png";
import section4 from "../../assets/categoria/section4.png";
import section5 from "../../assets/categoria/section5.png";
import section6 from "../../assets/categoria/section6.png";
import section7 from "../../assets/categoria/section7.png";
import section8 from "../../assets/categoria/section8.png";

function BoxSecao() {
  return (
    <Secao>
      <div className="secao">
        <div className="imagem_secao">
          <img className="Climbing" src={climbing} alt="Climbing"></img>
          <button className="botao">CLIMBING</button>
        </div>

        <div className="imagem_secao">
          <img className="Climbing" src={section2} alt="Climbing"></img>
          <button className="botao">CITY BIKING</button>
        </div>
        <div className="imagem_secao">
          <img className="Climbing" src={section3} alt="Climbing"></img>
          <button className="botao">HIKE & CAMP</button>
        </div>
        <div className="imagem_secao">
          <img className="Climbing" src={section4} alt="Climbing"></img>
          <button className="botao">BASKETBALL</button>
        </div>
        <div className="imagem_secao">
          <img className="Climbing" src={section5} alt="Climbing"></img>
          <button className="botao">BASEBALL</button>
        </div>
        <div className="imagem_secao">
          <img className="Climbing" src={section6} alt="Climbing"></img>
          <button className="botao">BADMINTON</button>
        </div>
        <div className="imagem_secao">
          <img className="Climbing" src={section7} alt="Climbing"></img>
          <button className="botao">ARCHERY</button>
        </div>
        <div className="imagem_secao">
          <img className="Climbing" src={section8} alt="Climbing"></img>
          <button className="botao">CATEGORY</button>
        </div>
      </div>
    </Secao>
  );
}

export default BoxSecao;
