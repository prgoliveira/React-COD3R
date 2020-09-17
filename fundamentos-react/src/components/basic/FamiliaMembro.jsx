import React from 'react'


export default props => {

    const { nome, sobrenome } = props

    return (
        <div>
            <span>{nome} <b>{sobrenome}</b></span>
        </div>
    )
}