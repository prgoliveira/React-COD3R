import React, { cloneElement } from 'react'

export default props => {
    return (
        <div>
            <h2>Membros da Familia</h2>
            {
                props.children.map((child, id) => {
                    return cloneElement(child, { ...props, key: id })
                })
            }
        </div>
    )
}