import React from 'react'
export default function ComParametro (props){
    const aluno = props.aluno
    const nota = props.nota
    return (
        <div>
            <p>O aluno {aluno} tirou nota {nota}</p>
        </div>
    )
}