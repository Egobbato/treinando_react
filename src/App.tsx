import Cabecalho from "./components/Header";
import { Menu } from "./components/Menu";
import BoxInicial from "./components/Box_inicial";
import BoxSecao from "./components/Box_secao";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Menu />
      <BoxInicial />
      <BoxSecao />
    </div>
  );
}

export default App;
