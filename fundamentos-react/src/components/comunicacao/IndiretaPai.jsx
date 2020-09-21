import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => { 
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [trabalha, setTrabalha] = useState(false)
  
    function fornecerInformações (nome, idade, trabalha){
        setNome(nome)
        setIdade(idade)
        setTrabalha(trabalha)
    }
    
    return (
        <div>
            <p>Nome: {nome}</p>
            <p> idade: {idade}</p>
            <p>Trabalha: {trabalha ? 'Trabalha' : 'Desempregado'}</p>
            <IndiretaFilho quandoClicar={fornecerInformações} />
        </div>
    )
}