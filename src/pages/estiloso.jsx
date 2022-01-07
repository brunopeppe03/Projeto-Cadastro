import styles from '../styles/Estiloso.module.css'
import Layout from '../componentes/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">

    <div  className={styles.roxo} >
       
          <h1>DEPOSTERON</h1>
        </div>

        </Layout>
    )
}