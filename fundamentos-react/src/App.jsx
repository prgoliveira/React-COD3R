import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Aleatorio from './components/basic/Aleatorio'


export default _ => {
    return (
        <div id="app">
            <Aleatorio 
                min={100}
                max={1}
            />
            <Fragmento />
            <Primeiro></Primeiro>
            <ComParametro
                aluno="Gabriel Oliveira"
                nota='10'
            />
        </div>
    )
}

