import { useState } from 'react'
//Componente <Contador /> 
function Home() {
    return (
        <div>
            <h1>React gone Home</h1>
            <Contador /> 
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}> Adicionar</button>
        </div>
    )
}
export default Home