import React from 'react'

export default props => {
    
    let { min, max } = props
    if (min > max) [min, max] = [max, min]
    const aleatorio = parseInt((Math.random() * (max - min + 1)) + min)
    const isPar = aleatorio % 2 === 0

    return (

        <div>
            <h2>Valor aleatorio com condicional</h2>
            <p>O numero gerado foi <b>{aleatorio}</b></p>
            {isPar ? <span>O numero é <b>Par</b></span> : <span>O numero é <b>Impar</b></span>}         
            
        </div>

    )

}