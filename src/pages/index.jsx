import Navegador from "../componentes/Navegador"

export default function Inicio() {
    {console.log('%cCOCA-COLA', "color:black;background-color:red;font-size:100px")}
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
            
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="green"/>
            <Navegador texto="Exemplo" destino="/exemplo"  cor="blue"/>
            <Navegador texto="jsx" destino="/jsx" cor="red"/>
            <Navegador texto="navegacao 1" destino="/navegacao" cor="yellow"/>
           < Navegador texto="navegacao 2" destino="/cliente/sp-2/123" cor="blue"/>
           < Navegador texto="Componente com Estado" destino="/estado" cor="pink"/>
           < Navegador texto="Integracao 1" destino="/integracao" cor="red"/>
        </div>
    )
}