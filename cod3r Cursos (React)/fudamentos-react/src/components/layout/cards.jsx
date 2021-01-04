import React from 'react'
import './cards.css'

const Card = (props) =>
    <div className="card">
    <div className="Content">
        {props.children}
    </div>
    <div className="Footer">
        {props.titulo}
    </div>
    </div>

export default Card
    