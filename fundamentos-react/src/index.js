import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basic/First'
import ComParametro from './components/basic/ComParametro'

ReactDOM.render( 
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
        titulo="Segundo componente"
        subtitulo='Dahora cara'
        />
    </div>
    , 
    document.getElementById('root')
)