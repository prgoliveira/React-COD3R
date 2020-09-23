import React from 'react'
import { useState } from 'react'

export default props => {

    const [valor, setValor] = useState(`
    Fé em Deus que ele é justo\n
    Ei irmão nunca se esqueça, na guarda, guerreiro\n
    Levanta a cabeça truta, onde estiver seja lá como for\n
    Tenha fé porque até no lixão nasce flor
`)

    function quandoDigitar(evento) {
        setValor(evento.target.value)
    }

    return (
        <div>
            <h2>Componente controlado por input</h2>
            <p>{valor}</p>
            <input style={{ fontSize: '70%' }} value={valor} onChange={quandoDigitar} />
        </div>
    )
}