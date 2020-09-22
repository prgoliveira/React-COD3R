import React from 'react'

export default props => {

    return (
        <div>
                <button onClick={props.setInc}>Incrementa </button> <br />
                <button onClick={props.setDec}>Diminui </button> <br />
                <button onClick={props.setZera}>Zerar</button>
        </div>
    )

}