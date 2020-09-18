import React from 'react'
import If from './if'

export default props =>{
    
    const usuario = props.usuario || {}

    return(
        <div>
            <If test={usuario && usuario.nome}>
                <p>Você esta logado como {usuario.nome}</p>
            </If>
            <If test={!usuario || !usuario.nome}>
                <p>Você esta logado como Anonimo</p>
            </If>
        </div>
    )
}