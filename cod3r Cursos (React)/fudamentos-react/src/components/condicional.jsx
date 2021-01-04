import React from 'react'

const conditional = props => {
    return (
        <div>
            <h2>O Numero e: {props.numero}</h2>
            {props.numero % 2 == 0 ?  <span>Par</span> :<span>Impar</span> }         
        </div>
    )
}

export default conditional