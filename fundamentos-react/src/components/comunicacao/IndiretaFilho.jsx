import React from 'react'

export default props => {     
    return (
        <div>
            <p>Filho</p>
            <button 
            onClick={ function (e) {
                    props.quandoClicar('Edimar', 50, true)
                }}> 
            Fornecer informações
            </button>
        </div>
    )
}