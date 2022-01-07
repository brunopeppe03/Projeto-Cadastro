import Cabecalho from "../componentes/Cabecalho";
import Layout from "../componentes/Layout";

export default function Exemplo() {
    return (
           <Layout titulo="usando comṕonentes">
              <Cabecalho  titulo="Next.js & React"/>
              <Cabecalho  titulo="insulina"/>
            </Layout> 
    )
}