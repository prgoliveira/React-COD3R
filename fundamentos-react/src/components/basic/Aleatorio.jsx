import React from 'react'

export default (props) =>{
    const min = props.min
    const max = props.max
    console.log(props)
    const aleatorio = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const random = aleatorio(min, max)
    return(
        <React.Fragment>
            <h2>Desafio Numero aleatorio</h2>
            <p>O numero aleatorio gerado foi {random}</p>
        </React.Fragment>
    )
}