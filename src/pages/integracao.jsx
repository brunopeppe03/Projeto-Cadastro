import Layout from '../componentes/Layout'
export default function Integracao() {


    
    fetch('http://localhost:3000/api/clientes/123')
        .then(resp => resp.json())
        .then(dados => console.log(dados));

    return(
        <Layout>

        <div>
            <ul>
                <li>Codigo:</li>
                <li>Nome:</li>
                <li>Email:</li>
            </ul>
        </div>

        </Layout>
       
    )
}