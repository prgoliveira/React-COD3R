import React from 'react'
import If, { Else } from './if'

export default props => {

    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && usuario.nome}>
                <p>Logado como {usuario.nome}</p>
                <Else test={!usuario || !usuario.nome}>
                    <p>Logado como Anonimo</p>
                </Else>
            </If>
        </div>
    )
}