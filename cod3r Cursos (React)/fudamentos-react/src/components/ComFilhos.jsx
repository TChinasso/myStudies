import React from 'react'

const ComFilhos = (props) =>
    
    <div>
        <div>
            <h1>Com Filhos:</h1>
        </div>
        <div>
            {props.children}
        </div>
    </div>

export default ComFilhos