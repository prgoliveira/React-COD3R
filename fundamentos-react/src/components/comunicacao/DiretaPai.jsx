import React from 'react'

import DiretaFilho from './DiretaFilho'

export default props => { 
    return (
        <div>
            <DiretaFilho
            nome='Gabriel'
            idade={27}
            bool={true}
            /> 
            <hr/>
            <DiretaFilho
            nome='Matheus'
            idade={17}
            maior={false}
            />
            
        </div>
    )
}