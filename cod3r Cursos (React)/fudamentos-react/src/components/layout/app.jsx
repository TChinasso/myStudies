import React from 'react'
import Primeiro from './components/primeiro'
// // import ComParametro from './components/ComParametro' 
// import ComFilhos from './components/ComFIlhos'
import Card from './components/layout/cards'

const App = (props) =>
    <div>
        <Card titulo="Exercicio 1">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="Exercicio y">
            teste Y
        </Card>

        
        {/* <Primeiro></Primeiro>
        <ComParametro titulo="Esse e o titulo" subtitulo="Esse e o subtitulo" /> */}

        {/* <ComFilhos>
            <ul>
                <li>Thiago</li>
                <li>Felipe</li>
                <li>Camile</li>
                <li>Cris</li>
            </ul>
        </ComFilhos> */}
    </div>,

export default App