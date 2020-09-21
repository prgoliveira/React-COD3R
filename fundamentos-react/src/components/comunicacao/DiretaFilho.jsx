import React from 'react'

export default props => {
    const { nome, idade, bool } = props
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>{bool ? 'Maior de Idade' : 'Menor de Idade'}</p>         
        </div>
    )
}