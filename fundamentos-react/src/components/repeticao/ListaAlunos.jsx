import React from 'react'
import alunos from '../../data/alunos'

export default props => {

    const listaAlunos = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>Aluno: {aluno.aluno} - Nota: {aluno.nota} </li>
        )
    })

    return (
        <div>
            <h2>Lista de alunos</h2>
            <ul style={ {listStyle: 'none'} }>
                {listaAlunos}
            </ul>
        </div>
    )

}