import React from 'react'
import { useState } from 'react'

export default props => {
    
    const [valor, setValor] = useState('Inicial')
    
    function quandoDigitar (evento) {
        setValor(evento.target.value)
    }

    return(
        <div>
            <h2>{valor}</h2>
            <input style={{fontSize: '70%'}} value={valor} onChange={quandoDigitar}/>
        </div>
    )
}