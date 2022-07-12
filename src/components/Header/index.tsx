import { Header } from "./styled";
import logo from "../../assets/img/logo.png";
import lupa from "../../assets/icon/lupa.png";

function Cabecalho() {
  return (
    <Header>
      <nav>
        <div className="logo">
          <img src={logo} alt="skale"></img>
        </div>
        <div className="input">
          <img src={lupa} alt="lupa"></img>
          <input type="search" placeholder="search here for your product" />
        </div>
      </nav>
    </Header>
  );
}

export default Cabecalho;
