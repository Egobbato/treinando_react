import { Header } from "./styled";
import logo from "../../assets/img/logo.png";
import lupa from "../../assets/icon/lupa.png";
import shape from "../../assets/icon/shape.png";
import boneco from "../../assets/icon/boneco.png";
import coracao from "../../assets/icon/coracao.png";
import carrinho from "../../assets/icon/carrinho.png";

function Cabecalho() {
  return (
    <Header>
      <nav>
        <div className="logo">
          <img src={logo} alt="skale"></img>
        </div>
        <div className="input">
          <img className="input-input_img" src={lupa} alt="lupa"></img>

          <input
            className="input-input"
            type="search"
            placeholder="search here for your product"
          />
        </div>
        <div className="icones">
          <ul>
            <li>
              <a href="home">
                <img className="icones-icones" src={shape} alt="shape"></img>
              </a>
            </li>
            <li>
              <a href="home">
                <img className="icones-icones" src={boneco} alt="shape"></img>
              </a>
            </li>
            <li>
              <a href="home">
                <img className="icones-icones" src={coracao} alt="shape"></img>
              </a>
            </li>
            <li>
              <a href="home">
                <img className="icones-icones" src={carrinho} alt="shape"></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Header>
  );
}

export default Cabecalho;
