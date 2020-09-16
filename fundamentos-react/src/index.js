import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'

ReactDOM.render( 
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
        aluno="Gabriel"
        nota='10'
        />
    </div>
    , 
    document.getElementById('root')
)