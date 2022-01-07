import Layout from "../componentes/Layout";

export default function Jsx() {
    const titulo = <h1>Insulina</h1>

    function subtitulo() {
        return <h2>{'injetavel'.toUpperCase()}</h2>
    }
   
    return(
      <Layout titulo="Sacando o jsx">
        <div>
            {titulo}
            {/* {subtitulo()} */}
            <p>
                {JSON.stringify({ nome: 'joao' , idade: 30})}
            </p>
            <h2>{"the beatles".toUpperCase()}</h2>
        </div>
      </Layout>
    )
}