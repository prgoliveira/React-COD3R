import React from 'react'

export default (props) => {

    let { min, max} = props

    if(min>max) [min, max] = [max, min]

    const aleatorio = parseInt((Math.random() * (max - min + 1)) + min)

    return (
        <React.Fragment>
            <h2>Desafio Numero aleatorio</h2>
            <p>O valor minimo é {min}</p>
            <p>O valor maximo é {max}</p>
            <p>O numero aleatorio gerado foi <b>{aleatorio}</b></p>
        </React.Fragment>
    )
}