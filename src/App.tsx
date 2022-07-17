import Cabecalho from "./components/Header";
import { Menu } from "./components/Menu";
import BoxInicial from "./components/Box_inicial";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Menu />
      <BoxInicial />
    </div>
  );
}

export default App;
