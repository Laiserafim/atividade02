import { Title } from "./components/title";
import{ Quadrado} from "./components/Quadrado";
import {Botao} from "./components/botao";
import {ListaItens} from "./components/listaItens";

export default function Home() {
  return (
<div>
  <h1>Pagina Home</h1>
  <Quadrado/>
  <Title/>
  <Botao/>
  <ListaItens/>
</div>
  );
}
