import React from 'react'
import './Card.css'

export default props => {
    const {titulo, children, color} = props

    const cardStyle = {
        backgroundColor: color || '#F00',
        borderColor: color || '#F00'
    }

    return(
        <div className="Card" style={cardStyle}>
            <div className="Title">{titulo}</div>
            <div className="Content">{children}</div>
        </div>
    )
}