import React from 'react'

export default function ComParametro(props) {

    const { aluno, nota } = props

    return (
        <div>
            <h2>Com Parâmetros</h2>
            <p>O aluno {aluno} tirou nota {nota}</p>
        </div>
    )
}